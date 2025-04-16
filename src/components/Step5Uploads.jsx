import React from 'react';

const Step5Uploads = ({ formData, handleFileChange, nextStep, prevStep }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Step 5: Upload Files</h2>

      <p>Upload your brief/script (PDF, Word, or PPT)</p>
      <input
        type="file"
        id="briefFile"
        accept=".pdf,.doc,.docx,.ppt,.pptx"
        onChange={handleFileChange}
      />

      <p style={{ marginTop: '20px' }}>
        Upload optional references (images, audio, etc.)
      </p>
      <input
        type="file"
        id="referenceFiles"
        multiple
        accept="image/*,video/*,audio/*"
        onChange={handleFileChange}
      />

      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default Step5Uploads;