//const { shell } = require('electron')

/*
export function runShellScript () {
    shell.openExternal('https://github.com')
}*/

import { spawn, exec } from 'child_process'


export function spawnShell () {
console.log("skdksdj")

exec("ls -la", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});
let command = spawn('ls', ['-lh', '/usr']);

command.stdout.on("data", (data: any) => {
  // Handle data...
  console.log(data) 
});

command.stderr.on('data', (data: any) => {
  console.error(`stderr: ${data}`);
});

}

const data = {
  ens: "git clone https://github.com/ensdomains/ens-app.git\
        cd ens-app\
        yarn install\
        yarn start"
}