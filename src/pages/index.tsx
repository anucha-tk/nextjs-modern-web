import * as React from 'react';

import Billing from '@/components/Billing';
import Business from '@/components/business/Business';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Payment from '@/components/Payment';
import Seo from '@/components/Seo';
import Stats from '@/components/Stats';

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
        <div className='grid grid-flow-row grid-cols-1 gap-12'>
          <Hero />
          <Stats />
          <Business />
          <Billing />
          <Payment />
        </div>
      </Layout>
    </div>
  );
}
