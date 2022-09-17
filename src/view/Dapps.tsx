import 'tailwindcss/tailwind.css';
import Cards from './Card';

const menus = ['App Store', 'Settings'];
const Dapps = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full">
            Main menu
            <ul className="flex flex-col overflow-hidden">
              {menus.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 ">
          <Cards />
        </main>
      </div>
    </div>
  );
};

export default Dapps;
