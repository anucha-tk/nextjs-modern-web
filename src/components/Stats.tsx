import React from 'react';

const Stats = () => {
  const stats = [
    {
      id: 'stats-1',
      title: 'User Active',
      value: '3800+',
    },
    {
      id: 'stats-2',
      title: 'Trusted by Company',
      value: '230+',
    },
    {
      id: 'stats-3',
      title: 'Transaction',
      value: '$230M+',
    },
  ];

  return (
    <section className='grid grid-rows-3 content-center gap-4 sm:grid-cols-3 sm:divide-x'>
      {stats.map((stat) => (
        <div
          className='grid grid-flow-col-dense items-center justify-center gap-2'
          key={stat.id}
        >
          <h4 className='text-2xl font-bold text-white'>{stat.value}</h4>
          <p className='bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-sm font-medium text-transparent'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
