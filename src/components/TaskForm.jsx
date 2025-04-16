import React, { useState } from 'react';
import Step1BasicInfo from './Step1BasicInfo';
import Step2ProjectInfo from './Step2ProjectInfo';
import Step3Deadline from './Step3Deadline';
import Step4TaskType from './Step4TaskType';
import Step5Uploads from './Step5Uploads';
import Step6Notes from './Step6Notes';
import Step7Review from './Step7Review';

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
    notes: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

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

  switch (step) {
    case 1:
      return (
        <Step1BasicInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    default:
      return <div>✅ Form Completed (or Step {step} not created yet)</div>;
    
      case 2:
        return (
          <Step2ProjectInfo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
    
      case 3:
        return (
         <Step3Deadline
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          />
        );

       case 4:
        return (
          <Step4TaskType
           formData={formData}
           handleChange={handleChange}
           nextStep={nextStep}
           prevStep={prevStep}
           />
     );
       case 5:
        return (
          <Step5Uploads
          formData={formData}
          handleFileChange={handleFileChange}
          nextStep={nextStep}
          prevStep={prevStep}
          />
     );
         case 6:
          return (
             <Step6Notes
             formData={formData}
             handleChange={handleChange}
             nextStep={nextStep}
             prevStep={prevStep}
             />
      );

        case 7:
          return (
             <Step7Review
             formData={formData}
             handleChange={handleChange}
             nextStep={nextStep}
             prevStep={prevStep}
             />
      );
  }
};

export default TaskForm;