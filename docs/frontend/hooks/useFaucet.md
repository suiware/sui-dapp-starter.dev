---
sidebar_position: 3
---

:::tip

If you're here just for a **devnet** or **testnet** faucet for Sui, join [Sui Discord](https://discord.gg/sui) and use the `#devnet-faucet` or `#testnet-faucet` channels accordingly to fund your address.

:::

# useFaucet()

The `useFaucet()` hook lets you fund an address an a test network.

The supported networks are **localnet**, **devnet** and **testnet**.

The granted amount is:
- localnet: 100 SUI
- devnet: 10 SUI
- testnet: 1 SUI

:::note

There is a quota for requesting funds from **devnet** and **testnet**. 
If you have reached the limit, wait for 24 hours, and in the meanwhile use the `#devnet-faucet` and `#testnet-faucet` channels of the [official Sui Discord](https://discord.gg/sui).

:::

## Usage

### Fund current address

```ts title="MyComponent.tsx"
const { fund } = useFaucet()
fund()
```

If a wallet is not connected, an error message will be displayed.

### Fund an arbitrary address

```ts title="MyComponent.tsx"
const { fund } = useFaucet()
fund('0xADDRESS')
```

## Used in

[\<Faucet \/\>](../components/Faucet.md)
