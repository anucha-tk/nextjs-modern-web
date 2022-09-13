import Image from 'next/image';
import React from 'react';

import GetStarted from '@/components/GetStarted';

function Hero() {
  return (
    <>
      <section
        id='home'
        className='grid grid-cols-1 grid-rows-1 justify-items-center gap-6 sm:grid-cols-2'
      >
        <div
          id='hero__contents'
          className='grid content-center items-center justify-items-center gap-3 sm:justify-items-start sm:gap-6 lg:gap-8'
        >
          <div
            id='hero__discount'
            className='grid grid-flow-col items-center justify-items-start gap-3 rounded-lg bg-gradient-to-r from-[#474747] to-[#1d1b32] px-3 py-1 sm:px-5 sm:py-2'
          >
            <Image
              src='/images/Discount.svg'
              alt='discount'
              width={32}
              height={32}
            />
            <p className='text-xs text-gray-400 sm:text-sm lg:text-lg'>
              <span className='text-white'>20%</span> Discount For{' '}
              <span className='text-white'>1 Month</span> Account
            </p>
          </div>

          <div
            id='hero__content'
            className='grid justify-items-center gap-3 text-white sm:justify-items-start'
          >
            <div className='grid gap-6 sm:grid-flow-col'>
              <div className='grid justify-items-center gap-3 sm:justify-items-start'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl'>
                  The Next
                  <br />
                </h2>
                <h2 className='to[#33bbcf] bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl'>
                  Generation
                </h2>
              </div>
              <div className='hidden sm:grid'>
                <GetStarted />
              </div>
            </div>
            <p className='text-3xl sm:text-4xl lg:text-5xl'>Payment method.</p>
            <p className='max-w-xl text-center text-dimWhite sm:text-start sm:text-lg'>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>

        <div
          id='hero__images'
          className='relative -right-8 flex h-[300px] w-full items-center justify-center sm:-right-12 sm:h-[400px] lg:-right-24 lg:h-[500px]'
        >
          <div className='z-[5]'>
            <Image
              src='/images/robot.png'
              alt='robot'
              layout='fill'
              objectFit='contain'
              objectPosition='right'
            />
          </div>
          <div className='absolute bottom-20 z-[0] h-[150px] w-[150px] rounded-full bg-gradient-to-t from-[#fc67fa] to-[#f4c4f3] blur-[100px] sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px]' />
          <div className='absolute bottom-10 z-[1] h-[200px] w-[200px] rounded-full bg-white opacity-60 blur-[100px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]' />
          <div className='absolute z-[0] h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#2a659c] blur-[30px] sm:h-[400px] sm:w-[400px]' />
        </div>

        <div className='flex items-center justify-center sm:hidden'>
          <GetStarted />
        </div>
      </section>
    </>
  );
}

export default Hero;
