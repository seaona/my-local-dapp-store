const { exec } = require('child_process');
const spawn = require('child_process').spawn;
const dappsData = require('./dapps-data.json');

function isInstalled(dapp) {
  const installedDapps = spawn('ls', {detached: true, cwd: 'local-app'});
  installedDapps.stdout.on('data', (data) => {
    
    const dataString = data.toString();

    if(!`${data}`) {
      console.log(false)
      return false;
    }
    if(data.toString().includes(dappsData[dapp].folder)) {
      console.log(true)
      return true;
    }
  });
}


async function install(dapp) {
    await spawn('mkdir', ['local-app']);
    await spawn('git', ['clone', dappsData[dapp].codebase],  {cwd: 'local-app'});
    await spawn('yarn', ['install'],  {cwd: 'local-app/ens-app'});
}

async function start(dapp) {
  await spawn('yarn', ['start'],  {detached: true, cwd: `local-app/${dappsData[dapp].folder}`});

}

async function allSteps() {
  await executeShell()
  await install()
}

start('ens')