import React from "react";
import ModuleList from "../Modules/ModuleList";
import HomeStatus from "./HomeStatus";
function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <ModuleList />
      </div>
      <div className="col-3">
        <HomeStatus/>
      </div>
    </div>
  );
}
export default Home;
