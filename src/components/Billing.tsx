import Image from 'next/image';
import React from 'react';

const Billing = () => {
  const appStoreImages = ['/images/apple.svg', '/images/google.svg'];

  return (
    <section
      id='billing'
      className='grid auto-cols-fr justify-items-center gap-6 text-white sm:grid-cols-2'
    >
      <div className='w-full'>
        <div className='relative z-[5] h-60 md:h-80 lg:h-96'>
          <Image
            src='/images/bill.png'
            alt='billing'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='absolute z-[0] h-[300px] w-[300px] rounded-full bg-gradient-to-t from-[#fc67fa] to-[#f4c4f3] blur-[200px] sm:h-[400px] sm:w-[400px]' />
        <div className='absolute bottom-40 z-[1] h-[300px] w-[300px] rounded-full bg-white opacity-60 blur-[200px]' />
        <div className='absolute bottom-20 z-[0] h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-[#214d76] blur-[50px]' />
      </div>

      <div className='grid justify-items-center gap-6 text-center sm:text-start'>
        <h2 className='text-2xl sm:text-3xl lg:text-5xl'>
          Easily control your billing <br className='sm:hidden' /> & invoicing.
        </h2>
        <p className='text-dimWhite sm:text-lg'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='grid h-16 w-full grid-flow-col gap-6'>
          {appStoreImages.map((e) => (
            <div key={e}>
              <div className='relative cursor-pointer'>
                <Image src={e} alt='apple' layout='fill' objectFit='contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Billing;
