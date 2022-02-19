import axios from "axios";
import React, { useEffect, useState } from "react";

import NewProject from "./components/NewProject/NewProject";
import Projects from "./components/Projects/Projects";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const URL = "http://127.0.0.1:5000";

// remove INITIAL_PROJECTS once connected to backend
const INITIAL_PROJECTS = [
  {
    id: "e1",
    title: "Mural 1",
    amount: 94.12,
    // description: ,
    // location: ,
    // art_medium: ,
    start_date: new Date(2020, 7, 14),
    end_date: new Date(2021, 1, 1),
    // accepting_collaborators: ,
    // user_id: ,
    // owner_user ,
    // collaborator_users: ,
  },
  {
    id: "e2",
    title: "Mural 2",
    amount: 799.49,
    start_date: new Date(2020, 2, 12),
    end_date: new Date(2021, 2, 1),
  },
  {
    id: "e3",
    title: "Sculpture 1",
    amount: 294.67,
    start_date: new Date(2021, 2, 28),
    end_date: new Date(2021, 7, 20),
  },
  {
    id: "e4",
    title: "Mixed Media 1",
    amount: 450,
    start_date: new Date(2021, 5, 12),
    end_date: new Date(2021, 11, 12),
  },
];

const App = () => {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const addProjectHandler = (project) => {
    setProjects((prevProjects) => {
      return [project, ...prevProjects];
    });
  };

  // GET all projects
  useEffect(() => {
    axios.get(`${URL}/projects`).then((res) => {
      console.log(res.data);
    });
  });

  return (
    <div>
      {/* <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <NewProject onAddProject={addProjectHandler} />
      <Projects items={projects} />
    </div>
  );
};

export default App;
