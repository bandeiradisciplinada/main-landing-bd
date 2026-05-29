import dynamic from 'next/dynamic';
import config from '../config/index.json';

const HeroParticles = dynamic(() => import('./HeroParticles'), { ssr: false });

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="relative mt-24 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-36 lg:px-8 xl:mt-40 min-h-[500px]">
      <HeroParticles />
      <div className="relative z-10 sm:text-center lg:text-left pointer-events-none">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl drop-shadow-sm">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-md">
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
          <div className="rounded-md">
            <a
              href={mainHero.primaryAction.href}
              target={
                mainHero.primaryAction.href.startsWith('http')
                  ? '_blank'
                  : undefined
              }
              rel={
                mainHero.primaryAction.href.startsWith('http')
                  ? 'noreferrer'
                  : undefined
              }
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 transition-all duration-300 md:py-4 md:text-lg md:px-10 pointer-events-auto"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0">
            <a
              href={mainHero.secondaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center px-8 py-3 border-2 border-primary/50 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-white transform hover:-translate-y-1 transition-all duration-300 md:py-4 md:text-lg md:px-10 pointer-events-auto"
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
