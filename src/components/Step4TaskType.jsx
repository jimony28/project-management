import React from 'react';
const taskOptions = [
  'Logo Design',
  'Poster Design',
  'Intro Video',
  'Other',
];

const Step4TaskType = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 4: What Do You Need Help With?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {taskOptions.map((task) => (
          <label
            key={task}
            className={`border rounded-lg p-4 cursor-pointer transition 
              ${
                formData.taskType === task
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-semibold'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
          >
            <input
              type="radio"
              name="taskType"
              id="taskType"
              value={task}
              checked={formData.taskType === task}
              onChange={handleChange}
              className="hidden"
            />
            {task}
          </label>
        ))}
      </div>

      <div className="pt-6 flex justify-between">
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

export default Step4TaskType;