export type Channels = 'run-dapp';

export type Dapp = {
  key: string;
  name: string;
  imageUrl: string;
  description: string;
  isInstalled: boolean;
  isLatest: boolean;
  sourceCodeUrl: string;
};

export type StartStatus = 'loading' | 'installing' | 'starting';
