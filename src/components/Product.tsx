import Divider from './Divider';
import ProductCard from './ProductCard';
import config from '../config/index.json';

const Product = () => {
  const { product } = config;

  return (
    <section
      className="bg-background dark:bg-[#09090b] py-16 relative overflow-hidden"
      id="product"
    >
      {/* Decorative background glows */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h1 className="w-full my-4 text-5xl font-extrabold leading-tight text-center drop-shadow-sm">
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={
                index % 2
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'
                  : 'text-gray-900 dark:text-white'
              }
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />

        <div className="mt-20">
          {product.items.map((item, index) => (
            <ProductCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
