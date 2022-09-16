import Image from 'next/image';
import * as React from 'react';
import { HiMenu } from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';
const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About Us' },
  { href: '/', label: 'Features' },
  { href: '/', label: 'Solution' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 py-6'>
      <div className='layout flex h-14 items-center justify-between text-white'>
        <div className='relative flex h-full w-24 md:w-32'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            objectFit='contain'
            layout='fill'
          />
        </div>
        <nav>
          <HiMenu className='h-full w-10 md:hidden' />
          <ul className='hidden items-center justify-between space-x-4 md:flex'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
