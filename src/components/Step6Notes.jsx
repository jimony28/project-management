import React from 'react';

const Step6Notes = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 6: Additional Instructions</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Leave any final notes or creative direction
        </label>
        <textarea
          id="notes"
          rows="6"
          placeholder="E.g. avoid certain colors, use specific fonts, explain symbolism, include local context..."
          value={formData.notes || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500">
          This helps our creative team understand the intent and tone of your request.
        </p>
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

export default Step6Notes;