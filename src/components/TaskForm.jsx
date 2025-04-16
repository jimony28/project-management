import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Step1BasicInfo from '../steps/Step1BasicInfo';
import Step2ProjectInfo from '../steps/Step2ProjectInfo';
import Step3Deadline from '../steps/Step3Deadline';
import Step4TaskType from '../steps/Step4TaskType';
import Step5Uploads from '../steps/Step5Uploads';
import Step6Notes from '../steps/Step6Notes';
import Step7Review from '../steps/Step7Review';
import ProgressBar from './ProgressBar';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const TaskForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    gender: '',
    projectName: '',
    projectMission: '',
    preferredDeadline: '',
    taskType: '',
    briefFile: null,
    referenceFiles: [],
    notes: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === 'briefFile') {
      setFormData({ ...formData, briefFile: files[0] });
    } else if (id === 'referenceFiles') {
      setFormData({ ...formData, referenceFiles: Array.from(files) });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-3xl mx-auto px-4 py-10">
              <h1 className="text-2xl font-bold text-center mb-6">Youth Studios MVP</h1>
              <ProgressBar step={step} />

              {step === 1 && (
                <Step1BasicInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                />
              )}

              {step === 2 && (
                <Step2ProjectInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 3 && (
                <Step3Deadline
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 4 && (
                <Step4TaskType
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 5 && (
                <Step5Uploads
                  formData={formData}
                  handleFileChange={handleFileChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 6 && (
                <Step6Notes
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 7 && (
                <Step7Review
                  formData={formData}
                  prevStep={prevStep}
                />
              )}
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default TaskForm;
