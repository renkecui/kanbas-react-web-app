import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <div className="row">
        <div style={{ textAlign: "right", marginRight: "15px" }}>
          <button className="btn btn-secondary">
            <i
              className="fas fa-file-import"
              style={{ color: "black", marginRight: "5px" }}
            ></i>
            IMPORT
          </button>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              EXPORT
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  One
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Two
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Three
                </button>
              </li>
            </ul>
            <span>
              <button
                className="btn btn-secondary float-start"
                style={{ marginLeft: "5px" }}
              >
                <i className="fas fa-cog" style={{ color: "#000000" }}></i>
              </button>
            </span>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="row">
          <div className="col">
            <h3>Student Names</h3>
          </div>
          <div className="col">
            <h3>Assignment Names</h3>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginRight: "5px" }}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-search" style={{ color: "#000000" }}></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Students"
              />
            </div>
          </div>
          <div className="col" style={{ marginRight: "20px" }}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-search" style={{ color: "#000000" }}></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Assignments"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-secondary">
              <i className="fas fa-filter" style={{ color: "#000000" }}></i>
              Apply Filters
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find(
                  (user) => user._id === enrollment.user
                );
                return (
                  <tr>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return <td>{grade?.grade || ""}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Grades;
