import Image from 'next/image';
import React from 'react';

import GetStarted from '@/components/GetStarted';

function Hero() {
  return (
    <>
      <section
        id='home'
        className='flex w-full flex-col md:flex-row md:items-center'
      >
        <div
          id='hero__content'
          className='flex w-full flex-col items-center text-white sm:w-1/2 sm:items-start sm:px-2 xl:px-4'
        >
          <div
            id='hero__discount'
            className='flex flex-row items-center rounded-lg bg-gradient-to-r from-[#272727] to-[#11101D] py-0.5 px-4 sm:w-auto md:py-1.5'
          >
            <Image
              src='/images/Discount.svg'
              alt='discount'
              width={32}
              height={32}
            />
            <p className='ml-6 text-xs text-gray-400 lg:text-lg'>
              <span className='text-white'>20%</span> Discount For{' '}
              <span className='text-white'>1 Month</span> Account
            </p>
          </div>

          <div className='my-4 sm:mt-8'>
            <div className='flex'>
              <h1 className='text-3xl font-semibold leading-10 text-white sm:leading-[60px] md:text-4xl lg:text-5xl'>
                The Next
                <br className='hidden sm:block' />{' '}
                <span className='to[#33bbcf] bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text leading-10 text-transparent sm:leading-[60px]'>
                  Generation
                </span>{' '}
              </h1>
              <div className='ml-10 hidden sm:flex'>
                <GetStarted />
              </div>
            </div>
            <div className='text-center text-3xl font-semibold leading-10 text-white sm:mb-4 sm:leading-[60px] md:text-4xl lg:text-5xl'>
              Payment method.
            </div>
          </div>

          <p className='max-w-xs text-center text-xs text-dimWhite sm:max-w-md sm:text-start sm:text-lg'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div
          id='hero__images'
          className='relative  mx-8 my-10 flex h-full w-full items-center justify-center md:my-0 lg:-mr-[300px]'
        >
          <div className='z-[5] h-96 w-96 md:h-[600px]'>
            <Image
              src='/images/robot.png'
              alt='robot'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <div className='absolute z-[0] h-[300px] w-[300px] rounded-full bg-gradient-to-t from-[#fc67fa] to-[#f4c4f3] blur-[200px] sm:h-[400px] sm:w-[400px]' />
          <div className='absolute bottom-40 z-[1] h-[300px] w-[300px] rounded-full bg-white opacity-60 blur-[200px]' />
          <div className='absolute bottom-20 z-[0] h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-[#214d76] blur-[50px]' />
        </div>

        <div className='flex items-center justify-center sm:hidden'>
          <GetStarted />
        </div>
      </section>
    </>
  );
}

export default Hero;
