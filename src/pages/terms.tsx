import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../config/index.json';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | {config.company.name}</title>
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white">
            Terms of Service
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              1. Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              By accessing the website at {config.company.name}, you are
              agreeing to be bound by these terms of service, all applicable
              laws and regulations, and agree that you are responsible for
              compliance with any applicable local laws. If you do not agree
              with any of these terms, you are prohibited from using or
              accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              2. Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on {config.company.name}'s
              website for personal, non-commercial transitory viewing only. This
              is the grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on {config.company.name}'s website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              3. Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The materials on {config.company.name}'s website are provided on
              an 'as is' basis. {config.company.name} makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              4. Limitations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In no event shall {config.company.name} or its suppliers be liable
              for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on {config.company.name}
              's website, even if {config.company.name} or an authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default TermsOfService;
