import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';

const Payment = () => {
  return (
    <>
      <section className='grid gap-6 md:grid-cols-2'>
        <div
          id='payment_image'
          className='relative h-60 w-full md:order-last md:h-80 lg:h-96'
        >
          <Image
            src='/images/card.png'
            alt='card'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div
          id='payment_content'
          className='grid content-start items-start justify-items-center gap-6 text-center md:content-start md:justify-items-start md:text-start'
        >
          <h2 className='text-2xl text-white sm:text-3xl lg:text-5xl'>
            Find a better card deal in few easy steps.
          </h2>
          <p className='text-dimWhite sm:text-lg'>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button />
        </div>
      </section>
    </>
  );
};

export default Payment;
