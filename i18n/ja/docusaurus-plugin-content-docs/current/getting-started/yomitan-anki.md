---
id: yomitan-anki
title: Anki/Yomitan セットアップ
sidebar_label: Yomitan/Anki Setup
description: Kiku、Lapis、Senren 向けノートタイプ設定ガイド。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Anki/Yomitan セットアップ

## 1. AnkiConnect をインストール

Anki 側で次を実行します。

1. `Tools` -> `Add-ons` -> `Get Add-ons...`
2. `2055492159` を貼り付けて AnkiConnect をインストールします（[AnkiConnect リンク](https://ankiweb.net/shared/info/2055492159)）。
3. Anki を再起動します。

## 2. Yomitan を AnkiConnect に接続するよう設定

Yomitan の設定を開いてください：

1. `Anki` -> `Enable Anki Integration` を有効にします。
2. `Configure Anki Flashcards` を選択します。

![alt text](image.png)

## 3. Anki ノートタイプのセットアップ

:::warning 前提条件
このドキュメントは、**Anki**、**Yomitan**、および基本的なマイニングワークフローに既に慣れていることを前提としています。
:::

:::info 注意
これらの特定のノートタイプを必ず使う必要はありません。これは筆者の推奨設定です。YomitanやGSMでフィールドを正しくマッピングできれば、任意のノートタイプを使用できます。

シンプルな構成を求める場合は `Lapis` が優れた選択肢です。より多機能で高度な設定が必要な場合は `Kiku` をお勧めします。
:::

<Tabs queryString="notetype">

  <TabItem value="kiku" label="Kiku">
    
    ## Kiku の設定

    Kiku は比較的新しいノートタイプで、現在活発に進化しています。以下は推奨される Yomitan のフィールドマッピングです。

    ![Kiku Preview](../assets/kiku.webp)

    ### 1. インストール
    
    1. GitHub Releases から最新の `Kiku_v*.apkg` をダウンロードします。
    2. ファイルをダブルクリックして Anki にインポートします。
    3. Anki の **Note Types** リストに `Kiku` が追加されます。

    ### 2. Note Manager（任意）
    
    **Kiku Note Manager** アドオンは、Kanji View 機能を全プラットフォームで動作させるためのノートキャッシュ生成に推奨されます。
    
    1. [Kiku Note Manager Addon](https://ankiweb.net/shared/info/408592650?cb=1763445474367) をインストールします。
    2. `Tools` > `Kiku Note Manager` > `Generate notes cache` を実行します。

    ### 3. Yomitan のフィールド
    
    Yomitan の設定で `Anki` -> `Configure Anki flashcard` を開き、Model に `Kiku` を選択します。

    | Field | Value |
    | :--- | :--- |
    | **Expression** | `{expression}` |
    | **ExpressionFurigana** | `{furigana-plain}` |
    | **ExpressionReading** | `{reading}` |
    | **ExpressionAudio** | `{audio}` |
    | **SelectionText** | `{popup-selection-text}` |
    | **MainDefinition** | `{single-glossary-jmdict/jitendex}` |
    | **DefinitionPicture** | *空のまま（手動画像用に使う）* |
    | **Sentence** | `{cloze-prefix}<b>{cloze-body}</b>{cloze-suffix}` |
    | **SentenceFurigana** | |
    | **SentenceAudio** | |
    | **Picture** | |
    | **Glossary** | `{glossary}` |
    | **Hint** | |
    | **PitchPosition** | `{pitch-accent-positions}` |
    | **PitchCategories** | `{pitch-accent-categories}` |
    | **Frequency** | `{frequencies}` |
    | **FreqSort** | `{frequency-harmonic-rank}` |
    | **MiscInfo** | `{document-title}` |

  </TabItem>

  <TabItem value="lapis" label="Lapis">

    ## Lapis の設定

    Lapis はシンプルで使いやすく、引き続き良い選択肢です。以下は推奨される Yomitan のフィールドマッピングです。

    ![Lapis Preview](../assets/Lapis.gif)

    ### 1. インストール
    
    1. [Lapis Releases](https://github.com/donkuri/lapis/releases) からサンプルデッキをダウンロードします。
    2. デッキを Anki にインポートします。

    ### 2. Yomitan のフィールド
    
    Yomitan の `Configure Anki Card Format` で `Lapis` を Model に選択します。

    :::tip Definition Field
    `MainDefinition` は使用している JMdict / Jitendex のバージョンにより異なります。バイリンガル辞書を使いたくない場合は、メインのモノリンガル辞書を指定してください。
    :::

    :::warning Sentence Furigana
    `SentenceFurigana` フィールドは空にしておくことを強く推奨します。`{sentence-furigana}` ハンドルバーは太字の書式を壊す可能性があります。
    :::

    | Field | Value |
    | :--- | :--- |
    | **Expression** | `{expression}` |
    | **ExpressionFurigana** | `{furigana-plain}` |
    | **ExpressionReading** | `{reading}` |
    | **ExpressionAudio** | `{audio}` |
    | **SelectionText** | `{popup-selection-text}` |
    | **MainDefinition** | `{single-glossary-jmdict/jitendex}` |
    | **DefinitionPicture** | *空のまま（手動画像用に使う）* |
    | **Sentence** | `{cloze-prefix}<b>{cloze-body}</b>{cloze-suffix}` |
    | **SentenceFurigana** | |
    | **SentenceAudio** | |
    | **Picture** | |
    | **Glossary** | `{glossary}` |
    | **Hint** | |
    | **PitchPosition** | `{pitch-accent-positions}` |
    | **PitchCategories** | `{pitch-accent-categories}` |
    | **Frequency** | `{frequencies}` |
    | **FreqSort** | `{frequency-harmonic-rank}` |
    | **MiscInfo** | `{document-title}` |

  </TabItem>

  <TabItem value="senren" label="Senren">

    ## Senren の設定

    Senren は見た目が魅力的なオプションです。私は Senren を使ったことがないため、ここでは公式ドキュメントに基づく設定のみを案内します。

    ![Senren Preview](../assets/senren.webp)

    ### 1. Yomitan のフィールド

    Yomitan 設定 -> Anki -> Configure Anki Flashcards にて以下を設定してください：

    | Field | Value | Notes |
    | :--- | :--- | :--- |
    | **word** | `{expression}` | |
    | **sentence** | `<span class="group">{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}</span>` | |
    | **sentenceFurigana** | `<span class="group">{sentence-furigana}</span>` | |
    | **sentenceEng** | | 空のままにします。 |
    | **reading** | `{pitch-accents}` | |
    | **sentenceCard** | | 空のままにします。 |
    | **audioCard** | | 空のままにします。 |
    | **notes** | | 空のままにします。 |
    | **selectionText** | `{popup-selection-text}` | |
    | **definition** | `{single-glossary-jitendexorg-2025-04-11}` | ここに主要辞書を設定してください。 |
    | **wordAudio** | `{audio}` | |
    | **sentenceAudio** | | 空のままにします。 |
    | **picture** | `{clipboard-image}` | |
    | **glossary** | `{glossary}` | すべてのアクティブ辞書から抽出を有効にします。 |
    | **pitchPosition** | `{pitch-accent-positions}` | |
    | **pitch** | `{pitch-accent-categories}` | |
    | **frequency** | `{frequencies}` | |
    | **freqSort** | `{frequency-harmonic-rank}` | |
    | **miscInfo** | `{document-title}` | |
    | **dictionaryPreference** | | `glossary` を入力すると用語集が最初に表示されます。 |

    ### 2. Yomitan Handlebars（任意）

    1. **Yomitan Settings** -> **Anki** -> **Configure Anki card Templates...** に移動します。
    2. 必要な Handlebars コードを置き換えます（元が長いため省略しました）。

  </TabItem>

</Tabs>
