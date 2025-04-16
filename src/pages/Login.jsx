// src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🎯 Student Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome back! Your submitted tasks will show here.</p>

        {/* Placeholder for task list */}
        <div className="bg-white rounded-lg shadow p-4 text-center text-gray-400 border border-dashed">
          📝 No tasks submitted yet.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
