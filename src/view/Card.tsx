import * as React from 'react';

type Dapp = {
  name: string;
  imageUrl: string;
  description: string;
  isInstalled: boolean;
  key: string;
};

// TODO: mock data
const dappsMock = [
  {
    name: 'ENS',
    key: 'ens',
    isInstalled: true,
    imageUrl:
      'https://app.ens.domains/static/media/ENSLogo.7345281bf4086d716e34fd63fabcb4aa.svg',
    description:
      'The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.',
  },
];

const Card = ({ dapp }: { dapp: Dapp }) => {
  const triggerSetup = (dappKey: string) => {
    // console.log(dappKey);
    window.electron.ipcRenderer.sendMessage('ipc-example', ['install']);
  };

  return (
    <div className="w-72 rounded overflow-hidden shadow-lg">
      <div className="flex flex-row justify-center px-6 items-center">
        <img
          className="bg-blue-600 p-1 w-24"
          src={dapp.imageUrl}
          alt={`"logo of the" ${dapp.name}`}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1 text-center">{dapp.name}</div>
        <p className="text-gray-700 text-xs">{dapp.description}</p>
      </div>
      <div className="px-6 pb-3 text-center flex flex-row justify-between align-middle">
        <span
          className={`${
            dapp.isInstalled ? 'bg-teal-700' : 'bg-orange-400'
          } px=3`}
        >
          {dapp.isInstalled ? 'uninstalled' : 'installed'}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
          type="button"
          onClick={(_) => triggerSetup(dapp.name)}
        >
          Start
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
    <div>
      {dapps.length === 0 && <div>loading</div>}
      {dapps.length > 0 &&
        dapps.map((dapp) => <Card dapp={dapp} key={dapp.name} />)}
    </div>
  );
};

export default Cards;