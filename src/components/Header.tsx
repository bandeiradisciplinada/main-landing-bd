import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full z-50 glass">
      <Popover>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between h-16 sm:h-20 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center grow shrink-0 lg:grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="sr-only">{companyName}</span>
                  <img
                    alt="logo"
                    className="h-10 w-auto sm:h-12 cursor-pointer transition-transform hover:scale-105"
                    src={logo}
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-white/5 dark:bg-black/5 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8 md:items-center">
              {navigation.map((item) => {
                if (item.href.startsWith('/')) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  );
                }
                if (router.pathname === '/') {
                  return (
                    <ScrollLink
                      spy={true}
                      smooth={true}
                      duration={1000}
                      key={item.name}
                      to={item.href}
                      className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={`/#${item.href}`}
                    className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                href={callToAction.href}
                target={
                  callToAction.href.startsWith('http') ? '_blank' : undefined
                }
                rel={
                  callToAction.href.startsWith('http')
                    ? 'noreferrer'
                    : undefined
                }
                className={`font-medium text-primary hover:text-secondary transition-colors`}
              >
                {callToAction.text}
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-0 z-[100] bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl h-screen w-screen flex flex-col origin-top md:hidden overflow-hidden"
          >
            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
              <div>
                <img className="h-10 w-auto" src={logo} alt="logo" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-gray-100 dark:bg-gray-800 rounded-full p-3 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24 space-y-8">
              {navigation.map((item) => {
                if (item.href.startsWith('/')) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-4xl font-extrabold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors tracking-tight"
                    >
                      <Popover.Button as="span">{item.name}</Popover.Button>
                    </Link>
                  );
                }
                if (router.pathname === '/') {
                  return (
                    <ScrollLink
                      spy={true}
                      smooth={true}
                      duration={1000}
                      key={item.name}
                      to={item.href}
                      className="text-4xl font-extrabold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors cursor-pointer tracking-tight"
                    >
                      <Popover.Button as="span">{item.name}</Popover.Button>
                    </ScrollLink>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={`/#${item.href}`}
                    className="text-4xl font-extrabold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors tracking-tight"
                  >
                    <Popover.Button as="span">{item.name}</Popover.Button>
                  </Link>
                );
              })}

              <div className="pt-8 w-full max-w-sm">
                <a
                  href={callToAction.href}
                  target={
                    callToAction.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    callToAction.href.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                  className="block w-full px-8 py-4 text-center text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Popover.Button as="span">{callToAction.text}</Popover.Button>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Menu;
