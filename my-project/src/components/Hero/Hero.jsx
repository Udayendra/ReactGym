import React from "react";
import dumbell from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animate";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative">
          {/* brand info */}
          <div className="flex flex-col justify-center py-14 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.3)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal "
              >
                Gym gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </motion.p>
              <motion.div
                variants={SlideRight(0.9)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center md:justify-start gap-8 !mt-8"
              >
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex items-center justify-center gap-2">
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* hero img  */}
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center "
          >
            <img
              src={dumbell}
              alt=""
              className="w-[300px] md:w-[500px] xl:w-[6500px] drop-shadow"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
