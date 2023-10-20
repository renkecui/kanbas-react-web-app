import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "Piazza",
    "Zoom Meetings",
    "Quizzes",
    "People",
    "Discussions",
    "Announcements",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="nav-fixed" >
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`${pathname.includes(link) && "active"}`}
            style={{textDecoration:"none"}}
          >
            <div style={{ color: "#b51a00"}}>{link}</div>
          </Link>
        ))}
    </div>
  );
}

export default CourseNavigation;
