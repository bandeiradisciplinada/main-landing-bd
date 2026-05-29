import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../config/index.json';

const jobs = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Lisbon, Portugal (Hybrid)',
    type: 'Full-time',
    description:
      'Help us scale our core products like JobJa and pthub.me. You will work heavily with React, Next.js, Node.js, and AI APIs.',
  },
  {
    title: 'AI / Machine Learning Researcher',
    department: 'Data & AI',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Work on fine-tuning local LLMs and vision models for our SubFlow and DestinAI pipelines.',
  },
  {
    title: 'Senior UI/UX Designer',
    department: 'Design',
    location: 'Lisbon, Portugal (On-site)',
    type: 'Full-time',
    description:
      'Take ownership of the Bandeira Disciplinada design system. We need someone passionate about glassmorphism, micro-animations, and premium SaaS aesthetics.',
  },
];

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers | Bandeira Disciplinada</title>
        <meta
          name="description"
          content="Join our team and help build the future of AI-driven career navigation."
        />
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10 mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto leading-relaxed max-w-2xl">
            We are always looking for passionate builders to help us develop
            elegant, AI-driven solutions that impact how people work and learn.
          </p>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-l-4 border-primary pl-4">
              Open Roles
            </h2>
          </div>

          <div className="flex flex-col space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 group"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.department}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {job.location}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm font-medium hidden md:block">
                      &bull;
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <a
                    href={`mailto:${config.about.socialMedia.email || 'careers@bandeiradisciplinada.com'}?subject=Application: ${job.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-card p-10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Don&apos;t see a perfect fit?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We are constantly growing. Send us your CV and a brief intro, and
              we will keep you in mind for future openings.
            </p>
            <a
              href={`mailto:${config.about.socialMedia.email || 'careers@bandeiradisciplinada.com'}?subject=Spontaneous Application`}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2.5 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Send Spontaneous Application
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CareersPage;
