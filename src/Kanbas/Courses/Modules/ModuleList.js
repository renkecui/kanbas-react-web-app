import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {
  FaGripVertical,
  FaEllipsisV,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ul className="list-group">
        
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-secondary"
              styl={{ marginBottom: "10px" }}
            >
              <FaGripVertical />
              <label style={{ fontWeight: "bold" }}>{module.name}</label>
              <span>
                <FaEllipsisV
                  style={{
                    color: "#4f7a28",
                    paddingRight: "5px",
                    float: "right",
                  }}
                />
                <FaPlus
                  style={{
                    color: "#000000",
                    paddingRight: "5px",
                    float: "right",
                  }}
                />
                <FaCheckCircle
                  style={{
                    color: "#4f7a28",
                    paddingRight: "5px",
                    float: "right",
                  }}
                />
              </span>
              <div>
                <small>{module.description}</small>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
