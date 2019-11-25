import React from 'react';

const campaigns = [
  '',
  'I m a TEST TEST',
  'AL Consent (PDF) Separate EHR',
  'CA Bill of Rights (PDF) Separate EHR',
  'Confirming Your Withdrawal',
  'DV Lite EHR Form for States without HPOs',
  'EHR Consent Copy (PDF) for States with HPO Pairings Available',
  'Friendly Reminder to Complete New Surveys',
  'Full Enrollment Cancellation',
  'Full Enrollment Rescheduling Confirmation',
  'Full Enrollment Schedule Confirmation (Prospects)',
  'HPO subscription ',
  'IL EHR Consent (PDF) Separate EHR ',
  'M10: Just a Few Clicks to Complete Enrollment',
  'M11: All of Us Consent Form',
  'M12: Congratulations – Your Enrollment is Complete ',
  'M12B: Reminder to Start Your Health Surveys',
  'M13B: All of Us Research Program Health Surveys to Complete',
  'M13L: Don\'t Forget to Complete Your Health Survey (Lifestyle)',
  'M13O: Don\'t Forget to Complete Your Health Survey (Overall)',
  'M13TB: Don\'t Forget to Complete Your Health Survey (The Basics)',
  'M14: Your Health Surveys Are Almost Complete (Lifestyle)',
  'M14: Your Health Surveys Are Almost Complete (Overall)',
  'M14: Your Health Surveys Are Almost Complete (The Basics)',
  'M7: Thank you for Joining the All of Us Research Program',
  'M9: You\'re Almost There. Complete Consent',
  'MEA Kiosk Photo Not Taken',
  'MEA Kiosk Photo Taken',
  'New Surveys to Complete',
  'Newsletter subscription confirmation',
  'Reminder 1',
  'Reminder 2',
  'Reminder 3',
  'Reminder! Your All of Us Appointment is Tomorrow',
  'Reset Your All of Us Password',
  'Thank you Photo Not Taken',
  'Thank you Photo Taken',
  'You have left the program ',
  'Your All of Us Appointment Has Been Confirmed',
  'Your All of Us Appointment Has Been Rescheduled',
  'Your All of Us Appointment Have Been Cancelled',
  'Your All of Us Appointment is in Two Days',
  'Your All of Us Appointment is in Two Hours!',
];


const CampaginOptions = () => {
    const options = campaigns.map((op) =>
        <option key={op} value={op}>{op}</option>
    );
    return (
      <>
          {options}
      </>
    );
};

export default CampaginOptions;
