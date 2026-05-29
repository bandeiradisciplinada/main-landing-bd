export interface FeatureItem {
  name: string;
  description: string;
  icon: string;
}

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="relative glass-card p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(139,92,246,0.2)] dark:hover:shadow-[0_8px_30px_rgb(139,92,246,0.3)]">
      <dt>
        <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/40 dark:to-secondary/40 backdrop-blur-md border border-primary/30">
          <img
            className="inline-block h-8 w-8 object-contain"
            src={feature.icon}
            alt={feature.name}
          />
        </div>
        <p className="ml-20 text-xl leading-6 font-bold text-gray-900 dark:text-gray-100">
          {feature.name}
        </p>
      </dt>
      <dd className="mt-4 ml-20 text-base text-gray-600 dark:text-gray-300">
        {feature.description}
      </dd>
    </div>
  );
};

export default FeatureCard;
