import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const courseNumber = Object.keys(courses).length;
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([courses, {course, _id: new Date().getTime()}]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div>
        <h2>Published Courses ({courseNumber})</h2>
      </div>
      <hr />
      <div className="list-group">
        <div className="list-group-item" style={{ marginRight: "5px" }}>
          <div className="row">
            <div className="col-11">
              <h5>Course</h5>
              <input
                value={course.name}
                className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />

              <input
                value={course.number}
                className="form-control"
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
              />

              <input
                value={course.startDate}
                className="form-control"
                type="date"
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
              />

              <input
                value={course.endDate}
                className="form-control"
                type="date"
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
              />
            </div>
            <div className="col-1" style={{ justifyContent: "center" }}>
              <button
                onClick={addNewCourse}
                className="btn btn-success"
                style={{ margin: "5px", display: "flex" }}
              >
                Add
              </button>
              <button
                className="btn btn-primary float-center"
                style={{ margin: "5px", display: "flex" }}
                onClick={updateCourse}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        {courses.map((course) => (
          <Link
            to={`/Kanbas/Courses/${course._id}`}
            key={course._id}
            className="list-group-item"
          >
            {course.name}
            <br/>
            {course.number}
            <button
              className="btn btn-danger float-end"
              style={{ margin: "5px" }}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-warning float-end"
              style={{ margin: "5px" }}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
