import React, { useState } from "react";

import ProjectItem from "./ProjectItem";
import Card from "../UI/Card";
import "./Projects.css";
import ProjectsFilter from "./ProjectsFilter";

const Projects = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredProjects = props.items.filter((project) => {
    return project.start_date.getFullYear().toString() === filteredYear;
  });

  let projectsContent = <p>No projects found.</p>;

  if (filteredProjects.length > 0) {
    projectsContent = filteredProjects.map((project) => (
      <ProjectItem
        key={project.id}
        title={project.title}
        amount={project.amount}
        start_date={project.start_date}
        end_date={project.end_date}
      />
    ));
  }

  return (
    <div>
      <Card className="projects">
        <ProjectsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {projectsContent}
      </Card>
    </div>
  );
};

export default Projects;
