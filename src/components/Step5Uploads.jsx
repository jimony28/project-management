import React, { useState } from 'react';

const Step5Uploads = ({ formData, handleFileChange, nextStep, prevStep }) => {
  const [draggingBrief, setDraggingBrief] = useState(false);
  const [draggingRefs, setDraggingRefs] = useState(false);

  const handleDrop = (e, target) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (target === 'brief' && files.length === 1) {
      handleFileChange({ target: { id: 'briefFile', files } });
    }

    if (target === 'refs') {
      handleFileChange({ target: { id: 'referenceFiles', files } });
    }

    setDraggingBrief(false);
    setDraggingRefs(false);
  };

  const dropZoneClasses = (dragging) =>
    `w-full p-6 border-2 border-dashed rounded-lg transition ${
      dragging
        ? 'border-indigo-600 bg-indigo-50'
        : 'border-gray-300 bg-gray-50 hover:border-indigo-400'
    }`;

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 5: Upload Files</h2>

      {/* Drop Zone: Brief */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Brief or Script <span className="text-xs text-gray-400">(PDF, Word, or PPT)</span>
        </label>
        <div
          className={dropZoneClasses(draggingBrief)}
          onDragOver={(e) => {
            e.preventDefault();
            setDraggingBrief(true);
          }}
          onDragLeave={() => setDraggingBrief(false)}
          onDrop={(e) => handleDrop(e, 'brief')}
          onClick={() => document.getElementById('briefFileInput').click()}
        >
          <p className="text-center text-gray-500">
            Drag & drop file here, or <span className="text-indigo-600 underline cursor-pointer">click to upload</span>
          </p>
        </div>
        <input
          id="briefFileInput"
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx"
          onChange={handleFileChange}
          className="hidden"
        />
        {formData.briefFile && (
          <p className="text-sm text-gray-500 mt-1">Selected: {formData.briefFile.name}</p>
        )}
      </div>

      {/* Drop Zone: References */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Reference Files <span className="text-xs text-gray-400">(images, audio, video)</span>
        </label>
        <div
          className={dropZoneClasses(draggingRefs)}
          onDragOver={(e) => {
            e.preventDefault();
            setDraggingRefs(true);
          }}
          onDragLeave={() => setDraggingRefs(false)}
          onDrop={(e) => handleDrop(e, 'refs')}
          onClick={() => document.getElementById('refFileInput').click()}
        >
          <p className="text-center text-gray-500">
            Drag & drop files here, or <span className="text-indigo-600 underline cursor-pointer">click to upload</span>
          </p>
        </div>
        <input
          id="refFileInput"
          type="file"
          multiple
          accept="image/*,video/*,audio/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {formData.referenceFiles?.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            {formData.referenceFiles.length} file{formData.referenceFiles.length > 1 ? 's' : ''} selected
          </p>
        )}
      </div>

      {/* Nav Buttons */}
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

export default Step5Uploads;