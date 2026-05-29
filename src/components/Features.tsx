import FeatureCard from './FeatureCard';
import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className="py-16 relative overflow-hidden" id="features">
      {/* Background glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-base text-primary font-bold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl drop-shadow-sm">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <FeatureCard key={feature.name} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
