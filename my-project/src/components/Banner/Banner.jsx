import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animate";

const Banner = (bannerData) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* image  */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={bannerData.img}
            alt="Yoga"
            className="w-[300px] md:max-w-[400px] xl:mix-w-[600px] h-full object-cover"
          />
        </div>
        {/* text  */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w[500px] sm:p-10 p-5">
          <motion.p
            variants={SlideUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            className="text-2xl lg:text-4xl font-bold capitalize"
          >
            {bannerData.title}
          </motion.p>
          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
          >
            {bannerData.subtitle}
          </motion.p>
          <motion.div
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            className="flex justify-center md:justify-start "
          >
            <button className="primary-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
