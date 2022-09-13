import Image from 'next/image';

const GetStarted = () => (
  <div className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 p-0.5 lg:h-24 lg:w-24'>
    <div className='flex h-full w-full flex-col items-center justify-center rounded-full bg-black'>
      <div className='flex flex-row'>
        <p className='text-xs font-medium leading-6 sm:text-sm lg:text-base'>
          <span className='mr-2 bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'>
            Get
          </span>
          <Image
            src='/images/arrow-up.svg'
            alt='arrow-up'
            width={20}
            height={20}
          />
        </p>
      </div>
      <p className='text-xs leading-6 sm:text-sm lg:text-base'>
        <span className='bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text font-medium text-transparent'>
          Started
        </span>
      </p>
    </div>
  </div>
);

export default GetStarted;
