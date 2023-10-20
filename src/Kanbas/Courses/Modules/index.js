import React from "react";
import ModuleList from "./ModuleList";
import { FaPlus, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function Modules() {
  const redButton = { backgroundColor: "red", margin: "10px" };
  const marginButton = { margin: "10px" };

  return (
    <div>
      <div className="row">
        <div>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={marginButton}
          >
            <FaEllipsisV />
          </button>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={redButton}
          >
            <FaPlus />
            Module
          </button>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={marginButton}
          >
            <FaCheckCircle style={{ color: "green" }} />
            Publish All
          </button>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={marginButton}
          >
            View Progress
          </button>
          <button
            type="button"
            className="btn btn-secondary float-end"
            style={marginButton}
          >
            Collapse All
          </button>
        </div>
      </div>
      <div className="row">
        <hr/>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
