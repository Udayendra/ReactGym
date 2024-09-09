import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white ">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>React</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reprehenderit nobis animi magni, aliquam exercitationem molestias
              atque repellendus numquam! Facere?
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#">
                <HiLocationMarker />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* footer link  */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-left font-bold text-justify mb-5 text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Abour Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-left font-bold text-justify mb-5 text-xl">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-left font-bold text-justify mb-5 text-xl">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-300/10">
                <span className="text-sm text-gray-300 opacity-70">@copyright 2024</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
