const { exec } = require('child_process');
const spawn = require('child_process').spawn;
const dappsData = require('./dapps-data.json');

function isInstalled(dapp) {
  const installedDapps = spawn('ls', {detached: true});
  installedDapps.stdout.on('data', (data) => {
    
    const dataString = data.toString();

    if(!data) {
      console.log(false)
      return false;
    }
    if(data.toString().includes(dappsData[dapp].folder)) {
      console.log(true)
      return true;
    }
    else {
      return false;
    }
  });
}

async function install(dapp) {
    await spawn('mkdir', ['local-app']);
    await spawn('git', ['clone', dappsData[dapp].codebase],  {cwd: 'local-app'});
    await spawn('yarn', ['install'],  {detached: true, cwd: 'local-app/ens-app'});
}

async function start(dapp) {
  await spawn('yarn', ['start'],  {detached: true, cwd: `local-app/${dappsData[dapp].folder}`});

}

async function runLocalApp(dapp) {
  const installed = await isInstalled(dapp)
  if(installed) {
    console.log("installed")
    await start(dapp);
  }
  else {
    console.log("not installed")
    await install(dapp);
    await start(dapp);
  }
}

runLocalApp('ens')