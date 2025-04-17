// src/pages/ProjectDetails.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();   // ✅ inside function
  const navigate = useNavigate(); // ✅ inside function

  const project = {
    name: 'Community Clean Up',
    description: 'A project to clean up the local river.',
    tasks: [
      { id: 1, title: 'Design Logo', status: 'In Progress' },
      { id: 2, title: 'Create Social Media Banner', status: 'For Review' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tasks</h2>

        <div className="space-y-4">
          {project.tasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.status}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate(`/project/${id}/new-task`)}
            className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
          >
            ➕ Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;