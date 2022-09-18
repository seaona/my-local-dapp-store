// import 'tailwindcss/tailwind.css';
import Cards from './Card';

const Dapps = () => {
  return (
    <div className="container flex flex-col h-screen bg-gray-800">
      <div className="flex flex-row flex-wrap  h-full">
        <aside className="w-1/4 px-2 border-r-2">
          <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-500 border-slate-300">
            <div className="fixed flex flex-col top-0 left-0 w-full h-full border-r">
              <div className="overflow-y-auto overflow-x-hidden flex-grow bg-gray-800">
                <ul className="flex flex-col py-4 space-y-1">
                  <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm tracking-wide text-gray-500 font-medium">
                        My Local Dapp Store
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative flex flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        App store
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Settings
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main role="main" className="w-3/4 px-4 py-16">
          <Cards />
        </main>
      </div>
    </div>
  );
};

export default Dapps;
