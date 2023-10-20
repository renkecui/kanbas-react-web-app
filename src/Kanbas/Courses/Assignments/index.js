import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical } from "react-icons/fa";
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div className="row">
        <div>
          <span>
            <input
              type="text"
              className="form-control float-start"
              id="assignmentName"
              placeholder="Search for Assignment"
              style={{ width: "25%" }}
            />
          </span>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={{ marginLeft: "5px", marginBottom: "2px" }}
          >
            <span>
              <i className="fas fa-ellipsis-v" style={{ color: "#000000" }}></i>
            </span>
          </button>
          <button
            type="button"
            className="btn btn-danger float-end"
            style={{ marginLeft: "5px", marginBottom: "2px" }}
          >
            <span>
              <i className="fas fa-plus" style={{ color: "#000000" }}></i>
            </span>
            Assignments
          </button>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={{ marginLeft: "5px", marginBottom: "2px" }}
          >
            <span>
              <i className="fas fa-plus" style={{ color: "#000000" }}></i>
            </span>
            Group
          </button>
        </div>
      </div>
      <hr />
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary">
          <FaGripVertical />
          <label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              paddingLeft: "5px",
            }}
          >
            Assignment
          </label>
          <span>
            <i
              className="fas fa-ellipsis-v float-end"
              style={{
                color: "#000000",
                paddingRight: "15px",
                paddingTop: "5px",
              }}
            ></i>
            <i
              className="fas fa-plus float-end"
              style={{
                color: "#000000",
                paddingRight: "15px",
                paddingLeft: "15px",
                paddingTop: "5px",
              }}
            ></i>
            <button
              className="btn border border-2 border-dark rounded-pill float-end"
              style={{ fontSize: "10px" }}
            >
              40% of Total
            </button>
          </span>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item list-group-item-first"
            style={{ borderLeft: "5px solid green" }}
          >
            <div className="row">
              <div className="col-1">
                <i
                  className="fas fa-grip-vertical float-start"
                  style={{
                    color: "#000000",
                    paddingTop: "5px",
                    paddingRight: "5px",
                  }}
                ></i>
                <i
                  className="fas fa-caret-down float-start"
                  style={{
                    color: "#000000",
                    paddingTop: "5px",
                    paddingRight: "5px",
                  }}
                ></i>
                <i
                  className="fas fa-newspaper"
                  style={{
                    color: "#4f7a28",
                    paddingTop: "5px",
                    paddingRight: "5px",
                  }}
                ></i>
              </div>
              <div className="col-9">
                <a
                  href="edit.html"
                  className="wd-fg-color-black"
                  style={{ textDecoration: "none" }}
                >
                  <div className="row">
                    <label style={{ color: "black", fontWeight: "bold" }}>
                      {assignment.title}
                    </label>
                  </div>
                  <div className="row">
                    <span>
                      <small style={{ color: "gray", fontWeight: "bold" }}>
                        Due{" "}
                      </small>
                      <small className="text-secondary">
                        September 25, 2022 at 11:59pm | 100 pts
                      </small>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
