import React from "react";
import Button from "./Button.jsx";
import noProjectImg from "../assets/no-projects.png";
function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started by new one
      </p>
      <p className="mt-8">
        <Button>Create A Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
