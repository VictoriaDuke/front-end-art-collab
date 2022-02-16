import React from "react";

import ProjectForm from "./ProjectForm";
import "./NewProject.css";

const NewProject = (props) => {
  const saveProjectDataHandler = (enteredProjectData) => {
    const ProjectData = {
      ...enteredProjectData,
      id: Math.random().toString(),
    };
    props.onAddProject(ProjectData);
  };

  return (
    <div className="new-project">
      <ProjectForm onSaveProjectData={saveProjectDataHandler} />
    </div>
  );
};

export default NewProject;
