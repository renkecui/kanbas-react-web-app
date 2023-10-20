import React from "react";

function HomeStatus() {
  return (
    <div>
      <div style={{ paddingLeft: "10px", paddingRight: "30px" }}>
          <span>Course Status</span>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ margin: "5px" }}
            >
              <span>
                <i className="fas fa-ban" style={{ color: "#000000" }}></i>
              </span>
              Unpublished
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ margin: "5px" }}
            >
              <span>
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              Published
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i
                  className="fas fa-file-import"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              Export Existing Content
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i
                  className="fas fa-arrow-circle-right"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              Import from Commons
            </button>
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i className="fas fa-home" style={{ color: "#000000" }}></i>
              </span>
              Choose Home Page
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i
                  className="fas fa-chart-bar"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              View Course Stream
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i
                  className="fas fa-volume-up"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              New Announcements
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i
                  className="fas fa-chart-bar"
                  style={{ color: "#000000" }}
                ></i>
              </span>
              New Analytics
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "5px", marginBottom: "2px" }}
            >
              <span>
                <i className="far fa-bell" style={{ color: "#000000" }}></i>
              </span>
              View Course Notifications
            </button>
          </div>
          <div>
            {/* TO DO */}
            <div>
              <label
                className="right-sidebar-title"
                style={{ paddingTop: "20px" }}
              >
                TO DO
              </label>
            </div>
            <hr />
            <div className="row">
              <div className="col-1">
                <i
                  className="fas fa-exclamation-circle"
                  style={{ color: "#b51a00" }}
                ></i>
              </div>
              <div className="col">
                <div className="row">
                  <label style={{ color: "#b51a00" }}>
                    Grade A1 - ENV + HTML
                    <span>
                      <i
                        className="fas fa-times float-end"
                        style={{ color: "#000000", paddingRight: "20px" }}
                      ></i>
                    </span>
                  </label>
                </div>
                <div className="row">
                  <label>
                    100 points
                    <span>
                      <i
                        className="fas fa-circle"
                        style={{ color: "#000000", fontSize: "7px" }}
                      ></i>
                    </span>
                    Sep 18 at 11:59pm
                  </label>
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingTop: "20px" }}>
              <div className="col">
                <label className="right-sidebar-title">Coming UP</label>
                <span className="float-end" style={{ paddingRight: "15px" }}>
                  <i
                    className="far fa-calendar"
                    style={{ color: "#000000" }}
                  ></i>
                  <label className="wd-fg-color-red">View Calendar</label>
                </span>
              </div>
              <hr />
              <div className="row">
                <div className="col-1">
                  <i
                    className="far fa-calendar"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                <div className="col">
                  <div className="row">
                    <label style={{ color: "#b51a00" }}>Lecture</label>
                  </div>
                  <div className="row">
                    <label>CS4550.12631.202410</label>
                  </div>
                  <div className="row">
                    <label>Sep 11 at 11:45am</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <i
                    className="far fa-calendar"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                <div className="col">
                  <div className="row">
                    <label style={{ color: "#b51a00" }}>
                      CS5610 06 SP23 Lecture
                    </label>
                  </div>
                  <div className="row">
                    <label>CS4550.12631.202410</label>
                  </div>
                  <div className="row">
                    <label>Sep 11 at 11:45am</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <i
                    className="far fa-calendar"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                <div className="col">
                  <div className="row">
                    <label style={{ color: "#b51a00" }}>
                      CS5610 Web Development Summer 1 2023 - LECTURE
                    </label>
                  </div>
                  <div className="row">
                    <label>CS4550.12631.202410</label>
                  </div>
                  <div className="row">
                    <label>Sep 11 at 11:45am</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <label style={{ color: "#b51a00" }}>
                  12 more in the next week
                </label>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomeStatus;
