import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
  title="Expense Tracker"
  des="A simple and intuitive application to track daily expenses. Built with React.js, it allows users to add, edit, and delete expenses, categorize them, and view graphical summaries for better financial planning. Data is persisted using local storage."
  src={projectThree}
  git={"https://github.com/Saikrishna0711/ExpenseTracker"}
/>
<ProjectsCard
  title="STL Loader"
  des="Developed an STL loader using Three.js, allowing users to load and visualize 3D models in STL format directly in a web browser. Features include zoom, pan, and rotate for easy model inspection, along with surface shading for better clarity."
  src={projectTwo}
  git={"https://github.com/Saikrishna0711/stl-loader"}
/>
<ProjectsCard
  title="CADIQ"
  des="A WebGL-based viewer for 3D CAD models using Three.js and React.js. Supports glb and gltf formats, providing real-time visualization and interactive features like part highlighting using ray caster. Integrated with Node.js for report generation and server-side functionalities."
  src={projectOne}
  link={"https://www.iti-global.com/cadiq"}
/>
      </div>
    </section>
  );
}

export default Projects