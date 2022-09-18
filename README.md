# My Local dApp Store



## Problem 

We’ve seen numerous examples of governments sanctioning and shutting down crypto projects. Most of this censor happens on the frontend level (blockchains cant be stopped!). So frontends are the weakest point of the crypto ecosystem. We think that the solution to this is: Going Local!


## Solution

A local dappstore that allows you to run dapps in your local environment instead of using 3rd parties, so you can avoid censorship, use dapps privately (not exposing your IP address), etc.


## Technical details:
It is a desktop app (supports Mac and Linux)
You launch the app from your OS
The app functions like a DappStore, it will expose most common Dapps with Open Source frontend
Dapps can be installed and run
When you install a dapp, it will run a process in the background which will do the necessary installations for building that frontend, and then will expose the service on a localhost
Built with Typescript and Electron


## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name
npm install
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)

## Community

Join our Discord: https://discord.gg/Fjy3vfgy5q

