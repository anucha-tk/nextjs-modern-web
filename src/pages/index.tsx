import * as React from 'react';

import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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
        <div className='flex items-center justify-center sm:justify-start'>
          <Hero />
        </div>
      </Layout>
    </div>
  );
}
