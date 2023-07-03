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
            sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stealthrocket/docs.timecraft.dev/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Stealth Rocket',
                to: 'https://stealthrocket.tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stealthrocket/timecraft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stealth Rocket, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
      markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

};

module.exports = config;
