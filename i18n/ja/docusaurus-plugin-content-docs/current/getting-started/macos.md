---
title: macOSにGSMをインストールする
sidebar_label: macOS
sidebar_position: 4
---

# macOSにGameSentenceMinerをインストールする

macOS版は実験的で、一部のキャプチャ機能はWindowsと異なります。現在、macOS版には **Texthook / Agent** タブがありません。テキストの取り込みにはOCRを使ってください。

## 事前準備

- **FFmpeg**を別途インストールします。Homebrewを使う場合は `brew install ffmpeg` を実行し、`ffmpeg -version` と `ffprobe -version` の両方でバージョンが表示されることを確認します。GSMから見つからない場合は、GSMのデータフォルダーの `ffmpeg` サブフォルダーに両方の実行ファイルを置いてください。
- OBS Studio
- Ankiカードを更新する場合はAnkiと[AnkiConnect](https://ankiweb.net/shared/info/2055492159)
- カード作成用のYomitanなどの辞書ツール。詳しくは[AnkiとYomitanの設定](./yomitan-anki.md)。

## GSMのインストール

1. [リリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)からMacの構成に合った`.dmg`をダウンロードします。
2. ディスクイメージを開き、GameSentenceMinerをApplicationsに移します。
3. macOSがアプリの起動をブロックした場合は、**プライバシーとセキュリティ**でダウンロードしたアプリの起動を許可します。
4. GSMを起動します。

## OBSとOCRを設定する

OBSでゲームまたは画面をキャプチャするシーンを作り、カードに必要な音声も取り込みます。OBSのWebSocketとReplay Bufferを有効にし、GSMの **Settings → OBS** で接続を確認します。

GSMの **Home → ゲームを選択 → ⋯ → Run Capture Wizard** で画面を確認し、OCR手順で台詞の範囲を選びます。ウィザードでソースを作成できない場合は、先にOBSで追加してからGSMに戻って確認します。

[OCRの設定](../features/ocr.md)と[GSMの使い方](../how-to-use-gsm.md)では、OCR、オーバーレイ、Ankiの手順を説明しています。

## macOS固有の注意点

- テキストフックは現在macOS版では利用できません。OCRで文字を取り込んでください。
- キャプチャモードやグローバルショートカットが動作しない場合は、OCRタブ内の操作を試し、OBSのキャプチャソースを確認してください。
- アプリ内更新が使えない場合は、[リリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)から更新してください。
