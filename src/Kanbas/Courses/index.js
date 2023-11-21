import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" style={{ font: "20px" }}>
              <span>
                <FaBars style={{ color: "#b51a00" }} />
              </span>
              {course.name}
            </li>
            <li className="breadcrumb-item">
              <Routes>
                <Route path="Home" element={<label>Home</label>} />
                <Route path="Modules" element={<label>Modules</label>} />
                <Route
                  path="Assignments"
                  element={<label>Assignments</label>}
                />
                <Route
                  path="Assignments/:assignmentId"
                  element={<label>AssignmentEditor</label>}
                />
                <Route path="Grades" element={<label>Grades</label>} />
              </Routes>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <div className="row">
        <div className="col">
          <CourseNavigation />
        </div>
        <div
          className="col-10"
          style={{ paddingLeft: "-100px", paddingRight: "30px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
