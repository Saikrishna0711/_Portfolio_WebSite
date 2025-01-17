import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Inspiring Performance Award"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="8 – Inspiring Performance Awards 
For Achieving best performance in implementing new features"
          />
          <ResumeCard
            title="Unit level Award"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="1 – Unit level Award under Key Differentiator. 
For Research 
and development for installer creation for the web application. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
