import "./ProjectDate.css";

function ProjectDate(props) {
  console.log(props);
  const start_month = props.start_date.toLocaleString("en-US", {
    month: "long",
  });
  const start_day = props.start_date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const start_year = props.start_date.getFullYear();

  const end_month = props.end_date.toLocaleString("en-US", { month: "long" });
  const end_day = props.end_date.toLocaleString("en-US", { day: "2-digit" });
  const end_year = props.end_date.getFullYear();

  return (
    <div>
      <div className="project-date">
        <div className="project-date__start_month">{start_month}</div>
        <div className="project-date__start_day">{start_day}</div>
        <div className="project-date__start_year">{start_year}</div>
      </div>
      <div className="project-date">
        <div className="project-date__end_month">{end_month}</div>
        <div className="project-date__end_day">{end_day}</div>
        <div className="project-date__end_year">{end_year}</div>
      </div>
    </div>
  );
}

export default ProjectDate;
