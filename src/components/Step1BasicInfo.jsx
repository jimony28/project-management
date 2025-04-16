import React from 'react';

const Step1BasicInfo = ({ formData, handleChange, nextStep }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 1: Your Basic Info</h2>

      <label>First Name:</label>
      <input
        type="text"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />

      <label>Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
      />

      <label>Country:</label>
      <input
        type="text"
        id="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Your country"
      />

      <label>Gender:</label>
      <select id="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Nonbinary">Nonbinary</option>
        <option value="Other">Other</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>

      <br /><br />
      <button onClick={nextStep}>Next ➡️</button>
    </div>
  );
};

export default Step1BasicInfo;