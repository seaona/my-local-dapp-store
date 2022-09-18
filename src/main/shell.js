// const { exec } = require('child_process');
const { spawn, spawnSync } = require('child_process');
const dappsData = require('./dapps-data.json');

function isInstalled(dapp) {
  const installedDapps = spawn('ls', { detached: true, cwd: 'local-app' });
  installedDapps.stdout.on('data', (data) => {
    const dataString = data.toString();

    if (!`${data}`) {
      console.log(false);
      return false;
    }
    if (data.toString().includes(dappsData[dapp].folder)) {
      console.log(true);
      return true;
    }
  });
}

async function install(dapp) {
  console.log('Cloning the project');
  await spawnSync('git', ['clone', dappsData[dapp].codebase], {
    cwd: 'local-app',
  });
  console.log('Installing dependencies');
  await spawnSync('yarn', ['install'], {
    cwd: `local-app/${dappsData[dapp].folder}`,
  });
}

async function start(dapp) {
  console.log('Starting project');
  await spawnSync('yarn', ['start'], {
    detached: true,
    cwd: `local-app/${dappsData[dapp].folder}`,
  });
}

async function runLocalApp(dapp) {
  const installed = isInstalled(dapp);
  if (installed) {
    console.log('installed');
    await start(dapp);
  } else {
    console.log('not installed');
    await install(dapp);
    await start(dapp);
  }
}
// runLocalApp('ens');

module.exports = runLocalApp;
