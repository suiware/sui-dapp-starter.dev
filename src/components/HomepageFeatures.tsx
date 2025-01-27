import { ReactNode } from 'react'

interface IFeature {
  title: string
  description: ReactNode
}

const features: IFeature[] = [
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Sui dApp Starter lets you{' '}
        <b>focus on your business logic from day one</b> instead of developing
        the app skeleton for weeks.
      </>
    ),
  },
  {
    title: 'Truly Full-Stack',
    description: (
      <>
        Sui dApp Starter is a <b>monorepo</b>, powered by <b>pnpm workspaces</b>
        , where frontend and backend are integrated with each other through
        console scripts.
      </>
    ),
  },
  {
    title: 'DX First',
    description: (
      <>
        Designed with developer experience in mind, Sui dApp Starter provides
        necessary tooling to{' '}
        <b>work with networks, build, test, lint, format and deploy</b>.
      </>
    ),
  },
  {
    title: 'Decentralized',
    description: (
      <>
        Client-side React or Next.js as a foundation for the frontend part lets
        you <b>host it in a decentralized manner</b>.
      </>
    ),
  },
  {
    title: 'Local Block Explorer',
    description: (
      <>
        Seamlessly integrates with{' '}
        <a href="https://www.npmjs.com/package/sui-explorer-local">
          Local Sui Explorer
        </a>
        , which lets you <b>check your local transaction data</b> during
        development.
      </>
    ),
  },
  {
    title: 'Sui Components',
    description: (
      <>
        With <a href="/docs/frontend/kit">@suiware/kit</a> included, you get{' '}
        <b>NetworkType, Balance, Faucet and other components</b> out of the box,
        so you don't have to reinvent the wheel.
      </>
    ),
  },
  {
    title: 'Sui Hooks',
    description: (
      <>
        The <b>useNetworkType, useBalance, useFaucet, useTransact</b> hooks from
        <a href="/docs/frontend/kit">@suiware/kit</a> encapsulate routine tasks,
        allowing you to develop quicker.
      </>
    ),
  },
  {
    title: 'Templates',
    description: (
      <>
        <ul>
          <li>Greeting (React)</li>
          <li>Greeting (Next.js)</li>
          <li>Counter (React)</li>
        </ul>
        <div>
          Every template includes a Move contract and a frontend. <a href="/docs/templates">Learn more</a>
        </div>
      </>
    ),
  },
]

function Feature({ title, description }: IFeature) {
  return (
    <div className="rounded-lg border border-solid border-blue-500 p-5">
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  )
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className="mx-auto mb-4 mt-8 flex w-full max-w-6xl flex-col gap-10 p-8 sm:mb-12">
      <h2 className="text-center text-3xl">Why It's Different</h2>
      <div className="grid w-full gap-8 md:grid-cols-4">
        {features.map(({ title, description }) => (
          <Feature key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}
