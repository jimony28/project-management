import React from 'react';

const Step7Review = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    alert("✅ Task submitted! (Now ready to send to backend or Firebase.)");
    // TODO: Connect to Firebase or save locally
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h2>Step 7: Review Your Submission</h2>

      <div>
        <h4>👤 Basic Info</h4>
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>

        <h4>🌍 Project Info</h4>
        <p><strong>Project Name:</strong> {formData.projectName}</p>
        <p><strong>Mission:</strong> {formData.projectMission}</p>

        <h4>📅 Deadline</h4>
        <p><strong>Preferred Deadline:</strong> {formData.preferredDeadline || "Using default suggestion"}</p>

        <h4>🎨 Task Type</h4>
        <p><strong>Task:</strong> {formData.taskType}</p>

        <h4>📎 Uploads</h4>
        <p><strong>Brief:</strong> {formData.briefFile?.name || "None uploaded"}</p>
        <p><strong>Reference Files:</strong> {formData.referenceFiles?.length || 0} file(s)</p>

        <h4>📝 Additional Notes</h4>
        <p>{formData.notes || "No additional notes provided."}</p>
      </div>

      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={handleSubmit}>🚀 Submit Task</button>
      </div>
    </div>
  );
};

export default Step7Review;