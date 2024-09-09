import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductsData } from "./ProductsData";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Dumbell"];
  const FilteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.Category === activeTab);

  return (
    <>
      <div className="container my-12 md:my-16">
        <div className="flex space-x-4 mb-4 p-6">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FilteredCards.map((card) => (
            <motion.div
              // id={card.id}
              key={card.id}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              className="p-4 border rounded-sm space-y-2 "
            >
              <img src={card.image} alt="" className="h-[240px] w-full object-cover" />
              <p className="text-xl font-semibold" >{card.Category}</p>
              <p className="text-sm " >{card.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabComp;
