import React from 'react';
import CV from '../../assets/Khushi_Anand_Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} target='_blank' rel='noreferrer' className='btn btn-secondary rounded-full'>View  Resume</a>
      <a href='#contact' className='btn btn-primary rounded-full'>Let's Connect</a>
    </div>
  );
};

export default CTA;
