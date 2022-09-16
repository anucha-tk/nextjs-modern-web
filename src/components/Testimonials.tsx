import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  const feedbacks = [
    {
      id: 'feedback-1',
      content:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Herman Jensen',
      title: 'Founder & Leader',
      img: '/images/people01.png',
    },
    {
      id: 'feedback-2',
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: 'Steve Mark',
      title: 'Founder & Leader',
      img: '/images/people02.png',
    },
    {
      id: 'feedback-3',
      content:
        'It is usually people in the money business, finance, and international trade that are really rich.',
      name: 'Kenn Gallagher',
      title: 'Founder & Leader',
      img: '/images/people03.png',
    },
  ];

  return (
    <section id='testimonials' className='grid gap-6'>
      <div
        id='testimonials_contents'
        className='z-10 grid items-center gap-6 text-center md:grid-cols-2 md:text-start'
      >
        <h2 className='text-2xl text-white md:text-3xl lg:text-5xl'>
          What people are saying about us
        </h2>
        <div className='relative'>
          <p className='text-dimWhite sm:text-lg md:max-w-[450px]'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
          <div className='absolute -right-5 z-0 h-60 w-60 rounded-full bg-gradient-to-r from-[#fc67fa] to-[#f4c4f3] blur-[150px]' />
          <div className='absolute -right-5 z-[1] h-40 w-40 rounded-full bg-white opacity-60 blur-[150px]' />
          <div className='absolute -right-5 z-[2] h-32 w-32 rounded-full bg-gradient-to-r from-[#214d76] blur-[40px]' />
        </div>
      </div>

      <div id='testimonials_card' className='z-10 grid gap-3 md:grid-cols-3'>
        {feedbacks.map((feedback) => (
          <div
            id='feedback_card'
            key={feedback.id}
            className='grid-flow-rows grid items-center justify-items-center gap-6 rounded-xl from-[#302E39] to-[#211D29] p-4 hover:bg-gradient-to-b md:justify-items-start lg:p-6'
          >
            <div className='relative h-5 w-5'>
              <Image
                src='/images/quotes.svg'
                alt='quotes'
                layout='fill'
                objectFit='contain'
              />
            </div>

            <p className='text-center text-sm text-white md:text-start lg:text-lg'>
              {feedback.content}
            </p>

            <div
              id='feedback_avatar'
              className='grid grid-flow-col items-center gap-6'
            >
              <div className='relative h-10 w-10'>
                <Image
                  src={feedback.img}
                  objectFit='contain'
                  layout='fill'
                  alt='feedback_avatar'
                />
              </div>
              <div>
                <h4 className='text-sm text-white lg:text-base'>
                  {feedback.name}
                </h4>
                <p className='text-sm text-dimWhite lg:text-base'>
                  {feedback.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
