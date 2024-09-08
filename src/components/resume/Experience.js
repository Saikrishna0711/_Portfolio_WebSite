import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects in Wipro</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CADIQ WebGL Viewer Development"
            subTitle="(2022 - Present)"
            result="CANADA"
            des="• CADIQ WebGL Viewer Development using Three.js and React to display 3D CAD models on the web browser. 
    • Improved UI and user experience of the CADIQ WebGL Viewer; added features to highlight the model parts using ray caster. 
    • Handled server-side errors for unrecognized commands. "
          />
          <ResumeCard
            title="CADIQ WebGL Installer"
            subTitle="(2023 - 2024)"
            result="NEVADA"
            des="• Created an Installer (exe) for CADIQ WebGL Viewer using C# and Visual Studio 2019, utilizing Visual Studio Installer Projects to install Node.js and start the server as a Windows service."
          />
          <ResumeCard
            title="CADIQ Product development"
            subTitle="(2022 - 2023)"
            result="DHAKA"
            des="• Diagnostic development using python.
• Development and enhancement of Inventor, SolidWorks, A3D CAD system 
interfaces using C++, the color recognition is now fully supported by the 
SolidWorks C++ API."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
