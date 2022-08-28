import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Button from "./components/Button";
import Faq from "./components/Faq";

import chromeIcon from "./assets/logo-chrome.svg";
import firefoxIcon from "./assets/logo-firefox.svg";
import operaIcon from "./assets/logo-opera.svg";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Tabbar />

      <SectionContainer>
        <div className="w-full md:w-[600px] mx-auto">
          <h2 className="text-2xl lg:text-3xl text-center font-semibold">
            Download the extension
          </h2>
          <p className="py-5 text-center opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            consequuntur excepturi illo eaque veniam quia, facilis in ex tempora
            repellat!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center pb-36">
          <div className="w-full lg:w-[27%] rounded-md mx-auto shadow-shadow-bluw p-5">
            <div className="w-20 h-20 flex items-center justify-center mx-auto">
              <img
                src={chromeIcon}
                className="w-full mx-auto"
                alt="the chrome browser"
              />
            </div>
            <h3 className="font-semibold text-xl pt-4 pb-2 text-center">Add to chrome</h3>
            <p className="text-sm text-center pb-10 opacity-80">minimum version 62</p>
            <Button
              target="#"
              textButton="Install extension"
              custormStyle="bg-blue border-2 border-blue hover:text-blue"
            />
          </div>
          <div className="w-full lg:w-[27%] rounded-md mx-auto shadow-shadow-bluw p-5 translate-y-10">
            <div className="w-20 h-20 flex items-center justify-center mx-auto">
              <img
                src={firefoxIcon}
                className="w-full mx-auto"
                alt="the firefox browser"
              />
            </div>
            <h3 className="font-semibold text-xl pt-4 pb-2 text-center">Add to firefox</h3>
            <p className="text-sm text-center pb-10 opacity-80">minimum version 62</p>
            <Button
              target="#"
              textButton="Install extension"
              custormStyle="bg-blue border-2 border-blue hover:text-blue"
            />
          </div>
          <div className="w-full lg:w-[27%] rounded-md mx-auto shadow-shadow-bluw p-5 translate-y-20">
            <div className="w-20 h-20 flex items-center justify-center mx-auto">
              <img
                src={operaIcon}
                className="w-full mx-auto"
                alt="the opera browser"
              />
            </div>
            <h3 className="font-semibold text-xl pt-4 pb-2 text-center">Add to opera</h3>
            <p className="text-sm text-center pb-10 opacity-80">minimum version 62</p>
            <Button
              target="#"
              textButton="Install extension"
              custormStyle="bg-blue border-2 border-blue hover:text-blue"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="py-24 w-full md:w-[600px] mx-auto">
          <h2 className="text-2xl lg:text-3xl text-center font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="py-5 text-center opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            consequuntur excepturi illo eaque veniam quia, facilis in ex
            tempora repellat!
          </p>
          <Faq />
          <div className="flex justify-center">
            <Button target="#" textButton="More Info" custormStyle="bg-blue border-2 border-blue hover:text-blue" />
          </div>
        </div>
      </SectionContainer>

      <div className="bg-light-blue">
        <div className="w-[90%] md:w-[550px] mx-auto py-16">
          <p className="uppercase text-sm tracking-[0.4rem] text-center text-white">35.000+ already joined</p>
          <h3 className="font-semibold text-2xl lg:text-3xl text-center py-10 text-white">
            Stay up-to-date with what we're doing
          </h3>
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
