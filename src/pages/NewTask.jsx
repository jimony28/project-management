// src/pages/NewTask.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewTask = () => {
  const { id } = useParams(); // project ID from the URL
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState('');
  const [taskType, setTaskType] = useState('Logo Design');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Task:', { taskName, taskType, details, projectId: id });

    // TODO: Save task to database here

    // After submit, go back to Project Details page
    navigate(`/project/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">➕ Add New Task</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700">Task Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g. Design a logo for the campaign"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Task Type</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
            >
              <option>Logo Design</option>
              <option>Intro Video</option>
              <option>Poster Design</option>
              <option>App Mockup</option>
              <option>Video Editing</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Task Details</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              rows="4"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Provide any specific instructions or ideas you have..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
