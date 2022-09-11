import React from 'react';

import Features from '@/components/business/Features';
import Button from '@/components/Button';

const Business = () => {
  return (
    <section className='grid grid-flow-row justify-center gap-6 sm:grid-flow-col sm:items-start'>
      <div
        id='Business__contents'
        className='grid justify-items-center text-center sm:justify-items-start sm:text-start'
      >
        <h2 className='text-2xl font-semibold leading-10 text-white sm:leading-[60px] md:text-4xl lg:text-5xl'>
          You do the business,
          <br className='hidden sm:flex' /> we’ll handle the money.
        </h2>
        <p className='mt-5 max-w-xs text-center text-xs text-dimWhite sm:max-w-md sm:text-start sm:text-lg'>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles='my-5 sm:my-10' />
      </div>

      <Features />
    </section>
  );
};

export default Business;
