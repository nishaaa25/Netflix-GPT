import React from "react";

const Footer = () => {
  return (
    <div className="relative z-30 text-gray-600 bg-black bg-opacity-80 mt-8" >
      <div className=" w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 m-auto pb-20 pt-8 mt-16">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="flex justify-between text-[13px] mt-7">
          <ul>
            <li className="mt-2">
              <a href="#h">FAQ</a>
            </li>
            <li className="mt-2">
              <a href="#h">Cookie Preferences</a>
            </li>
          </ul>
          <ul>
            <li className="mt-2">
              <a href="#h">Help Centre</a>
            </li>
            <li className="mt-2">
              <a href="#h">Coorporate Information</a>
            </li>
          </ul>
          <ul>
            <li className="mt-2">
              <a href="#h">Terms of Use</a>
            </li>
          </ul>
          <ul>
            <li className="mt-2">
              <a href="#h">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
