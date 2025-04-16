import React from 'react';

const Step1BasicInfo = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 1: Your Basic Info</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Your country"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Nonbinary">Nonbinary</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Step1BasicInfo;