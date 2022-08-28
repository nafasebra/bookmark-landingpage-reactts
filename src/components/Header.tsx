import Button from "./Button";
import heroImage from "../assets/illustration-hero.svg";


function Header() {
  return (
    <header className="headerImage">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:w-[990px] mx-auto">
        <div className="text-center w-full px-4 py-10 lg:w-[45%] lg:text-left lg:py-20">
          <hr className="w-full lg:w-[40%] hidden lg:block border-white mb-10" />
          <h1 className="text-2xl lg:text-4xl leading-10 pb-5 capitalize">
            Next generation digital banking
          </h1>
          <p className="text-sm opacity-70 mb-5 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis repudiandae magnam tempora repellendus ad suscipit quo
            praesentium nisi dolor debitis.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button target="#" textButton="Request Invite" custormStyle="bg-blue border-2 border-blue hover:text-blue" />
          </div>
        </div>
        <div className="w-[85%] sm:w-[65%] lg:w-[40%] mx-auto lg:mx-0">
          <img src={heroImage} className="w-[90%] mx-auto" alt="the hero image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
