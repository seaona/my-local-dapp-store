// const { shell } = require('electron')

/*
export function runShellScript () {
    shell.openExternal('https://github.com')
} */

import { app } from 'electron';
<<<<<<< HEAD
import { spawn, exec } from 'child_process';
=======
import { spawn } from 'child_process'
const { exec } = require('child_process');

export function another() {
  exec('find . -type f | wc -l', (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
  
    console.log(`Number of files ${stdout}`);
  });
  
}


export function runScript () {
  const gitClone = spawn('git', ['clone ']);
  const yarnInstall = spawn('yarn', ['install']);
  let openTerminalAtPath1 = spawn('mkdir', ['test'], { cwd: atPath });
  openTerminalAtPath1.on ('error', (err) => { console.log (err); });
}
>>>>>>> 6f8f7a9 (shell scripts end to end)

const GNOME_TERMINAL = 'gnome-terminal';
const MAC_TERMINAL = 'Terminal';

<<<<<<< HEAD
const atPath = app.getPath('desktop');

export function spawnShell() {
  // shell.openExternal('https://github.com')
  const openTerminalAtPath = spawn(GNOME_TERMINAL, { cwd: atPath });
  openTerminalAtPath.on('error', (err) => {
    console.log(err);
  });
}

const data = {
  ens: 'git clone https://github.com/ensdomains/ens-app.git\
        cd ens-app\
        yarn install\
        yarn start',
};
=======
const atPath = app.getPath ('desktop');

export function spawnShell () {
 //shell.openExternal('https://github.com')
 let openTerminalAtPath = spawn(GNOME_TERMINAL, ['ls'], { cwd: atPath });
 openTerminalAtPath.on('error', (err) => { console.log (err); });
 
}
>>>>>>> 6f8f7a9 (shell scripts end to end)
