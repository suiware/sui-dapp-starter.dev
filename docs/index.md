---
sidebar_position: 1
---

# Quick Start

> Sui dApp Starter is a full-stack boilerplate which let's you scaffold a solid foundation for your Sui project and focus on the business logic of your dapp from day one.

Here you can find a step-by-step guide on how to get up and running with Sui dApp Starter locally.

If you want to try Sui dApp Starter right away, check out **[our demo](https://demo.sui-dapp-starter.dev/)**, 
or continue with this guide to create and run a new project locally.

## 1. Install system requirements

- [Suibase](https://suibase.io/how-to/install.html)
- [Node (>= 20)](https://nodejs.org/en/download/)
- [pnpm (>= 9)](https://pnpm.io/installation)

## 2. Scaffold a new app

### Option 1. Use the Github template

1. [Create a new project from the template](https://github.com/new?template_name=sui-dapp-starter&template_owner=suiware&name=my-sui-dapp).

2. Clone the resulting repo locally.

3. Choose a template by running the corresponding init command:

| Template | Init command | Description |
| --- | --- | --- |
| Greeting (React) | `pnpm init:template:greeting-react` | A **default template** with a Move contract which utilizes Sui Object Display (NFT) and native Sui Randomness. Frontend is built with React, SWC, Vite, Tailwind. |
| Greeting (Next.js) | `pnpm init:template:greeting-next` | The Move part is the same as in Greetings (React), but the frontend is built with Next.js. |
| Counter (React) | `pnpm init:template:counter-react` | A lightweight template with a simple Move counter contract and a React frontend. |

### Option 2. Use CLI

```bash
pnpm create sui-dapp@latest
```

This way you'll be able to configure the project step-by-step.

## 3. Install project dependencies

```bash
pnpm install
```

## 4. Run the local Sui network

```bash
pnpm localnet:start
```

Local Sui Explorer will be available on [localhost:9001](http://localhost:9001/)

## 5. Deploy the demo package to the local network

```bash
pnpm localnet:deploy
```

## 6. Switch your wallet to the local network 

Go to your browser wallet settings and find the Network setting, where choose Local.

## 7. Fund your local network account/address

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="wallet" label="Wallet" default>
    Use the faucet button integrated into your wallet (e.g. Sui Wallet).
  </TabItem>
  <TabItem value="console" label="Console">
    Copy your localnet address from your wallet and pass it to the command as a parameter:

    ```bash
    pnpm localnet:faucet 0xYOURADDRESS
    ```
  </TabItem>
  <TabItem value="app" label="App">
    Run the app and use the Faucet button, located in the footer.
  </TabItem>
</Tabs>

## 8. Run the app

```bash
pnpm start
```

You can find all starter console commands in [package.json](https://github.com/suiware/sui-dapp-starter/blob/main/package.json)
