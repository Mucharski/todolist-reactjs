import React from "react";
import Task from "./TaskItem/TaskItem";

const Tasks = ({ tasks, handleTaskCompletion, handleTaskExclusion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskCompletion={handleTaskCompletion}
          handleTaskExclusion={handleTaskExclusion}
          key={task.id}
        />
      ))}
    </>
  );
};

export default Tasks;
