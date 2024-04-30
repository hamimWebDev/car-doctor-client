import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, img, description } = service;
  const [showFullString, setShowFullString] = useState(false);
  const initialString = description;

  const handleSeeMoreClick = () => {
    setShowFullString(true);
  };
  const handleSeeLessClick = () => {
    setShowFullString(false);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });

    const { firstName, lastName, phone, email, message } = formData;
    console.log(firstName, lastName, phone, email, message);
  };

  return (
    <div>
      <h1 className="text-center text-3xl mb-2 italic text-red-800 font-semibold">
        Service Information
      </h1>
      <div className="lg:flex lg:justify-between w-[80%] mx-auto bg-base-300 rounded-xl mb-10">
        <div className="p-6">
          <h3 className="text-2xl">Service Name: {title}</h3>
          <h5 className="text-2xl">Price: ${price}</h5>
          <h6 className="text-sm">
            {showFullString ? (
              <div>
                <p>{initialString}</p>
                <button
                  className="text-blue-600 underline"
                  onClick={handleSeeLessClick}
                >
                  See Less
                </button>
              </div>
            ) : (
              <div>
                <p>{initialString.slice(0, 120)}...</p>
                <button
                  className="text-blue-600 underline"
                  onClick={handleSeeMoreClick}
                >
                  See More
                </button>
              </div>
            )}
          </h6>
        </div>
        <img className="h-80 rounded-xl" src={img} alt="" />
      </div>
      <div className="mb-10">
        <h1 className="text-center text-3xl mb-2 italic text-red-800 font-semibold">
          Check Out Now
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-[85%] mx-auto bg-base-300 rounded-xl p-6 "
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4 w-full ">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Your Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4 w-full ">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              className="w-full bg-orange-700 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
