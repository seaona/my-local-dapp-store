import { Channels } from 'main/preload';

type Dapp = {
  name: string;
  imageUrl: string;
  description: string;
  isInstalled: boolean;
  key: string;
};

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
        getLists(): string;
      };
    };
  }
}

export {};
