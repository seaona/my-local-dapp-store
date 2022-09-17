//const { shell } = require('electron')

/*
export function runShellScript () {
    shell.openExternal('https://github.com')
}*/

import { app } from 'electron';
import { spawn, exec } from 'child_process'

const GNOME_TERMINAL = 'gnome-terminal';
const MAC_TERMINAL = 'Terminal';

const atPath = app.getPath ('desktop');

export function spawnShell () {
 //shell.openExternal('https://github.com')
 let openTerminalAtPath = spawn(GNOME_TERMINAL, { cwd: atPath });
 openTerminalAtPath.on ('error', (err) => { console.log (err); });
 

}

const data = {
  ens: "git clone https://github.com/ensdomains/ens-app.git\
        cd ens-app\
        yarn install\
        yarn start"
}