import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  const courseNumber = Object.keys(courses).length;
  const cardStyle = {
    backgroundColor: "green", // Change 'green' to your desired color
    color: "black",
    margin: "10px",
    textDecoration: "none"
  };
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <hr />
        <div className="row">
          <div>
            <h2>Published Courses ({courseNumber})</h2>
          </div>
          <hr />
          <div className="col">
            <div className="row">
              <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    style={{ margin: "5px" }}
                  >
                    <div className="card" style={cardStyle}>
                      <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item"
                      >
                        <img
                          src={"../../images/Northeastern-campus-picture.jpeg"}
                          width={230}
                        />
                        <div className="card-body">
                          <span style={{ color: "blue" }}>{course.name}</span>
                          <br />
                          <small>{course._id}</small>
                          <br />
                          <small>
                            {course.number}
                          </small>
                          <br />
                          <i className="fas fa-file-signature"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

/*
<Link
key={course._id}
to={`/Kanbas/Courses/${course._id}`}
className="list-group-item"
>
{course.name}
</Link>
*/
