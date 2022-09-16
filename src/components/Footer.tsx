import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const socialMedia = [
    {
      id: 'social-media-1',
      icon: '/images/instagram.svg',
      link: 'https://www.instagram.com/',
    },
    {
      id: 'social-media-2',
      icon: '/images/facebook.svg',
      link: 'https://www.facebook.com/',
    },
    {
      id: 'social-media-3',
      icon: '/images/twitter.svg',
      link: 'https://www.twitter.com/',
    },
    {
      id: 'social-media-4',
      icon: '/images/linkedin.svg',
      link: 'https://www.linkedin.com/',
    },
  ];

  const footerLinks = [
    {
      title: 'Useful Links',
      links: [
        {
          name: 'Content',
          link: 'https://www.hoobank.com/content/',
        },
        {
          name: 'How it Works',
          link: 'https://www.hoobank.com/how-it-works/',
        },
        {
          name: 'Create',
          link: 'https://www.hoobank.com/create/',
        },
        {
          name: 'Explore',
          link: 'https://www.hoobank.com/explore/',
        },
        {
          name: 'Terms & Services',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          name: 'Help Center',
          link: 'https://www.hoobank.com/help-center/',
        },
        {
          name: 'Partners',
          link: 'https://www.hoobank.com/partners/',
        },
        {
          name: 'Suggestions',
          link: 'https://www.hoobank.com/suggestions/',
        },
        {
          name: 'Blog',
          link: 'https://www.hoobank.com/blog/',
        },
        {
          name: 'Newsletters',
          link: 'https://www.hoobank.com/newsletters/',
        },
      ],
    },
    {
      title: 'Partner',
      links: [
        {
          name: 'Our Partner',
          link: 'https://www.hoobank.com/our-partner/',
        },
        {
          name: 'Become a Partner',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
      ],
    },
  ];

  return (
    <footer className='grid gap-6 divide-y divide-gray-500'>
      <div
        id='footer_contents'
        className='hidden items-center justify-items-center gap-6 md:grid md:grid-cols-3'
      >
        <div id='logo_company' className='grid gap-6'>
          <div className='relative h-20 w-full'>
            <Image
              src='/images/logo.svg'
              alt='logo_company'
              objectFit='contain'
              layout='fill'
            />
          </div>
          <p className='text-dimWhite'>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div
          id='nav'
          className='col-span-2 grid w-full grid-cols-3 justify-items-center'
        >
          {footerLinks.map((e) => (
            <div key={e.title} className='grid content-start gap-3'>
              {e.links.map((link) => (
                <div key={link.name} className='text-dimWhite first:text-white'>
                  {link.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        id='footer_copyright'
        className='grid items-center justify-items-center gap-6 py-6 md:grid-cols-3 md:justify-items-stretch'
      >
        <p className='text-base text-dimWhite md:col-span-2 lg:text-lg'>
          Copyright Ⓒ 2022 HooBank.{' '}
          <span className='hidden md:inline-grid'>All Rights Reserved.</span>
        </p>
        <div className='flex justify-end'>
          {socialMedia.map((e) => (
            <div key={e.id} className='relative mx-3 h-5 w-5 md:h-8 md:w-8'>
              <Image
                src={e.icon}
                alt={e.id}
                objectFit='contain'
                layout='fill'
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
