import React from 'react';

const Step4TaskType = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 4: What do you need help with?</h2>

      <p>Select the type of creative work you’re requesting:</p>

      <div>
        <label>
          <input
            type="radio"
            name="taskType"
            value="Logo Design"
            checked={formData.taskType === 'Logo Design'}
            onChange={handleChange}
            id="taskType"
          />
          Logo Design
        </label><br />

        <label>
          <input
            type="radio"
            name="taskType"
            value="Poster Design"
            checked={formData.taskType === 'Poster Design'}
            onChange={handleChange}
            id="taskType"
          />
          Poster Design
        </label><br />

        <label>
          <input
            type="radio"
            name="taskType"
            value="Intro Video"
            checked={formData.taskType === 'Intro Video'}
            onChange={handleChange}
            id="taskType"
          />
          Intro Video
        </label><br />

        <label>
          <input
            type="radio"
            name="taskType"
            value="Other"
            checked={formData.taskType === 'Other'}
            onChange={handleChange}
            id="taskType"
          />
          Other
        </label>
      </div>

      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default Step4TaskType;