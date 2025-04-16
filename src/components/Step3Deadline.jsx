import React, { useEffect, useState } from 'react';

const Step3Deadline = ({ formData, handleChange, nextStep, prevStep }) => {
  const [suggestedDate, setSuggestedDate] = useState('');

  // Utility: Add 7 working days (skips weekends)
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

    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  useEffect(() => {
    const calculated = getNextWorkingDate(7);
    setSuggestedDate(calculated);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 3: Deadline Request</h2>

      <p>
        We recommend setting a deadline at least <strong>7 working days</strong> from today.
      </p>

      <label>Suggested Delivery Date:</label>
      <input type="text" value={suggestedDate} readOnly />

      <label>Would you like to request a custom deadline? (Optional)</label>
      <input
        type="date"
        id="preferredDeadline"
        value={formData.preferredDeadline || ''}
        onChange={handleChange}
      />

      <p style={{ fontSize: '0.9em', color: 'gray' }}>
        Custom dates are subject to approval by the admin or creative team.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default Step3Deadline;