import { useState } from 'preact/hooks';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const links = [
  { text: 'Players', to: '/players' },
  { text: 'Places', to: '/places' },
  { text: 'Lands', to: '/lands' },
];

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav class="bg-transparent fixed top-0 left-0 right-0">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </Link>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                {links.map(({ to, text }) => (
                  <Link
                    to={to}
                    className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <UserAvatar />
        </div>
      </div>

      <div class={`sm:hidden ${navOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {links.map(({ to, text }) => (
            <Link
              to={to}
              className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
