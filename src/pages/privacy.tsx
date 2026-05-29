import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../config/index.json';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | {config.company.name}</title>
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to {config.company.name}. We respect your privacy and are
              committed to protecting your personal data. This privacy policy
              will inform you as to how we look after your personal data when
              you visit our website and tell you about your privacy rights and
              how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              2. The Data We Collect About You
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. We
              may collect, use, store and transfer different kinds of personal
              data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, operating system and platform.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website, products and services.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              3. How We Use Your Personal Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              4. Contact Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
              <br />
              <strong>Email:</strong>{' '}
              {config.about.socialMedia.email ||
                'bandeiradisciplinada@gmail.com'}
              <br />
              <strong>Address:</strong> Rua das Pedras Negras, n.º 1, 1.º, dt.º,
              1100-404 Lisbon, Portugal
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
