import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animate";

const Equipmentdata = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Discover a world of yoga essentials to enhance your practice.",
    icon: <GrYoga />,
    link: "/",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equipments",
    desc: "We offer a wide range of high-quality fitness equipment to help you achieve your fitness goals.",
    icon: <FaDumbbell />,
    link: "/",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "Discover a wide range of high-quality fitness equipment to transform your home into a personal gym.",
    icon: <GiGymBag />,
    link: "/",
    delay: 0.9,
  },
];

export const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What We offer for you
            </h1>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          {Equipmentdata.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="space-y-4 p-6 bg-[#fbfbfb] rounded-xl hover:bg-white hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
