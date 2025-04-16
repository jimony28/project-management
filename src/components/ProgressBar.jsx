import React from 'react';

const ProgressBar = ({ step, totalSteps = 7 }) => {
  const percent = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500 font-medium mb-1">
        Step {step} of {totalSteps}
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;