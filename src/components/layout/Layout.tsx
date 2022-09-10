import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='px-8 sm:px-12 xl:px-24'>
      <Header />
      {children}
    </div>
  );
}
