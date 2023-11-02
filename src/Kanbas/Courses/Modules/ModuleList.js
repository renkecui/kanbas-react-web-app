import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {
  FaGripVertical,
  FaEllipsisV,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-secondary"
              styl={{ marginBottom: "10px" }}
            >
              <div className="row">
                <div className="col-8">
                  <FaGripVertical />
                  <label style={{ fontWeight: "bold" }}>{module.name}</label>
                  <div>
                    <small>{module.description}</small>
                  </div>
                </div>
                <div className="col-2">
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
                </div>
                <div className="col-2 d-flex justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button> 
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
