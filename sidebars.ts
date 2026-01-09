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
        'getting-started/yomitan-anki',
        'getting-started/windows',
        'getting-started/linux',
        'getting-started/macos',
        'getting-started/deck'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/ai-features',
        'guides/incomplete-sentences',
        'guides/plugins'
      ],
    },
    'changelog',
    'troubleshooting',
    'settings',
  ],
};

export default sidebars;
