// src/pages/NewProject.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [briefFile, setBriefFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', { projectName, description, briefFile });

    // TODO: Save project to database here

    // After submitting, ask if they want to add tasks
    if (window.confirm('Do you want to add creative tasks now?')) {
      navigate('/'); // Later, route to Add Task flow
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">➕ Create a New Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. Community Clean Up Campaign"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us a bit about your project..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Brief (optional)</label>
            <input
              type="file"
              className="w-full mt-2"
              onChange={(e) => setBriefFile(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
