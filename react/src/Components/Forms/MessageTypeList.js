import React from 'react';

const msgTypes = [
  '',
  'email',
  'SMS',
]

const MsgTypeOptions = () => {
    const options = msgTypes.map((op) =>
        <option key={op} value={op}>{op}</option>
    );
    return (
      <>
          {options}
      </>
    );
};

export default MsgTypeOptions;
