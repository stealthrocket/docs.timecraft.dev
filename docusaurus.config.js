// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Timecraft documentation',
  tagline: 'Build. Ship. Rewind.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.timecraft.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stealthrocket', // Usually your GitHub org/user name.
  projectName: 'timecraft', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stealthrocket/docs.timecraft.dev/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-VEGN1HHMST',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'documentation',
        logo: {
          alt: 'Build. Ship. Rewind.',
          src: 'img/timecraft.png',
        },
        items: [
          {
            href: 'https://github.com/stealthrocket/timecraft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/_stealthrocket',
              },
              {
                label: 'Discord',
                href: 'https://stealthrocket.com/discord',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stealthrocket/timecraft',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Stealth Rocket',
                to: 'https://stealthrocket.tech',
              },
              {
                label: 'Blog',
                to: 'https://blog.stealthrocket.tech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stealth Rocket, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      codeblock: {
          showGithubLink: true,
          githubLinkLabel: 'View on GitHub',
          showRunmeLink: false,
          runmeLinkLabel: 'Checkout via Runme'
      },
      algolia: {
          appId: 'QMCCRBQ4VJ',
          apiKey: 'e1870d7fb6e9a2c21f265f9ea7e48ec1',
          indexName: 'timecraft',
      },
    }),
      markdown: {
    mermaid: true,
  },
  themes: [
      '@docusaurus/theme-mermaid',
      'docusaurus-theme-github-codeblock'
  ],

};

module.exports = config;
