import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-base-200">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-orange-600">Service</h1>
        <h2 className="text-6xl font-bold mt-3">Our Service Area</h2>
        <p className=" text-gray-600 mt-5">
          The majority have suffered alteration in some form, by injected
          humour, or Randomised
          <br /> words which don't look even slightly believable.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 gap-3 mx-auto mt-8">
        {
        services.map((service) => (
          <ServicesCard
           key={service._id}
           service={service}
          ></ServicesCard>
        ))
        }
      </div>
    </div>
  );
};

export default Services;
