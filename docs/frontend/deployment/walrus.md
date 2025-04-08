---
position: 2
---

# Walrus Sites

To deploy the frontend part of a Sui dApp Starter project to Walrus Sites, do the following:

## Preparation

### 1. Activate network

Make sure you started testnet or mainnet locally:
```bash
testnet start
# or
mainnet start
```

### 2. Top up the deployment address

To get current deployer address:

```bash
tsui client active-address
# or
msui client active-address
```

To get current deployer address balance:

```bash
tsui client balance
# or
msui client balance
```

If it's not enough balance to deploy the site, top up your SUI/WAL balance.

_Refer to the [Suibase docs](https://suibase.io/walrus.html) for more commands._

## Deployment

```bash
pnpm frontend:deploy:walrus:testnet
# or
pnpm frontend:deploy:walrus:mainnet
```

## Configuration

Thanks to Suibase tools, everything is already configured.

## Current Limitations

1. Walrus Sites doesn't support the icons declared in the Web Manifest file.
2. Walrus Sites doesn't support Service Workers in the root scope because it sets its own root-scoped service worker.

## Links

* [suiware/walrus-sites-deploy](https://github.com/suiware/walrus-sites-deploy)
* [Suibase Walrus docs](https://suibase.io/walrus.html)
* [Walrus Sites docs](https://docs.wal.app/walrus-sites/intro.html)
