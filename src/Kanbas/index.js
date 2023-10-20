import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./KanbasNavigation/index.css";
import "../vendors/bootstrap/css/bootstrap.min.css";
import "../vendors/fontawesome/css/all.css";
// import "./index.css"; // optionally import CSS files as needed

function Kanbas() {
  return (
    <div className="row" >
      <div className="col-1">
        <KanbasNavigation />
      </div>
      <div className="col-11" style={{paddingRight:"40px"}}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;
