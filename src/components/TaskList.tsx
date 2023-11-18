import React from "react";

const TaskList = () => {
  return (
    <div>
      <ul>
        <li>
          <div className="task rounded">
            <h3>Task Title</h3>
            <p>Task Short Description</p>
            <span>Task Priority</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
