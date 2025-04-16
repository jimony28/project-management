import React from 'react';

const Step2ProjectInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 2: Project Info</h2>

      <label>Project Name:</label>
      <input
        type="text"
        id="projectName"
        value={formData.projectName || ''}
        onChange={handleChange}
        placeholder="Enter your project's name"
      />

      <label>Project Mission:</label>
      <textarea
        id="projectMission"
        value={formData.projectMission || ''}
        onChange={handleChange}
        placeholder="What is your project trying to solve?"
        rows={4}
      />

      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default Step2ProjectInfo;