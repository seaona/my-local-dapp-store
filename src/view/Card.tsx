import * as React from 'react';

type Dapp = {
  name: string;
  imageUrl: string;
  description: string;
  isInstalled: boolean;
  isPayable: boolean;
  key: string;
};

const Card = ({ dapp }: { dapp: Dapp }) => {
  const triggerSetup = (e: React.MouseEvent, dappKey: string) => {
    e.preventDefault();
    window.electron.ipcRenderer.sendMessage('run-dapp', ['install', dappKey]);
  };

  return (
    <div className="w-72 rounded-xl overflow-hidden shadow-lg mx-3 pt-2 border-gray-100 border-2 mb-5 z-50">
      <div className="flex flex-row justify-center px-6 items-center">
        <img
          className="m-1 w-24 h-24"
          src={dapp.imageUrl}
          alt={`"logo of the" ${dapp.name}`}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1 text-center text-white">{dapp.name}</div>
        <p className="text-gray-500 text-xs h-16">{dapp.description}</p>
      </div>
      <div className="px-6 pb-3 text-center flex flex-row justify-between items-center">
        <span
          className={`${
            dapp.isInstalled ? 'bg-teal-500' : 'bg-orange-400'
          } px-2 text-white rounded-full text-sm h-5`}
        >
          {dapp.isInstalled ? 'Installed' : 'Uninstalled'}
          
        </span>
        <button
          className={`${dapp.isPayable? "bg-red-500": "bg-blue-500"} hover:bg-blue-700 text-white px-2 rounded text-sm h-7`}
          type="button"
          onClick={(e) => triggerSetup(e, dapp.key)}
        >
          {dapp.isPayable ? 'Buy' : dapp.isInstalled ? 'Start' : 'Install and Start'}
          
        </button>
      </div>
    </div>
  );
};

const Cards = () => {
  const [dapps, setDapps] = React.useState<Dapp[]>([]);
  React.useEffect(() => {
    const curDapps = window.electron.ipcRenderer.getLists();
    setDapps(JSON.parse(curDapps));
  }, []);
  return (
    <div className="flex flex-row justify-space flex-wrap">
      {dapps.length === 0 && <div>loading</div>}
      {dapps.length > 0 &&
        dapps.map((dapp) => <Card dapp={dapp} key={dapp.name} />)}
    </div>
  );
};

export default Cards;
