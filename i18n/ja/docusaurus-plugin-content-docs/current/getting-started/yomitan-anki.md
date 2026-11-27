---
id: yomitan-anki
description: AnkiConnectとLapis、Kiku、Senrenの設定手順。
title: "AnkiとYomitanを接続する"
sidebar_label: AnkiとYomitan
sidebar_position: 6
---

# AnkiとYomitanを接続する

[Anki](https://apps.ankiweb.net/)をインストールします。**ツール → アドオン → 新たにアドオンを取得**で `2055492159` を入力して[AnkiConnect](https://ankiweb.net/shared/info/2055492159)を追加し、Ankiを再起動して開いたままにします。

## 推奨ノートタイプを設定する

1. GSMの**設定 → マイニング → Anki → 一般**で推奨カードのセットアップを開き、Ankiとの接続を確認してデッキ一覧を更新します。
2. **Lapis**、**Kiku**、**Senren**から選び、カードを追加するデッキを指定します。GSMのフィールド一覧で例文、音声、画像の保存先を確認します。
3. オーバーレイのYomitanでカードを作る場合は、起動中のオーバーレイのYomitanを設定する項目を選びます。選んだデッキとフィールドで専用プロファイルが作成されます。
4. インストールと設定を開始します。Ankiのインポート画面が開いたら、Anki側で取り込みを完了してからGSMで設定を完了します。互換性のある既存のノートタイプも使えます。

![ノートタイプ、デッキ、フィールドを確認できるAnkiセットアップ画面](/img/desktop/recommended-ja.png)

## メディアの保存先

| GSMが書き込む内容 | Lapis・Kiku | Senren |
| --- | --- | --- |
| 台詞 | `Sentence` | `sentence` |
| ゲームの台詞音声 | `SentenceAudio` | `sentenceAudio` |
| ゲーム画像 | `Picture` | `picture` |
| 振り仮名付きの例文 | `SentenceFurigana` | `sentenceFurigana` |

テンプレート固有の表示・学習設定は、アシスタントでノートタイプを選び、公式ガイドを開いて確認できます。

## ブラウザー版Yomitanでカードを作る

ブラウザー拡張機能は独自の辞書とプロファイルを使います。GSMの設定アシスタントで **Yomitan fields** を開き、フィールド表をコピーします。ブラウザー版Yomitanの **Anki** 設定で連携を有効にし、カード設定で同じデッキとノートタイプを選んで、表の値を単語カードの各フィールドに入力します。[YomitanのAnkiガイド](https://yomitan.wiki/anki/)

独自のノートタイプでは、Yomitan側で単語と例文を設定し、GSMのAnki設定で対応するフィールドを選びます。音声や画像はGSMが書き込めるようにします。[テキストフィード](../how-to-use-gsm.md)の一行から単語を追加し、Ankiで結果を確認してください。
