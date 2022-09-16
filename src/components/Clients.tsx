import Image from 'next/image';
import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 'client-1',
      logo: '/images/airbnb.png',
    },
    {
      id: 'client-2',
      logo: '/images/binance.png',
    },
    {
      id: 'client-3',
      logo: '/images/coinbase.png',
    },
    {
      id: 'client-4',
      logo: '/images/dropbox.png',
    },
  ];
  return (
    <section
      id='clients'
      className='hidden gap-3 md:grid md:grid-cols-4 md:gap-6'
    >
      {clients.map((e) => (
        <div key={e.id} className='relative h-8 w-full md:h-12'>
          <Image src={e.logo} alt={e.id} objectFit='contain' layout='fill' />
        </div>
      ))}
    </section>
  );
};

export default Clients;
