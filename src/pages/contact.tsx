import React, { useState } from 'react';

import About from '../components/About';
import Header from '../components/Header';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetEmail = 'bandeiradisciplinada@gmail.com';
    const subject = encodeURIComponent('Contact Request from Website');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`bg-background dark:bg-gray-900 grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background dark:bg-gray-900`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl mb-8">
                  <span className="block text-primary">Contact Us</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  We&apos;d love to hear from you. Write your message below and
                  we will get back to you shortly.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto">
                  <form onSubmit={handleSubmit} className="mt-3">
                    <div className="mb-4 text-left">
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={8}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="appearance-none block w-full px-4 py-3 border border-border rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 bg-background dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 transition-colors`}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Contact;
