import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Raaghu Documentation',
  tagline: 'Raaghu Design Systems built using React 18, provides robust, modular architecture, fully compatible with ABP Commercial.',
  favicon: 'https://docs.raaghu.io/images/logo/raaghu_icon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Raaghu UI Kit by WAi Technologies', // Usually your GitHub org/user name.
  projectName: 'raaghu-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
   /*localeConfigs: {
      en: {
        label: 'English',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
      },
      cs: {
        label: 'Čeština',
      },
      de: {
        label: 'Deutsch',
      },
      es: {
        label: 'Español',
      },
      fr: {
        label: 'Français',
      },
      it: {
        label: 'Italiano',
      },
      ja: {
        label: '日本語',
      },
      ko: {
        label: '한국어',
      },
      nl: {
        label: 'Nederlands',
      },
      pl: {
        label: 'Polski',
      },
      pt: {
        label: 'Português',
      },
      ru: {
        label: 'Русский',
      },
      'zh-CN': {
        label: '简体中文',
      },
      'zh-TW': {
        label: '繁體中文',
      },
    }*/
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
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
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Raaghu Documentation',
      logo: {
        alt: 'Raaghu Logo',
        src: 'https://docs.raaghu.io/images/logo/raaghu_icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
       // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wai-Technologies/raaghu-docs',
          position: 'right',
          className: 'header-github-link',

         
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
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
              href: 'https://github.com/Wai-Technologies/raaghu-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WAi Technologies. Built with Raaghu Design System.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
