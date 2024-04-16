import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} className="rounded-xl h-72" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="mt-3 text-xl font-semibold text-orange-600">Price: ${price}</p>
          <div className="card-actions mt-3">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="absolute right-10 bottom-16 text-orange-600 text-2xl">
          <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
