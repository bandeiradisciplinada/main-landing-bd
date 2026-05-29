import config from '../config/index.json';

const Footer = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia } = about;

  return (
    <div className="bg-background dark:bg-[#09090b] relative z-10">
      <div className="mx-auto container max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="w-full border-t border-gray-200 dark:border-white/10 mb-12"></div>

        <footer className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-8">
          {/* Brand Column */}
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center gap-4 mb-6 group cursor-pointer">
              <div className="p-2 bg-white dark:bg-black rounded-xl shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                <img
                  src={logo}
                  alt={companyName}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {companyName}
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed mb-6">
              Rua das Pedras Negras, n.º 1, 1.º, dt.º
              <br />
              1100-404 Lisbon, Portugal.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-start justify-start md:px-8">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {config.navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialMedia.github && (
                <a
                  aria-label="github"
                  href={socialMedia.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {socialMedia.facebook && (
                <a
                  aria-label="facebook"
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              )}
              {socialMedia.instagram && (
                <a
                  aria-label="instagram"
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              <a
                aria-label="email"
                href={`mailto:${socialMedia.email || 'bandeiradisciplinada@gmail.com'}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

        <div className="w-full border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
