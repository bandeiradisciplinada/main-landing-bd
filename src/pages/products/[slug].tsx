import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';
import config from '../../config/index.json';

interface Feature {
  title: string;
  description: string;
}

interface ProductData {
  title: string;
  slug: string;
  description: string;
  website: string;
  img: string;
  imgDark?: string;
  usersCount?: string;
  calendarUrl?: string;
  investorPitch?: string;
  stack?: string[];
  extraImages?: string[];
  features: Feature[];
}

interface Props {
  product: ProductData;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  if (!product) return null;

  return (
    <>
      <Head>
        <title>{product.title} | Bandeira Disciplinada</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={`${product.title} | Bandeira Disciplinada`}
        />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.img} />
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl text-center relative z-10 mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 transition-all duration-300"
            >
              Visit {product.title} &rarr;
            </a>
            {product.calendarUrl && (
              <a
                href={product.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/50 text-lg font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Discuss Partnership
              </a>
            )}
          </div>

          <div className="flex justify-center relative group max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={product.img}
              alt={product.title}
              className={`w-full max-h-[500px] object-contain rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-500 relative z-10 ${product.imgDark ? ' dark:hidden' : ''}`}
            />
            {product.imgDark && (
              <img
                src={product.imgDark}
                alt={product.title}
                className="w-full max-h-[500px] object-contain rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-500 relative z-10 hidden dark:block"
              />
            )}
          </div>
        </section>

        {/* Tech Stack & Scale Section */}
        {(product.usersCount ||
          (product.stack && product.stack.length > 0)) && (
          <section className="relative z-10 py-16 bg-white/5 dark:bg-black/20 border-y border-gray-100 dark:border-gray-800/50 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
              {product.usersCount && (
                <div className="mb-10">
                  <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
                    Active Users
                  </h3>
                  <p className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-sm">
                    {product.usersCount}
                  </p>
                </div>
              )}

              {product.stack && product.stack.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-6">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {product.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Investor & Partner Relations */}
        {product.investorPitch && (
          <section className="relative z-10 py-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
              <div className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden border border-primary/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Partner With {product.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                  {product.investorPitch}
                </p>
                {product.calendarUrl && (
                  <a
                    href={product.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Discuss Partnership
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {product.features && product.features.length > 0 && (
          <section className="relative z-10 py-16">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(139,92,246,0.15)] dark:hover:shadow-[0_8px_30px_rgb(139,92,246,0.25)] relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Extra Gallery Section */}
        {product.extraImages && product.extraImages.length > 0 && (
          <section className="relative z-10 py-16">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {product.extraImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-2xl overflow-hidden glass-card p-2"
                  >
                    <img
                      src={imgSrc}
                      alt={`${product.title} screenshot ${idx + 1}`}
                      className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Fallback overlay in case image is missing while they are empty */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 text-white font-medium">
                      Screenshot {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <LazyShow>
          <Footer />
        </LazyShow>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { product } = config;
  const paths = product.items.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product } = config;
  const currentProduct = product.items.find(
    (item) => item.slug === params?.slug,
  );

  return {
    props: {
      product: currentProduct,
    },
  };
};

export default ProductPage;
