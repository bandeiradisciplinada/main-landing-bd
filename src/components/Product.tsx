
import Canvas from './Canvas';
import Divider from './Divider';
import config from '../config/index.json';

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background dark:bg-gray-900 py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary dark:text-white`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        {product.items.map((item, index) => {
          const shouldShowCanvas = index < product.items.length - 2;
          if (index % 2 === 0) {
            return (
              <div className={`flex flex-wrap relative mb-16`} key={index}>
                <div className={`w-full sm:w-1/2 p-6 mt-5 relative z-10 flex flex-col justify-center items-center sm:items-start text-center sm:text-left`}>
                  <h3
                    className={`text-3xl text-gray-800 dark:text-gray-100 font-bold leading-none mb-3`}
                  >
                    {item?.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4`}>{item?.description}</p>
                  <a
                    href={`/products/${item.slug}`}
                    className="text-primary font-bold hover:text-secondary transition-colors"
                  >
                    Learn More &rarr;
                  </a>
                </div>
                <div className={`w-full sm:w-1/2 p-6 relative z-10 flex justify-center items-center`}>
                  <a href={`/products/${item.slug}`} className="block mx-auto">
                    <img
                      className={`max-h-64 sm:max-h-full object-contain mx-auto cursor-pointer hover:scale-105 transition-transform${(item as any).imgDark ? ' dark:hidden' : ''}`}
                      src={item?.img}
                      alt={item?.title}
                    />
                    {(item as any).imgDark && (
                      <img
                        className="max-h-64 sm:max-h-full object-contain mx-auto cursor-pointer hover:scale-105 transition-transform hidden dark:block"
                        src={(item as any).imgDark}
                        alt={item?.title}
                      />
                    )}
                  </a>
                </div>
                {shouldShowCanvas && (
                  <Canvas
                    height={100}
                    waveHeight={600}
                    fullWidth
                    className="absolute bottom-0 left-0 w-full z-0 opacity-20"
                  />
                )}
              </div>
            );
          }
          return (
            <div
              className={`flex flex-wrap flex-col-reverse sm:flex-row relative mb-16`}
              key={index}
            >
              <div className={`w-full sm:w-1/2 p-6 relative z-10 flex justify-center items-center`}>
                <a href={`/products/${item.slug}`} className="block mx-auto">
                  <img
                    className={`max-h-64 sm:max-h-full object-contain mx-auto cursor-pointer hover:scale-105 transition-transform${(item as any).imgDark ? ' dark:hidden' : ''}`}
                    src={item?.img}
                    alt={item?.title}
                  />
                  {(item as any).imgDark && (
                    <img
                      className="max-h-64 sm:max-h-full object-contain mx-auto cursor-pointer hover:scale-105 transition-transform hidden dark:block"
                      src={(item as any).imgDark}
                      alt={item?.title}
                    />
                  )}
                </a>
              </div>
              <div className={`w-full sm:w-1/2 p-6 mt-5 relative z-10 flex flex-col justify-center items-center sm:items-start text-center sm:text-left`}>
                <h3
                  className={`text-3xl text-gray-800 dark:text-gray-100 font-bold leading-none mb-3`}
                >
                  {item?.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 mb-4`}>{item?.description}</p>
                <a
                  href={`/products/${item.slug}`}
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  Learn More &rarr;
                </a>
              </div>
              {shouldShowCanvas && (
                <Canvas
                  height={100}
                  waveHeight={600}
                  fullWidth
                  className="absolute bottom-0 left-0 w-full z-0 opacity-20"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
