import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img className="w-3/4 rounded-lg" src={person} />
          <img
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg"
            src={parts}
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="mb-6 text-orange-600 text-xl font-bold">About Us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="pt-6 font-medium text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-3 font-medium text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-orange-600 mt-11">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
