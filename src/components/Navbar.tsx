import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showSidebar = () => setShowMenu(true);
  const closeSidebar = () => setShowMenu(false);
 
  return (
    <>
      <div className="bg-white">
        <SectionContainer>
          <nav className="flex flex-row items-center justify-between py-8">
            <a href="/" className="w-[120px] sm:w-[150px]">
              <img src={logo} className="w-full" alt="" />
            </a>
            <div className="flex flex-row items-center">
              <ul className="hidden md:flex flex-row items-center uppercase">
                <li className="mr-8 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="text-gray-800 hover:text-red capitalize text-sm opacity-80 block"
                  >
                    features
                  </a>
                </li>
                <li className="mr-8 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="text-gray-800 hover:text-red capitalize text-sm opacity-80 block"
                  >
                    pricing
                  </a>
                </li>
                <li className="mr-8 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="text-gray-800 hover:text-red capitalize text-sm opacity-80 block"
                  >
                    contact
                  </a>
                </li>
                <li className="relative opacity-80 hover:opacity-100">
                  <Button custormStyle="bg-red border-2 border-red hover:text-red" textButton="login" target="https://login.fjdslk" />
                </li>
              </ul>
              <button
                onClick={showSidebar}
                className="flex flex-col md:hidden p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </nav>
        </SectionContainer>
      </div>
      <Sidebar show={showMenu} setCloseMenu={closeSidebar} />
    </>
  );
}

export default Navbar;
