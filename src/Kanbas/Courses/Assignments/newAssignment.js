import React from "react";

function NewAssignment() {
  return (
    <div>
      <h2>Assignment Editor</h2>
      <hr />
      <div className="row">
        <div style={{ paddingTop: "5px" }}>
          <hr />
        </div>
        <div className="row">
          <label>Assignment Name</label>
        </div>
        <div className="row" style={{ marginRight: "50px" }}>
          <input
            type="text"
            className="form-control float-start"
            id="assignmentName"
            placeholder="Assignment Name"
            defaultValue="A1- ENV + HTML"
            style={{ marginLeft: "10px", width: "95%" }}
          />
        </div>
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", width: "97%" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">
              New Assignment Description
            </label>
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-4">
            <label htmlFor="points" className="col-form-label float-end">
              Points
            </label>
          </div>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control"
              id="points"
              defaultValue="100"
              style={{ width: "92%" }}
              max="100"
            />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "10px" }}>
          <hr />
          <div className="col">
            <div className="col float-end">
              <button
                type="button"
                className="btn btn-danger float-end"
                style={{ marginLeft: "5px", marginBottom: "2px" }}
              >
                <label style={{ color: "white" }}>Save</label>
              </button>
            </div>
            <div className="col float-end">
              <button
                type="button"
                className="btn btn-secondary float-end"
                style={{ marginLeft: "5px", marginBottom: "2px" }}
              >
                <label style={{ color: "black" }}>Cancel</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAssignment;
