import React from 'react';

const Dashboard = () => {
  const tasks = [
    {
      id: 1,
      title: 'Create Logo',
      status: 'In Progress',
      due: 'April 25, 2025'
    },
    {
      id: 2,
      title: 'Edit Podcast Episode',
      status: 'For Review',
      due: 'April 28, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🎯 Student Dashboard</h1>

        {tasks.length > 0 ? (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                  <p className="text-sm text-gray-500">Due: {task.due}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    task.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : task.status === 'For Review'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 border border-dashed p-6 rounded-lg">
            📝 You haven’t submitted any tasks yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;