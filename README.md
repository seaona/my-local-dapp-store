# My Local dApp Store

Your dApp store. Privacy focused and censorship resistance.

!! ETH Berlin Hackathon Project !!

- [Project on Devfilio]()

- [Smart Contract deployed on Goerli Testnet](https://goerli.etherscan.io/address/0x3858406F7E71FdA799881CbBA6270A31F42c010a)

## Team:

- seaona (BE)
- liang3030 (FE)
- Lena (SC)

## Problem

We’ve seen numerous examples of governments sanctioning and shutting down crypto projects. Most of this censor happens on the frontend level (blockchains cant be stopped!). So the frontend is the weakest point of the crypto ecosystem. We think that the solution to this is: Going Local!

## Solution

A local dAppstore that allows you to run dapps in your local environment instead of using 3rd parties, so you can avoid censorship, use dapps privately (not exposing your IP address), etc.

## Technical details:

- desktop app (supports Mac and Linux)
- open source frontend is localy loaded
- The app functions like a DappStore, it will expose most common Dapps with Open Source frontend
  Dapps can be installed and run
- Built with Typescript, Hardhat, Solidity and Electron

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main git@github.com:seaona/my-local-dapp-store.git
cd my-local-dapp-store
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
