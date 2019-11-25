import React from 'react';

const subjects = [
  '',
  'A Saliva Collection Kit is an easy way to provide your sample',
   'All of Us - Quick Mood Question',
   'All of Us - Weekly Mood Questions',
   'All of Us Consent Form',
   'All of Us Research Program Consent',
   'All of Us Research Program EHR Consent',
   'All of Us Research Program Physical Measurement and Biosample Refresher',
   'Amazon SES Event Publishing Test',
   'Confirming your withdrawal from the <em>All of Us Research Program</em>',
   'Confirming your withdrawal from the All of Us Research Program',
   'Congratulations - Your Enrollment is Complete',
   "Don't Forget to Complete Your Health Surveys",
   'Friendly Reminder to Complete New Surveys',
   'Got spit?',
   'Got spit? An easy way to participate in the All of Us Research Program',
   'Have you sent back your Saliva Collection Kit?',
   "It's time to send your Saliva Collection Kit back.",
   'Just a Few Clicks To Complete Enrollment',
   'New Surveys to Complete',
   'Password Reset Email',
   'Please verify your email address',
   'Preheader text',
   'Program Management Toolkit Account',
   'Ready to Change the Future of Health?',
   'Reminder to Start Your Health Surveys',
   'Reminder!  Your All of Us Appointment is Tomorrow',
   'Reset Your All of Us Password',
   "Sergey's preheader text",
   "Serk's preheader text",
   'Su Cita de All of Us Ha Sido Confirmado',
   'Thank You for Joining the All of Us Research Program',
   'The All of Us Research Program has received your Saliva Collection Kit',
   'This is a test email',
   "We haven't received your saliva sample yet",
   'You have left the program',
   'You will receive a Saliva Collection Kit soon',
   "You've Completed Your First Three Health Surveys",
   'Your All of Us Account has been locked out for one hour',
   'Your All of Us Appointment Has Been Canceled',
   'Your All of Us Appointment Has Been Confirmed',
   'Your All of Us Appointment has been Rescheduled',
   'Your All of Us Appointment is in 2 Days',
   'Your All of Us Appointment is in Two Hours!',
   'Your Health Surveys Are Almost Complete',
   'Your Mission Control Account',
   'Your Mission Control Account Is Locked',
   'Your Mission Control Account Is Unlocked',
   'Your Mission Control Account Password Changed Successfully',
   'Your Program Management Toolkit Account Is Locked',
   'Your Program Management Toolkit Account Is Unlocked',
   'Your Program Management Toolkit Account Password Changed Successfully',
   'Your Saliva Collection Kit has been delivered',
   'Youâ€™re Almost There. Complete Consent'
]

const SubjectOptions = () => {
    const options = subjects.map((op) =>
        <option key={op} value={op}>{op}</option>
    );
    return (
      <>
          {options}
      </>
    );
};

export default SubjectOptions;
