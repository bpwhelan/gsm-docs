---
title: WindowsにGSMをインストールする
sidebar_label: Windows
sidebar_position: 2
---

# WindowsにGameSentenceMinerをインストールする

Windows版は最も多くのGSM機能に対応しています。まずAnkiとGSMを用意し、Homeタブのキャプチャウィザードでゲームを設定してください。

## インストール前に

- ゲーム画面と音声を取り込む **OBS Studio** は、GSMからインストールできます。
- Ankiカードを更新する場合は [AnkiConnect](https://ankiweb.net/shared/info/2055492159) アドオン
- カード作成に使う **Yomitan** などの辞書ツール。詳しくは[AnkiとYomitanの設定](./yomitan-anki.md)。

## GSMのインストール

1. [GSMのリリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)を開き、Windowsインストーラーをダウンロードします。
2. インストーラーを実行します。
3. **GameSentenceMiner**を起動します。
4. OBSとAnkiを起動し、GSMのHomeタブで接続状態を確認します。

## OBS接続とゲーム設定

OBSに接続できない場合は、OBSのWebSocketサーバー設定とGSMの **Settings → OBS** の接続先を確認します。ゲームを映すOBSシーンを選び、カード用の音声を保存する場合はOBSのReplay Bufferも有効にします。

GSMのHomeタブでゲームを選び、**⋯ → Run Capture Wizard** を開き、キャプチャ方法を試します。続けてテキストフックまたはOCRを選び、このゲームで自動起動する機能を指定できます。手順全体は[GSMの使い方](../how-to-use-gsm.md)をご覧ください。

## Anki接続

Ankiのアドオン画面からコード **2055492159** でAnkiConnectをインストールし、Ankiを再起動します。GSMの **Settings → Mining → Anki** でノートタイプを選び、フィールドを更新してください。

おすすめのノートタイプやYomitanの設定は[AnkiとYomitanの設定](./yomitan-anki.md)、カードへのメディア追加は[Anki Enhancement](../features/anki-enhancement.md)をご覧ください。

## 次の手順

- [ゲームからテキストを取り込む](../features/text-hook.md)
- [OCRを設定する](../features/ocr.md)
- [オーバーレイを設定する](../features/overlay.md)
- [Ankiカードを強化する](../features/anki-enhancement.md)
