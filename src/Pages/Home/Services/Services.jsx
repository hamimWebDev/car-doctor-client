import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center bg-base-200">
        <h1 className="text-2xl font-semibold text-orange-600">Service</h1>
        <h2 className="text-6xl font-bold mt-3">Our Service Area</h2>
        <p className=" text-gray-600 mt-5">
          The majority have suffered alteration in some form, by injected
          humour, or Randomised
          <br /> words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <p>Services:{services.length}</p>
      </div>
    </div>
  );
};

export default Services;
