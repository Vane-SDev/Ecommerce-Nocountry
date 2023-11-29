import React from "react";
import { Link } from "react-router-dom";
import { FaPercentage, FaGift, FaTag, FaStar } from "react-icons/fa";
import Products from "./products.json"


export default function HomeCards() {
  const products = Products

  return (
    <div className="bg-gray-100">
      <div className="pt-28 md:pt-5 md:mx-40 ">
      
          <h2 className="text-3xl font-bold text-center mb-6">
            Nuestros Productos
          </h2>
          <div className="flex flex-wrap gap-5 justify-center  pb-20">
            {products.map((product) => (
              <Link to={product.url} key={product.id}>
                <div
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <div className="flex justify-center  w-64 h-72">
                    <img src={product.image} alt={product.title} className="m-4" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}
