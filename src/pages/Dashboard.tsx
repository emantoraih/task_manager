import { useState } from 'react';

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard({ onLogout }: DashboardProps) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10">
          Your Tasks
        </h1>

        <div className="mb-10">
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 flex items-start"
              >
                <span className="font-semibold text-blue-600 mr-3">
                  {index + 1}.
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleAddTask} className="mb-8">
          <label htmlFor="newTask" className="block text-lg font-semibold text-gray-700 mb-3">
            New Task
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              id="newTask"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg transition-colors"
              placeholder="Enter a new task"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Add Task
            </button>
          </div>
        </form>

        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full py-3 bg-white text-blue-600 border-2 border-blue-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
