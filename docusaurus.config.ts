import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';




const config: Config = {
  title: 'Raaghu Documentation',
  tagline: 'Raaghu Design Systems built using React 18, provides robust, modular architecture, fully compatible with ABP Commercial.',
  favicon: 'https://raaghustorageaccount.blob.core.windows.net/raaghu-blob/Raaghu%20Logo%20SD.svg',

  
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Raaghu UI Kit by WAi Technologies', // Usually your GitHub org/user name.
  projectName: 'raaghu-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'pt-BR','zh-Hans'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          path:'en'
        },
        'zh-Hans': {
          label: '简体中文',
          direction: 'ltr',
          path: 'zh-Hans', // Make sure the path is specified
        },
        'pt-BR': {
          label: 'Português (Brasil)',
          direction: 'ltr',
          path: 'pt-BR', // Make sure the path is specified
        },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Wai-Technologies/raaghu-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wai-Technologies/raaghu-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Raaghu Documentation',
      logo: {
        alt: 'Raaghu Logo',
        src: 'https://raaghustorageaccount.blob.core.windows.net/raaghu-blob/Raaghu%20Logo%20SD.svg',
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
        {
          href: 'https://www.linkedin.com/company/waitechnologies',
          position:'right',
          className:'header-linkedIn-link',
        },
        {
          href: 'https://vimeo.com/user9603091',
          position:'right',
          className:'header-vimeo-link',
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
              label: 'GitHub',
              href: 'https://github.com/Wai-Technologies/raaghu-docs',
            },
            {
              label: 'Vimeo',
              href: 'https://vimeo.com/user9603091',

            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/waitechnologies',

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
