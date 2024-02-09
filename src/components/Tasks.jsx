import React from "react";
import NewTask from "./NewTask";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="tasks-section">
      <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {!tasks || tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="task-list p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className=" flex my-4 justify-between">
              <span>{task.text}</span>
              <button
                className="clear-button text-stone-700 hover:text-red-500 ml-2"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
