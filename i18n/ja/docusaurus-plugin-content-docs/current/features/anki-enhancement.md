---
title: Ankiカードの強化
sidebar_label: Anki Enhancement
sidebar_position: 5
---

import ImageFrame from '@site/src/components/ImageFrame';

# Ankiカードの強化

GSMはゲームから取り込んだ台詞とAnkiカードを照合し、音声やスクリーンショット、台詞の文脈などを追加します。追加されるフィールドは、ノートタイプと有効にした設定によって異なります。

## Ankiを設定する

1. AnkiとAnkiConnectをインストールし、Ankiを起動しておきます。
2. GSMの**Settings → Mining → Anki**でノートタイプを選び、フィールドを更新します。フィールド名はノートタイプと一致させてください。
3. 推奨ノートタイプが必要な場合、**Settings → Mining → Anki → General → Set up recommended Anki cards**からLapis、Kiku、Senrenを設定できます。既存のYomitanプロファイルとは別にGSM用プロファイルを作成できます。
4. OBSの接続と音声・画面キャプチャを確認します。録画リプレイからメディアを作るには、該当時間の映像がReplay Bufferに残っている必要があります。

詳しくは[AnkiとYomitanの設定](../getting-started/yomitan-anki.md)をご覧ください。

## セッション中にカードを作る

1. ゲームの台詞がGSMのText Feedに表示されていることを確認します。
2. Yomitanで単語を調べ、Ankiにカードを作ります。
3. GSMがカードと台詞を照合し、有効になっているメディアやフィールドを準備します。
4. 確認画面が有効な場合、適用前に台詞、文脈、音声、スクリーンショットを確認します。

<ImageFrame src="/img/desktop/card-ja.png" alt="現在のGSMカード確認画面" caption="確認画面で台詞と対応するゲームメディアを確認できます。" />

## 追加できる情報

- 音声検出とタイミング調整を使った**ゲーム音声**
- **スクリーンショット**または設定に応じたアニメーション画像
- **前後の台詞**や複数行の文脈
- 対応フィールドを設定した場合の**ふりがな、ゲーム名、タグ、AI出力**

## カードが更新されない場合

- Ankiが起動し、HomeタブでAnki接続済みと表示されていることを確認します。
- カードのノートタイプと、単語・文フィールドの対応を確認します。
- カードの文章とText Feedの台詞が一致しているか確認します。違う場合は音声オフセットより先に、フックやOCRを調整します。
- 音声や画像がない場合は、OBSのキャプチャソースとReplay Bufferを確認します。

続けて[GSMの使い方](../how-to-use-gsm.md)をご覧ください。
