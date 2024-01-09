'use client';
import React, { useState } from 'react';
import EventsFormsStepOne from './EventsFormsStepOne';
import EventsFormsStepTwo from './EventsFormsStepTwo';

interface MyComponentProps {
  setFormStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventsSection = () => {
  const [formStep, setFormStep] = useState<boolean>(true);
  const [eventForms, setEventForms] = useState({});

  return (
    <div>
      {formStep ? (
        <EventsFormsStepOne setFormStep={setFormStep} />
      ) : (
        <EventsFormsStepTwo setFormStep={setFormStep} />
      )}
    </div>
  );
};

export default EventsSection;
