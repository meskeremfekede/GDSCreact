import React from "react";

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded-md mb-2 flex justify-between items-center">
            <div>
              <h3 className={`font-semibold ${task.completed ? "line-through text-gray-500" : ""}`}>{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => toggleCompletion(task.id)} className="bg-green-500 text-white px-2 py-1 rounded">
                {task.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
