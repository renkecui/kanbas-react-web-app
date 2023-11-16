import React from "react";
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <div className={"nav-colors"}>
        <Link
          to="/Labs/a3"
          className={`nav-link ${
            pathname.includes("a3") ? "active" : ""
          } wd-fd-red-link`}
        >
          A3
        </Link>
      </div>
      <div className="nav-colors">
        <Link
          to="/Labs/a4"
          className={`nav-link ${
            pathname.includes("a4") ? "active" : ""
          } wd-fd-red-link`}
        >
          A4
        </Link>
      </div>
      <div className="nav-colors">
        <Link
          to="/Labs/a5"
          className={`nav-link ${
            pathname.includes("a5") ? "active" : ""
          } wd-fd-red-link`}
        >
          A5
        </Link>
      </div>
      <div className={"nav-colors"}>
        <Link
          to="/hello"
          className={`nav-link ${
            pathname.includes("hello") ? "active" : ""
          } wd-fd-red-link`}
        >
          Hello
        </Link>
      </div>
      <div className={"nav-colors"}>
        <Link
          to="/Kanbas"
          className={`nav-link ${
            pathname.includes("Kanbas") ? "active" : ""
          } wd-fd-red-link`}
        >
          Kanbas
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
