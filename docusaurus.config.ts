import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import {
  DEMO_FIREBASE_URL,
  DEMO_WALRUS_URL,
  DISCORD_INVITE_URL,
  GITHUB_DOCS_PROJECT_NAME,
  GITHUB_DOCS_PROJECT_URL,
  GITHUB_DOCS_PROJECT_USER,
  GITHUB_STARTER_PROJECT_URL,
  SITE_SLOGAN,
  SITE_TITLE,
  SITE_URL,
  SUIWARE_SITE_URL,
  X_LINK,
} from './src/constants/site';

const config: Config = {
  title: SITE_TITLE,
  titleDelimiter: '-',
  tagline: SITE_SLOGAN,
  favicon: 'img/favicon.ico',

  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: GITHUB_DOCS_PROJECT_USER,
  projectName: GITHUB_DOCS_PROJECT_NAME,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${GITHUB_DOCS_PROJECT_URL}/tree/main/`,
        },
        // blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: `${GITHUB_TARGET_PROJECT_URL}/tree/main/`,
        // },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/sui-dapp-starter-social-preview.png',
    metadata: [
      { name: 'msapplication-TileColor', content: '#242424' },
      { name: 'theme-color', content: '#242424' },
    ],
    navbar: {
      title: SITE_TITLE,
      logo: {
        alt: `${SITE_TITLE} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: GITHUB_STARTER_PROJECT_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: '/docs/',
            },
            {
              label: 'Console Commands',
              to: '/docs/misc/commands',
            },
            {
              label: 'Frontend',
              to: '/docs/category/frontend',
            },
            {
              label: 'Templates',
              to: '/docs/templates',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: DISCORD_INVITE_URL,
            },
            {
              label: 'X/Twitter',
              href: X_LINK,
            },
            {
              label: 'Suiware.io',
              href: SUIWARE_SITE_URL,
            },
            {
              label: 'Suiware Blog',
              to: 'https://suiware.io/posts',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Demo (Firebase)',
              to: DEMO_FIREBASE_URL,
            },
            // {
            //   label: 'Demo (Walrus)',
            //   to: DEMO_WALRUS_URL,
            // },
            {
              label: 'GitHub',
              href: GITHUB_STARTER_PROJECT_URL,
            },
            
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Konstantin Komelin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // announcementBar: {
    //   id: 'celebrate_with_us',
    //   content:
    //     '<div style="padding:10px;">Sui dApp Starter <a target="_blank" rel="noopener noreferrer" href="https://blog.sui.io/2024-sui-overflow-hackathon-winners">has won the 1st place</a> in the Randomness category of Sui Overflow 2024! Celebrate with us by <a target="_blank" rel="noopener noreferrer" href="https://demo.sui-dapp-starter.dev/">minting</a> your own random Greeting NFT!</div>',
    //   backgroundColor: '#a855f7',
    //   textColor: '#ffffff',
    //   isCloseable: false,
    // },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        href: '/img/safari-pinned-tab.svg',
        color: '#4da2ff',
      },
    },
    // Widgetbot.
    {
      tagName: 'script',
      attributes: {
        src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3',
        async: 'true',
        defer: 'true',
      },
    },
    // // Declare some json-ld structured data
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     '@context': 'https://schema.org/',
    //     '@type': 'Organization',
    //     name: 'Meta Open Source',
    //     url: 'https://opensource.fb.com/',
    //     logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
    //   }),
    // },
  ],
  scripts: [
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '80fb4309-441e-4f26-b820-5af1014a4d18',
    },
  ],
  plugins: [
    tailwindPlugin,
    [
      'docusaurus-plugin-remote-content',
      {
        name: 'kit-docs', // used by CLI, must be path safe
        sourceBaseUrl:
          'https://raw.githubusercontent.com/suiware/kit/refs/heads/main/packages/kit/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: 'docs/frontend/kit', // the base directory to output to.
        documents: [
          'AddressInput.md',
          'AmountInput.md',
          'Balance.md',
          'Faucet.md',
          'NetworkType.md',
          'SuiProvider.md',
          'useBalance.md',
          'useFaucet.md',
          'useNetworkType.md',
          'useTransact.md',
        ], // the file names to download,
        performCleanup: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/frontend/components/Balance/',
            to: '/docs/frontend/kit/Balance',
          },
          {
            from: '/docs/frontend/components/Faucet/',
            to: '/docs/frontend/kit/Faucet/',
          },
          {
            from: '/docs/frontend/components/NetworkType/',
            to: '/docs/frontend/kit/NetworkType/',
          },
          {
            from: '/docs/frontend/hooks/useBalance/',
            to: '/docs/frontend/kit/useBalance/',
          },
          {
            from: '/docs/frontend/hooks/useFaucet/',
            to: '/docs/frontend/kit/useFaucet/',
          },
          {
            from: '/docs/frontend/hooks/useSynchronizedNetworkType/',
            to: '/docs/frontend/kit/useNetworkType/',
          },
          {
            from: '/docs/frontend/hooks/useTransact/',
            to: '/docs/frontend/kit/useTransact/',
          },
          // Redirect from multiple old paths to one new path.
          {
            from: ['/docs/frontend/components/', '/docs/frontend/hooks/', '/docs/category/components/'],
            to: '/docs/frontend/kit/',
          },
        ],
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
}

export default config;
