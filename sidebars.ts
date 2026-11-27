import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/windows',
        'getting-started/linux',
        'getting-started/macos',
        'getting-started/deck',
        'getting-started/yomitan-anki',
      ],
    },
    {
      type: 'category',
      label: 'How to Use GSM',
      collapsed: false,
      items: [
        'how-to-use-gsm',
        'features/text-hook',
        'features/ocr',
        'features/overlay',
        'features/anki-enhancement',
      ],
    },
    {
      type: 'category',
      label: 'More Features',
      collapsed: true,
      items: [
        'features/autolauncher',
        'features/text-processing',
        'features/windows-speech-recognition',
        'features/hachidori',
        'features/overlay-gamepad',
        'features/longplay',
        'features/ai-features',
        'features/game-pausing',
        'features/stats-and-library',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/custom-name-dictionary',
        'guides/mining-hard-subbed-content',
        'guides/incomplete-sentences',
        'guides/plugins',
      ],
    },
    'troubleshooting',
    'settings',
  ],
};

export default sidebars;
