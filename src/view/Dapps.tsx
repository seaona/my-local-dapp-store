import "tailwindcss/tailwind.css";
import * as React from 'react';


const menus = ['App Store', 'Settings'];
const dapps = ['uniswap']
const Dapps = () => {
  const setApp = () => {
    console.log('test')
  }
  return (
      <div className="container mx-auto">
          <div className="flex flex-row flex-wrap py-4">
              <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
                  <div className="sticky top-0 p-4 w-full">
                      Main menu
                      <ul className="flex flex-col overflow-hidden">
                          {menus.map((menu, index)=> <li key={index}>{menu}</li>)}
                      </ul>
                  </div>
              </aside>
              <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                 {dapps.map((dapp, index)=><div key={index} onClick={_=> setApp()}>{dapp}</div>)}
              </main>
          </div>
      </div>
  );
};

export default Dapps