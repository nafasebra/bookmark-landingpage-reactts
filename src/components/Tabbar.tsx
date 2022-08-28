import { useState } from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import { tabs } from "../data"

function Tabbar() {
  const [current, setCurrent] = useState<number>(0);


  return (
    <SectionContainer>
      <div className="py-24">
        <div className="w-full md:w-[600px] mx-auto">
          <h2 className="text-2xl lg:text-3xl text-center font-semibold">
            Features
          </h2>
          <p className="py-5 text-center opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            consequuntur excepturi illo eaque veniam quia, facilis in ex tempora
            repellat!
          </p>

          <div className="flex flex-col lg:flex-row items-center pt-5">
            {
              tabs?.map((item, index) => (
                <div key={index} onClick={() => setCurrent(index)} className={`flex items-center justify-center w-full lg:w-[calc(100%/3)] border-b-[1px] border-gray-300 px-2 py-6 capitalize relative after:contents-['*'] after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-1 after:bg-red ${index === current ? "text-black after:opacity-100" : "text-gray-400 after:opacity-0"}`}>
                  <p className="cursor-pointer">{item.tabName}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="py-5">
          {
            tabs?.map((item, index) => (
              <div key={index} className={`flex flex-col-reverse lg:flex-row items-center justify-between py-5 ${index !== current ? "hidden" : ""}`}>
                <div className="w-full lg:w-[45%] py-5">
                  <img src={item.image} className="w-full" alt={`the ${item.image} image`} />
                </div>
                <div className="w-full lg:w-[45%] py-5">
                  <h2 className="text-center lg:text-left text-xl lg:text-3xl font-semibold leading-10">{item.title}</h2>
                  <p className="text-center lg:text-left py-5 opacity-70">{item.description}</p>
                  <div className="flex justify-center lg:justify-start">
                    <Button
                      target="#"
                      textButton="request invite"
                      custormStyle="bg-blue border-2 border-blue hover:text-blue"
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </SectionContainer>
  );
}

export default Tabbar;
