import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10 text-white">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide6"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10 text-white">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10 text-white">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={img4} className="w-full rounded-xl text-white" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full ">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full ">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(29, 29, 29, 0)]">
          <div className="space-y-7 pl-4  justify-end ml-10">
            <h2 className="text-6xl font-semibold mb-8 ">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </h2>
            <p className="text-xl mb-5">
              There are many variations of passages of available, but
              <br /> the majority have suffered alteration in some form
            </p>
            <div className="gap-4">
              <button className="btn btn-primary mr-5 bg-orange-600 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary mr-5">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-10 mr-10">
          <a
            href="#slide5"
            className="btn btn-circle bg-transparent text-white hover:bg-orange-600 mr-5"
          >
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
