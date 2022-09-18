import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    getLists() {
      return JSON.stringify([
        {
          name: 'ENS',
          key: 'ens',
          isInstalled: true,
          imageUrl:
            'https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076',
          description:
            'The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.',
        },
        {
          name: 'UNISWAP',
          key: 'uniswap',
          isInstalled: false,
          imageUrl:
            'https://thegivingblock.com/wp-content/uploads/2021/07/Uniswap-Logo.png',
          description:
            'The Uniswap Protocol is an open-source protocol for providing liquidity and trading ERC20 tokens on Ethereum.',
        },
        {
          name: 'AIRSWAP',
          key: 'airswap',
          isInstalled: true,
          imageUrl:
            'https://assets.coingecko.com/coins/images/1019/large/Airswap.png',
          description:
            'AirSwap is a growing decentralized exchange that uses blockchain technology and smart contracts for direct peer-to-peer trade.',
        },
        {
          name: 'SUSHI SWAP',
          key: 'sushi',
          isInstalled: false,
          imageUrl:
            'https://s2.coinmarketcap.com/static/img/coins/200x200/6758.png',
          description:
            'SushiSwap is a fork of Uniswap that adds the SUSHI token. It grants control over the protocol to holders and pays a portion of fees to them.',
        },
        {
          name: 'LIDO',
          key: 'lido',
          isInstalled: false,
          imageUrl:
            'https://b.thumbs.redditmedia.com/H5uQJkFUag_u1VxtEkLdS_uHq8rMblym1vABEp2M93o.png',
          description:
            'Lido lets you use your staked assets to gain yield on top of yield. Use your tokens (which earn daily staking rewards) as collateral, for lending, yield farming ',
        },
      ]);
    },
  },
});
