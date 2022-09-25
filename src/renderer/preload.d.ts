import { Channels, Dapp, StartStatus } from '../main/types';

declare global {
  interface Window {
    ipcAPI: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
        getLists(): string;
      };
      getDapps: () => Omit<Dapp, 'sourceCodeUrl'>[];
      startDapp: (dappKey: string) => void;
      stopDapp: (dappKey: string) => void;
      startStatus: () => StartStatus;
      updateDapp: (dappKey: string) => boolean;
      deleteDapp: (dappKey: string) => void;
      getDapp: (dappKey: string) => Pick<Dapp, 'sourceCodeUrl' | 'name'>;
      addDapp: (newDapp: Pick<Dapp, 'key' | 'sourceCodeUrl' | 'name'>) => void;
      alterSourceUrl: (updated: Pick<Dapp, 'key' | 'sourceCodeUrl'>) => void;
    };
  }
}

export {};
