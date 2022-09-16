import React from 'react';

import Button from '@/components/Button';

const CTA = () => {
  return (
    <section
      id='cta'
      className='md:p12 grid justify-items-center gap-3 rounded-3xl bg-gradient-to-b from-[#302E39] to-[#211D29] p-8 text-center md:grid-cols-2 md:items-center lg:px-16 lg:py-14'
    >
      <div className='grid grid-rows-2 items-center gap-3'>
        <h2 className='text-2xl text-white md:text-start md:text-3xl lg:text-5xl'>
          Let’s try our service now!
        </h2>
        <p className='text-sm text-dimWhite md:text-start md:text-base lg:text-lg'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button styles='md:px-7 md:py-5 lg:text-lg lg:px-8 lg:py-6 md:rounded-2xl' />
    </section>
  );
};

export default CTA;
