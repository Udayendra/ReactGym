import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animate";

const Banner2 = () => {
  return (
    <div className="container my-14">
      {/* brand info */}
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-8 lg:px-44 md:px-20">
          <motion.h1
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-3xl font-bold uppercase text-center"
          >
            Get 20% Discount On Your First Order, Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-center"
          >
            We will make sure you get the right and the best quality products
            for your workout
          </motion.p>
          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <button className="primary-btn">Learn More</button>
            <button
              variants={SlideLeft(0.8)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="border-2 border-primary font-semibold py-3 px-6 rounded-md text-primary hover:primary-btn"
            >
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
