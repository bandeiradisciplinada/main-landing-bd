interface ProductItem {
  title: string;
  slug: string;
  description: string;
  website: string;
  img: string;
  imgDark?: string;
}

interface ProductCardProps {
  item: ProductItem;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-wrap flex-col-reverse ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-y-10 mb-24 relative z-10`}
    >
      <div
        className={`w-full sm:w-1/2 p-6 flex flex-col justify-center ${isEven ? 'sm:items-start text-left' : 'sm:items-start text-left'} items-center text-center`}
      >
        <h3 className="text-4xl text-gray-900 dark:text-gray-100 font-extrabold mb-4 drop-shadow-sm">
          {item.title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
          {item.description}
        </p>
        <a
          href={`/products/${item.slug}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transform hover:-translate-y-1 transition-all duration-300"
        >
          Learn More &rarr;
        </a>
      </div>

      <div className="w-full sm:w-1/2 p-6 flex justify-center">
        <a href={`/products/${item.slug}`} className="block relative group">
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            className={`max-h-80 sm:max-h-96 object-contain rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 relative z-10 ${item.imgDark ? 'dark:hidden' : ''}`}
            src={item.img}
            alt={item.title}
          />
          {item.imgDark && (
            <img
              className="max-h-80 sm:max-h-96 object-contain rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 relative z-10 hidden dark:block"
              src={item.imgDark}
              alt={item.title}
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
