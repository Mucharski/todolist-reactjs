import React from "react";
import "./TaskItem.css";
import { CgClose } from "react-icons/cg"


const Task = ({ task, handleTaskCompletion, handleTaskExclusion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskCompletion(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleTaskExclusion(task.id)}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
