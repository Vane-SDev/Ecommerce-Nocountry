import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mt-4">
          {/* <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Categorías</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Acerca de</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Contacto</a>
            </li>
          </ul> */}
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center mt-6">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
