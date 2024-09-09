import React from "react";
import Slider from "react-slick";
import { TestimonialData } from "./testimonialData";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">
            What are costumer saying about us
          </h1>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-1 p-8 shadow-lg mx-4 rounded-xl hover:bg-primary/5">
                  {/* --- */}
                  <div className="flex justify-start items-center gap-5">
                    <div className="h-16 w-16 border border-gray-50 rounded-full bg-red-400 text-4xl flex items-center justify-center text-white">
                      {data.latter}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-black/8">
                        {data.name}
                      </p>
                    </div>
                  </div>
                  {/* -- */}
                  <div className="py-4 space-y-4">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
