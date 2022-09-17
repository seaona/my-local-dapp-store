import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';
export type Channels2 = 'my-test';

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
          key: 'ens-app',
          isInstalled: true,
          imageUrl:
            'https://app.ens.domains/static/media/ENSLogo.7345281bf4086d716e34fd63fabcb4aa.svg',
          description:
            'The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.',
        },
      ]);
    },
  },
});
