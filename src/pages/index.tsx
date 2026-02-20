import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`grid gap-y-16 overflow-hidden`}>
      <div className={`relative`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
        <Canvas
          height={90}
          waveHeight={600}
          className="absolute bottom-0 w-full z-0 transform"
        />
      </div>
      <LazyShow>
        <>
          <Product />
          <Canvas height={100} />
        </>
      </LazyShow>
      <LazyShow>
        <Features />
      </LazyShow>
      {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <>
          <About />
          <Canvas />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
