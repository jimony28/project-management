import React, { useEffect, useState } from 'react';

const Step3Deadline = ({ formData, handleChange, nextStep, prevStep }) => {
  const [suggestedDate, setSuggestedDate] = useState('');

  const getNextWorkingDate = (daysToAdd) => {
    let date = new Date();
    let added = 0;

    while (added < daysToAdd) {
      date.setDate(date.getDate() + 1);
      const day = date.getDay();
      if (day !== 0 && day !== 6) {
        added++;
      }
    }

    return date.toISOString().split('T')[0];
  };

  useEffect(() => {
    const calculated = getNextWorkingDate(7);
    setSuggestedDate(calculated);
  }, []);

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 3: Set a Deadline</h2>

      <p className="text-sm text-gray-600">
        Based on the creative team’s availability, we recommend selecting a delivery date at least <strong>7 working days</strong> from today.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Suggested Delivery Date</label>
          <input
            type="text"
            value={suggestedDate}
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-500 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Request a Custom Deadline (Optional)</label>
          <input
            type="date"
            id="preferredDeadline"
            value={formData.preferredDeadline || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <p className="text-xs text-gray-500 italic">
          If your requested date is too early, the creative team will notify you with an adjusted schedule.
        </p>
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

export default Step3Deadline;