import React from 'react';

const langs = [
  '',
  'es',
  'en',
]

const LanguageOptions = () => {
    const options = langs.map((op) =>
        <option key={op} value={op}>{op}</option>
    );
    return (
      <>
          {options}
      </>
    );
};

export default LanguageOptions;
