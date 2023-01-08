import React, { useState } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="relative w-full">
      <div className="absolute top-0 w-full h-5 bg-gradient-to-r from-green-400  to-blue-500"></div>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="">
              <img
                className="w-full h-10 md:h-12"
                src="/logoNovaTech.svg"
                alt="logoNovaTech"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 uppercase">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="">Companie</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="">Produits</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="">Presse</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="">A propos de nous</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <GlobeEuropeAfricaIcon className="h-6 w-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
