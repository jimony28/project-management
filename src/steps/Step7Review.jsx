import React, { useState } from 'react';
import Confetti from 'react-confetti';
import toast, { Toaster } from 'react-hot-toast';

const Step7Review = ({ formData, prevStep }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = () => {
    setShowConfetti(true);
    toast.success('Awesome! Your task has been submitted. 🎨');

    // Simulate sending (real logic can be added later)
    console.log("✅ Final submission:", formData);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // confetti duration
  };

  return (
    <div className="bg-white shadow-sm rounded-xl p-8 max-w-3xl mx-auto space-y-6 relative overflow-hidden">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <Toaster position="top-center" />

      <h2 className="text-2xl font-semibold text-gray-800">📝 Final Review</h2>
      <p className="text-sm text-gray-500">Here’s a summary of everything you submitted. Please review before submitting.</p>

      <div className="divide-y divide-gray-200 text-sm text-gray-800">
        {/* Sections same as before — basic info, project info, etc. */}
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Basic Info</h3>
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
        </div>
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Project Info</h3>
          <p><strong>Project Name:</strong> {formData.projectName}</p>
          <p><strong>Mission:</strong> {formData.projectMission}</p>
        </div>
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Deadline</h3>
          <p><strong>Preferred Delivery Date:</strong> {formData.preferredDeadline || "Using suggested timeline"}</p>
        </div>
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Task Type</h3>
          <p>{formData.taskType}</p>
        </div>
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Uploads</h3>
          <p><strong>Brief:</strong> {formData.briefFile?.name || "Not uploaded"}</p>
          <p>
            <strong>References:</strong>{' '}
            {formData.referenceFiles?.length ? `${formData.referenceFiles.length} file(s)` : 'None'}
          </p>
        </div>
        <div className="py-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400">Additional Notes</h3>
          <p className="whitespace-pre-wrap">{formData.notes || "No notes provided."}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-6 flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          ⬅ Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-5 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-md hover:opacity-90 transition"
        >
          🎉 I'm ready! Submit my project
        </button>
      </div>
    </div>
  );
};

export default Step7Review;