import React, { useState } from "react";

import "./ProjectForm.css";

const ProjectForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const projectData = {
      title: enteredTitle,
      amount: enteredAmount,
      start_date: new Date(enteredStartDate),
      end_date: new Date(enteredEndDate),
    };

    props.onSaveProjectData(projectData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredStartDate("");
    setEnteredEndDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-project__controls">
        <div className="new-project__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-project__control">
          <label>Expected Member Contribution Amount (USD)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-project__control">
          <label>Start Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredStartDate}
            onChange={startDateChangeHandler}
          />
        </div>
        <div className="new-project__control">
          <label>End Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredEndDate}
            onChange={endDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-project__actions">
        <button type="submit">Add Project</button>
      </div>
    </form>
  );
};

export default ProjectForm;
