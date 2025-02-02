import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import InstallField from '@site/src/components/InstallField'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import { BookOpenIcon, PointerIcon } from 'lucide-react'
import { useEffect } from 'react'
import ButtonLink from '../components/ButtonLink'
import HomepageFeatures from '../components/HomepageFeatures'
import HomepageReviews from '../components/HomepageReviews'
import HomepageVideo from '../components/HomepageVideo'
import { DEMO_FIREBASE_URL, SITE_TITLE } from '../constants/site'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="relative overflow-hidden px-6 py-6 text-center md:py-8">
      <div className="container">
        <img
          src="/img/logo.svg"
          alt={`${SITE_TITLE} Logo`}
          className="mt-4 h-32 w-32"
        />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <InstallField />

        <div className="flex flex-row items-center justify-center gap-4 pt-4">
          <ButtonLink
            to={DEMO_FIREBASE_URL}
            target="_blank"
            id="demo-button"
            data-umami-event="Demo button"
          >
            Demo <PointerIcon className="h-4 w-4" />
          </ButtonLink>

          <ButtonLink to="/docs" color="secondary">
            Docs <BookOpenIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    // Widgetbot.
    // @ts-ignore
    new Crate({
      server: '1237259509366521866', // Sui dApp Starter
      channel: '1287829293216436330', // #sui-dapp-starter
    })
  }, [])

  return (
    <Layout
      // title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main className="mb-16">
        {/* <HomepageVideo /> */}
        <HomepageFeatures />
        <HomepageReviews />

        <div className="mb-6 mt-0 flex flex-col items-center justify-center">
          <iframe
            className="overflow-hidden border-none"
            src="https://ghbtns.com/github-btn.html?user=suiware&repo=sui-dapp-starter&type=star&count=true&size=large"
            width="140"
            height="30"
            title="Star on Github"
          ></iframe>
        </div>
      </main>
    </Layout>
  )
}
