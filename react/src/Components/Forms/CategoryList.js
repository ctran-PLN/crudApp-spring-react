import React from 'react';

const categories = [
  '',
 'Appointment scheduling (PMT)',
 'Appointment Reminders (PMT)',
 'Before enrollment',
 'Consent Forms',
 'Withdrawal',
 'Survey Reminder #2',
 'Full Enrollment Appt Reminders (PMT)',
 'Full Enrollment Appt Scheduling (PMT)',
 'Enrollment',
 'Survey Reminders',
]

const CategoryOptions = () => {
    const options = categories.map((op) =>
        <option key={op} value={op}>{op}</option>
    );
    return (
      <>
          {options}
      </>
    );
};

export default CategoryOptions;
