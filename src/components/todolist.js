// import React, { useState } from 'react';
// import { addTaskToFirebase, fetchTasksFromFirebase } from '../firebaseUtils';
// function TodoList() {
//   const [tasks, setTasks] = useState([
//     { text: 'Complete React Project', completed: false }
//   ]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const toggleComplete = index => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//   };

//   const deleteTask = index => {
//     const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Add new task"
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleComplete(index)}
//             />
//             {task.text}
//             <button onClick={() => deleteTask(index)}>Delete</button>
//             <button onClick={() => setNewTask(task.text)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { addTaskToFirebase, fetchTasksFromFirebase } from '../firebaseUtils';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasksFromFirebase();
      setTasks(fetchedTasks);
    };
    getTasks();
  }, []);

  const handleAddTask = async () => {
    await addTaskToFirebase(newTask);
    setNewTask('');
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
