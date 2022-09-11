import Image from 'next/image';
import React from 'react';

const Features = () => {
  const features = [
    {
      id: 'feature-1',
      icon: '/images/star.svg',
      title: 'Rewards',
      content:
        'The best credit cards offer some tantalizing combinations of promotions and prizes',
    },
    {
      id: 'feature-2',
      icon: '/images/shield.svg',
      title: '100% Secured',
      content:
        'We take proactive steps make sure your information and transactions are secure.',
    },
    {
      id: 'feature-3',
      icon: '/images/send.svg',
      title: 'Balance Transfer',
      content:
        'A balance transfer credit card can save you a lot of money in interest charges.',
    },
  ];

  return (
    <div className='grid max-w-lg grid-flow-row gap-4'>
      {features.map((e) => (
        <div
          className='grid grid-flow-col gap-6 rounded-xl from-[#302E39] to-[#211D29] p-4 hover:bg-gradient-to-b'
          key={e.id}
        >
          <Image src={e.icon} alt={e.title} height={50} width={50} />
          <div className='grid grid-flow-row gap-2'>
            <h5 className='font-semibold text-white'>{e.title}</h5>
            <p className='text-xs text-dimWhite'>{e.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
