import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const timeline = [
  {
    year: '2023',
    milestones: [
      {
        title: 'Official Incorporation',
        description:
          'Successful legal registration of Bandeira Disciplinada, Unipessoal Lda. in Lisbon, Portugal.',
        date: 'January 2023',
      },
      {
        title: 'Strategic Tech Pivot',
        description:
          'Strategic pivot to leverage AI APIs (OpenAI, Gemini) for localized, privacy-first solutions instead of competing with global LLMs.',
        date: 'Q1 - Q4 2023',
      },
    ],
  },
  {
    year: '2024',
    milestones: [
      {
        title: 'namak.dev Platform',
        description:
          'Initiated and beta-tested namak.dev, a comprehensive event management system for physical and virtual career fairs.',
        date: 'Q1 - Q2 2024',
      },
      {
        title: 'Corporate Integration',
        description:
          'Strategic corporation to launch the ANAC project, securing vital corporate insights and regulatory experience.',
        date: 'Q3 - Q4 2024',
      },
    ],
  },
  {
    year: '2025',
    milestones: [
      {
        title: 'ZeroG Launch',
        description:
          'Officially published ZeroG, a specialized Spaced Repetition System (SRS) for European Portuguese, on Apple App Store and Google Play.',
        date: 'Q1 2025',
      },
      {
        title: 'pthub.me Deployment',
        description:
          'Launched pthub.me to demystify Portuguese labor calculations, taxes, and financial bureaucracy for tech workers.',
        date: 'Q2 2025',
      },
      {
        title: 'subflow.work Release',
        description:
          'Developed an AI-assisted tool designed to convert English videos and generate accurate European Portuguese subtitles.',
        date: 'Q3 2025',
      },
      {
        title: 'jobja.org Relaunch',
        description:
          'Successfully unified the standalone micro-services back into the core jobja.org career navigation platform.',
        date: 'Q4 2025',
      },
    ],
  },
  {
    year: '2026',
    milestones: [
      {
        title: 'DestinAI Adaptation',
        description:
          'Extensive R&D to adapt the DestinAI core technology for Jobja, culminating in the public launch of future.jobja.org.',
        date: 'Q1 2026',
      },
    ],
  },
];

const team = [
  {
    name: 'Mohammadreza A. Fard',
    role: 'Founder & CEO',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIlToDqaioqjlteBrhpjM8PdfIoI4acbAvQlKYIZTJJv8_zOsXn=s192-c-mo',
  },
  {
    name: 'Paula Ribeiro',
    role: 'Certified Accountant',
    img: 'https://i.pravatar.cc/150?img=44',
  },
  {
    name: 'Tiago Fernandes',
    role: 'Lead Engineer',
    img: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Inês Carvalho',
    role: 'UI/UX Designer',
    img: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'João Costa',
    role: 'Operations Manager',
    img: 'https://i.pravatar.cc/150?img=12',
  },
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Bandeira Disciplinada</title>
        <meta
          name="description"
          content="The story of Bandeira Disciplinada, a tech company driving career navigation and financial literacy."
        />
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10 mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto leading-relaxed">
            Founded in Lisbon, Bandeira Disciplinada is dedicated to solving
            complex navigation challenges through elegant, AI-driven platforms.
          </p>
        </section>

        {/* Team Section (Moved Up) */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the diverse, multi-disciplinary team driving the vision
              behind Bandeira Disciplinada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgb(139,92,246,0.15)] group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  {member.role}
                </p>
              </div>
            ))}

            {/* Hiring Card */}
            <a
              href="/careers"
              className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgb(139,92,246,0.2)] group border-2 border-dashed border-primary/50 hover:border-primary cursor-pointer h-full min-h-[300px]"
            >
              <div className="relative mb-6 w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Join the Team
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                View Open Positions
              </p>
            </a>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Company History
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              How we evolved from a startup visa project to a comprehensive
              career navigation ecosystem.
            </p>
          </div>

          <div className="relative w-full">
            {/* Central Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2 rounded-full"></div>

            {timeline.map((period, idx) => (
              <div key={idx} className="mb-16">
                {/* Year Marker */}
                <div className="relative flex items-center justify-start md:justify-center w-full mb-12">
                  {/* Glowing Node for Year */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white dark:border-[#09090b] shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"></div>

                  <div className="w-full md:w-1/2 flex md:justify-end md:pr-12 pl-16 md:pl-0">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white drop-shadow-md">
                      {period.year}
                    </h2>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>

                {/* Milestones */}
                <div className="space-y-12">
                  {period.milestones.map((milestone, mIdx) => {
                    const isLeft = mIdx % 2 === 0;
                    return (
                      <div
                        key={mIdx}
                        className="relative flex flex-col md:flex-row items-center justify-between w-full"
                      >
                        {/* Node on Timeline */}
                        <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 w-4 h-4 bg-white dark:bg-[#09090b] rounded-full border-4 border-primary z-10 transform -translate-x-1/2 md:-translate-y-1/2"></div>

                        {/* Desktop Left Side */}
                        <div className="hidden md:flex w-[45%] justify-end">
                          {isLeft && (
                            <div className="glass-card p-6 rounded-2xl w-full text-right transition-transform hover:-translate-y-1">
                              <span className="text-sm font-bold text-primary mb-2 block">
                                {milestone.date}
                              </span>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {milestone.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                {milestone.description}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Mobile and Desktop Right Side */}
                        <div className="w-full md:w-[45%] pl-16 md:pl-0 flex justify-start">
                          {(!isLeft || true) && (
                            <div
                              className={`glass-card p-6 rounded-2xl w-full transition-transform hover:-translate-y-1 text-left ${isLeft ? 'md:hidden' : ''}`}
                            >
                              <span className="text-sm font-bold text-primary mb-2 block">
                                {milestone.date}
                              </span>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {milestone.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                {milestone.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
