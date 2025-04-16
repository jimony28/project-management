import React from 'react';

const Step2ProjectInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 2: Project Info</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Give your project a name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Mission</label>
          <textarea
            id="projectMission"
            value={formData.projectMission}
            onChange={handleChange}
            placeholder="Describe the impact or goal of your project"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          ⬅ Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Step2ProjectInfo;