import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx(styles.heroTitle, 'hero__title')}>
          GameSentenceMiner ドキュメント
        </Heading>
        <p className="hero__subtitle">ゲームの台詞を読み、辞書で調べ、Ankiに保存する</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            ユーザーガイド
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`GameSentenceMiner ドキュメント`}
      description="GameSentenceMinerのインストール、ゲームのテキスト取得、辞書検索、Anki連携のガイド。">
      <HomepageHeader />
    </Layout>
  );
}
