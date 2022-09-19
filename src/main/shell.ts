import { spawnSync } from 'child_process';
import log from 'electron-log';
import * as fs from 'fs';
import * as path from 'path';

const loadDappsConfig = async () => {
  const filePath = path.resolve(__dirname, 'dapps-data.json');
  log.info('loading existed dapps');
  return JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
};

const getInstalledDappFolders = (dirPath: string) => {
  log.info('get installed dapps names');
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
};

const isInstalled = (
  dapp: string,
  existedDapps: Record<string, Record<string, string>>
) => {
  const dirPath = path.resolve(__dirname, '../../local-app');
  const installedDapps = getInstalledDappFolders(dirPath);

  const hasInstalled = installedDapps.includes(existedDapps[dapp].folder);
  log.info(`${dapp} is ${hasInstalled ? 'installed' : 'not installed'}`);
  return hasInstalled;
};

const install = async (dapp: string, codebase: string, folder: string) => {
  log.info(`Cloning the project: ${dapp}...`);
  await spawnSync('git', ['clone', codebase], {
    cwd: 'local-app',
  });
  log.info(`Installing dependencies: ${dapp}...`);
  await spawnSync('yarn', ['install'], {
    cwd: `local-app/${folder}`,
  });
};

const start = async (folder: string) => {
  await spawnSync('yarn', ['start'], {
    cwd: `local-app/${folder}`,
  });
};

const runLocalApp = async (dapp: string) => {
  const dappConfig = await loadDappsConfig();
  const { codebase, folder } = dappConfig[dapp];
  const installed = isInstalled(dapp, dappConfig);
  if (!installed) {
    await install(dapp, codebase, folder);
  }
  log.info(`start project: ${dapp}...`);
  await start(folder);
};

export default runLocalApp;
