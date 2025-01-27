---
sidebar_position: 1
---

# Template Guide

Sui dApp Starter provides a set of full-stack templates to help you get started quickly.  
Every template consists of a Move contract and a frontend.

## Available templates

| Template | Description | 
| --- | --- | 
| Greeting (React) | A **default template** with a Move contract which utilizes Sui Object Display (NFT) and native Sui Randomness. Frontend is built with React, SWC, Vite, Tailwind. |
| Greeting (Next.js) | The Move part is the same as in Greetings (React), but the frontend is built with Next.js. |
| Counter (React) | A lightweight template with a simple Move counter contract and a React frontend. |

## How to use templates?

If you use the CLI `pnpm create sui-dapp@latest` to create a new project, you'll be asked to choose a template during install.

If you create a project from our [GitHub template](https://github.com/new?template_name=sui-dapp-starter&template_owner=suiware&name=my-sui-dapp), clone the project and run one of the commands below to initialize the template:

| Template | Init Command |
| --- | --- |
| Greeting (React) | `pnpm init:template:greeting-react` |
| Greeting (Next.js) | `pnpm init:template:greeting-next` |
| Counter (React) | `pnpm init:template:counter-react` |
