import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import About from '../../components/About';
import Canvas from '../../components/Canvas';
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
  features: Feature[];
}

interface Props {
  product: ProductData;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  if (!product) return null;

  return (
    <div className="bg-background min-h-screen grid gap-y-16 overflow-hidden">
      <Head>
        <title>{product.title} | Bandeira Disciplinada</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${product.title} | Bandeira Disciplinada`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.img} />
      </Head>

      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-10 pb-16 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          {product.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          {product.description}
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-8 py-3 rounded-md font-bold hover:bg-secondary transition-colors shadow-lg"
          >
            Visit {product.title}
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-w-md object-contain h-64"
          />
        </div>
      </section>

      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <section className="bg-tertiary py-16 relative z-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-background p-8 rounded-xl shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <LazyShow>
        <>
          <About />
          <Canvas />
        </>
      </LazyShow>
    </div>
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
    (item) => item.slug === params?.slug
  );

  return {
    props: {
      product: currentProduct,
    },
  };
};

export default ProductPage;
