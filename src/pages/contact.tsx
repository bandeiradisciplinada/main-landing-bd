import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../config/index.json';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [subjectInput, setSubjectInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetEmail =
      config.about.socialMedia.email || 'bandeiradisciplinada@gmail.com';
    const finalSubject = encodeURIComponent(
      subjectInput || 'Contact Request from Website',
    );
    const body = encodeURIComponent(message);
    window.open(
      `mailto:${targetEmail}?subject=${finalSubject}&body=${body}`,
      '_blank',
    );
  };

  return (
    <>
      <Head>
        <title>Contact Us | {config.company.name}</title>
      </Head>

      <Header />

      <main className="bg-background dark:bg-[#09090b] min-h-screen relative overflow-hidden pt-32 pb-16">
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <section className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto leading-relaxed max-w-2xl">
              We&apos;d love to hear from you. Whether you have a question about
              our products, pricing, or anything else, our team is ready to
              answer all your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="flex items-start gap-4 mb-6 group">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Email
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold break-all">
                      {config.about.socialMedia.email ||
                        'bandeiradisciplinada@gmail.com'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Office
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold">
                      Rua das Pedras Negras, n.º 1, 1.º, dt.º
                      <br />
                      1100-404 Lisbon, Portugal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="glass-card p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subjectInput}
                      onChange={(e) => setSubjectInput(e.target.value)}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-5 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
