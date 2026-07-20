import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Haber Lab Connectome',
  staticDirectories: ['static'],
  tagline: 'Internal capsule connectome atlas',
  favicon: 'img/favicon.svg',

  url: 'https://kabilar.github.io',
  baseUrl: '/haberlabconnectome.org/',
  organizationName: 'haberlab',
  projectName: 'haberlabconnectome.org',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
        docs: false,
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Haber Lab Connectome',
        logo: {
          alt: 'Haber Lab Connectome Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {to: '/internalcapsule', label: 'Internal Capsule Atlas', position: 'right'},
          {to: '/team', label: 'Team', position: 'right'},
          {href: 'https://www.urmc.rochester.edu/labs/haber', label: 'Haber Lab Homepage', position: 'right', target: '_blank'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/haberlab/haberlabconnectome.org',
              },
            ],
          },
          {
            items: [
              {
                html: `<div style="text-align: right;">© ${new Date().getFullYear()} Haber Lab</div>`,
              },
            ],
          },
        ],
      },
      colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
        },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
