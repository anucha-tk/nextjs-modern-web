import * as React from 'react';

import Billing from '@/components/Billing';
import Business from '@/components/business/Business';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Payment from '@/components/Payment';
import Seo from '@/components/Seo';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <div className='w-full overflow-hidden bg-black'>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />
        <div className='layout grid grid-flow-row grid-cols-1 gap-12 md:gap-16 lg:gap-20'>
          <Hero />
          <Stats />
          <Business />
          <Billing />
          <Payment />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
