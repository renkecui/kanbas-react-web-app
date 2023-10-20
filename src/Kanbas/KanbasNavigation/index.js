import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../KanbasNavigation/index.css";
import "../../vendors/bootstrap/css/bootstrap.min.css";
import "../../vendors/fontawesome/css/all.css";
import {
  FaBook,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaNetworkWired,
  FaTachometerAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import "./navbar.css";
//<link href="../../vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
// <link href="../../vendors/fontawesome/css/all.css" rel="stylesheet" />
function KanbasNavigation() {
  const links = [
    {
      name: " ",
      icon: <img src={"../../images/northeastern-logo.png"} width={80} />,
    },
    { name: "Account", icon: <FaUser style={{ color: "white" }} /> },
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Courses", icon: <FaBook /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Inbox", icon: <FaEnvelope /> },
    { name: "History", icon: <FaClock /> },
    { name: "Studio", icon: <FaNetworkWired /> },
    { name: "Commons", icon: <FaSignOutAlt /> },
    { name: "Help", icon: <FaQuestionCircle /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="nav-fixed">
      <div
        className="list-group"
        style={{ width: 100, textDecoration: "none" }}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link.name}`}
            className={`nav-bar-style ${
              pathname.includes(link.name) && "active"
            }`}>
            <span className={"nav-icon-style "}>{link.icon}</span>
            <span
              className={"nav-link-style"}
              style={{ textDecoration: "none" }}>
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;
