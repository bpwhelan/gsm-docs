import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/windows',
        'getting-started/linux',
        'getting-started/macos',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/ai-features',
        'guides/incomplete-sentences',
      ],
    },
    'troubleshooting',
    {
      type: 'category',
      label: 'Translations',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'Translated/ja/README',
          label: '日本語',
        },
        {
          type: 'doc',
          id: 'Translated/zh/README',
          label: '简体中文',
        },
      ],
    },
  ],
};

export default sidebars;
