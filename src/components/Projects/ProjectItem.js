import React from "react";

import ProjectDate from "./ProjectDate";
import Card from "../UI/Card";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  return (
    <Card className="project-item">
      <h2>Top: Start Date.</h2>
      <h2>Bottom: End Date.</h2>
      <ProjectDate start_date={props.start_date} end_date={props.end_date} />
      {/* <ProjectDate end_date={props.end_date} /> */}
      <div className="project-item__description">
        <h2>{props.title}</h2>
        <div className="project-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ProjectItem;
