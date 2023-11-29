import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { Twirl as Hamburger } from "hamburger-react";
import logoImage from "/assets/logo.png";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false); // State to control the hamburger menu visibility
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const categories = [
    {
      id: 1,
      name: "Celulares",
      link: "/category/celulares",
    },
    {
      id: 2,
      name: "Notebooks",
      link: "/category/notebooks",
    },
    {
      id: 3,
      name: "Tablets",
      link: "/category/tablets",
    },
  ];

  return (
    <div className="bg-gray-800 fixed z-50 w-full">
      <nav className="p-2 flex flex-col items-center md:mx-10 lg:mx-56">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold w-20 mr-8 md:mr-16">
            <img src={logoImage} alt="Logo" />
          </Link>

          <form className="flex-grow flex items-center mr-10">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-6 py-2 text-lg rounded-l border border-r-0 focus:outline-none w-full"
              aria-label="Search"
            />
            <button
              type="submit"
              className="px-4 py-3 border rounded-r bg-white text-gray-700"
              aria-label="Submit Search"
            >
              <RiSearchLine size={20} />
            </button>
          </form>

          <div className="hidden md:flex space-x-4 font-semibold text-white">
            <div className="relative group items-center">
              <button className="p-2">Categorías</button>
              <div className="dropdown-content hidden absolute bg-white shadow-lg group-hover:block">
                {categories.map((category) => (
                  <Link key={category.id} to={category.link}>
                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/signin">
              <button className="p-2">
                Ingresar
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-600 hover:bg-blue-800 p-2 rounded font-bold">
                Registrarse
              </button>
            </Link>
            <button className="p-2">
              <RiShoppingCartLine size={24} aria-label="Shopping Cart" />
            </button>
          </div>

          {/* Hamburger Menu */}
          <div
            onClick={() => setOpen(!isOpen)}
            className="z-50 md:hidden mt-2 mr-4"
          >
            <Hamburger
              color="white"
              size={20}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>

        {/* Hamburger Menu Content */}
        <div
          className={`fixed h-screen w-full bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setOpen(false)}
        ></div>
        <ul
          className={`md:hidden fixed top-0 right-0 h-screen w-3/5 px-10 space-y-8 bg-gray-800 flex flex-col pt-32 text-white text-xl transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition duration-300 ease-in-out`}
        >
          <Link to="/signin">
            <button onClick={() => setOpen(!isOpen)} className="p-2">
              Ingresar
            </button>
          </Link>
          <Link to="/signup">
            <button onClick={() => setOpen(!isOpen)} className="bg-blue-600 hover:bg-blue-800 p-2 rounded font-bold">
              Registrarse
            </button>
          </Link>
          <div className={`relative group items-center`}>
            <button className="p-2" onClick={() => setSubmenuOpen(!isSubmenuOpen)}>
              Categorías
            </button>
            <div className={`dropdown-content ${isSubmenuOpen ? "block" : "hidden"} absolute bg-white shadow-lg z-50`}>
              {categories.map((category) => (
                <Link key={category.id} to={category.link}>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    {category.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>

        </ul>
      </nav>
    </div>
  );
}
