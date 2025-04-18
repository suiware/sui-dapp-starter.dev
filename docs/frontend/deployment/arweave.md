---
position: 2
---

# Arweave

To deploy the frontend part of a Sui dApp Starter project to Arweave Permaweb, do the following:

## Preparation

### 1. Create a walled and top it up

Some of the Arweave wallets are Arweave.app Web Wallet and ArConnect (browser plugin). Choose one and create a new wallet there if you don't yet have one.

Then buy some amount of AR coins for example on a centralized exchange and put it to your newly created wallet address. 

_It should take 0.02 AR approximately to deploy a small app (1.5Mb). Please note this amount may vary._

### 2. Export wallet keyfile

Through your Arweave wallet settings, export your Arweave keyfile and save as `arweave-keyfile.json` in the `/packages/frontend/` folder of your project, created with Sui dApp Starter.

:::warning

We added the `arweave-keyfile.json` file name to `.gitignore`, so that you don't push it to Git accidentally.
However if you want to use your custom file name, make sure you have added it to `.gitignore`.
Remember to never push your keyfiles to Git!

:::

## Deployment

```bash
pnpm frontend:deploy:arweave
```

## Links

* [Arweave Site](https://www.arweave.org/)
* [Arweave Wallets FAQ](https://docs.arweave.org/developers/wallets/wallet-faq)
* [Arweave Documentation: arkb](https://cookbook.arweave.dev/guides/deployment/arkb.html)
