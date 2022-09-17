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
            'https://app.ens.domains/static/media/ENSLogo.7345281bf4086d716e34fd63fabcb4aa.svg',
          description:
            'The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.',
        },
        {
          name: 'UNISWAP',
          key: 'uniswap',
          isInstalled: false,
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thu…go.svg/1200px-Uniswap_Logo.svg.png?20210117065440',
          description:
            'The Uniswap Protocol is an open-source protocol for providing liquidity and trading ERC20 tokens on Ethereum.',
        },
      ]);
    },
  },
});
