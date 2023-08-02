// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Escape Simulator',
  tagline: 'Now with Versus mode',
  favicon: 'img/ESIcon.png',

  // Set the production url of your site here
  url: 'https://superjura.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ESDocs/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  
  organizationName: 'SuperJura', // Usually your GitHub org/user name.
  projectName: 'ESDocs', // Usually your repo name.
  trailingSlash: false,
  

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Escape Simulator',
        logo: {
          alt: 'Escape Simulator Logo',
          src: 'img/ESIcon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/faq', label: 'FAQ', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://store.steampowered.com/app/1435790/Escape_Simulator/',
            label: 'Get the game',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pinestudio',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PineStudioLLC',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/PlayEscapeSimulator',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SuperJura/ESDocs',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Escape Simulator, Pine Studio. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
