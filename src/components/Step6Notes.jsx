import React from 'react';

const Step6Notes = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 6: Additional Instructions</h2>

      <p>Anything else we should know about your task?</p>
      <textarea
        id="notes"
        rows="6"
        placeholder="Include visual direction, cultural considerations, language, symbols, etc."
        value={formData.notes || ''}
        onChange={handleChange}
        style={{ width: '100%', marginTop: '10px' }}
      />

      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default Step6Notes;