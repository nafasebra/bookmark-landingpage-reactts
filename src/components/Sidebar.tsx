import logo from "../assets/logo.svg";
import Button from "./Button";

type props = {
  show: boolean;
  setCloseMenu: () => void;
};

function Sidebar(props: props) {
  const { show, setCloseMenu } = props;

  return (
    <aside
      className={`${
        show ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"
      } fixed inset-0 bg-dark overflow-hidden block md:hidden`}
    >
      <div className="flex flex-col justify-between w-[90%] mx-auto text-white py-10 h-full">
        <div>
          <div className="flex items-center justify-between mx-auto">
            <img src={logo} className="filter invert" alt="the logo bookmark" />
            <button
              onClick={() => setCloseMenu()}
              className="flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="text-center py-10 uppercase">
            <li className="py-5 border-t-[1px] border-gray-500">
              <a href="https://go.com" className="hover:text-green">
                features
              </a>
            </li>
            <li className="py-5 border-t-[1px] border-gray-500">
              <a href="https://go.com" className="hover:text-green">
                pricing
              </a>
            </li>
            <li className="py-5 border-t-[1px] border-gray-500">
              <a href="https://go.com" className="hover:text-green">
                contact
              </a>
            </li>
            <li className="py-5 border-t-[1px] border-gray-500">
              <Button
                textButton="LOGIN"
                target="#"
                custormStyle="border-2 border-white hover:text-black hover:bg-white bg-transparent"
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a href="#" className="mr-7 text-white hover:text-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="currentColor"
                className="transition-none"
                fillRule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="currentColor"
                className="transition-none"
                fillRule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
