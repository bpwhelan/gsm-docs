---
title: LinuxにGSMをインストールする
sidebar_label: Linux
sidebar_position: 3
---

# LinuxにGameSentenceMinerをインストールする

Linux版は実験的なサポートです。ディストリビューション、X11/Wayland、OBSのキャプチャ方法によって利用できる機能が異なります。

## 事前準備

- OBS Studio。
- **FFmpeg**を別途インストールします。DebianやUbuntuでは `sudo apt install ffmpeg` を実行します。`ffmpeg -version` と `ffprobe -version` の両方でバージョンが表示されることを確認します。GSMから見つからない場合は、GSMのデータフォルダーの `ffmpeg` サブフォルダーに両方の実行ファイルを置いてください。
- Ankiと[AnkiConnect](https://ankiweb.net/shared/info/2055492159)。
- 音声やスクリーンショットを使う場合はOBSのWebSocketとReplay Bufferを有効にします。

## GSMのインストール

1. [リリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)からAppImageをダウンロードします。
2. ターミナルから実行権限を付けます：`chmod +x GameSentenceMiner-*.AppImage`
3. AppImageを起動します。

## OBSキャプチャとテキスト入力

Homeタブの **Run Capture Wizard** でゲーム画像を確認します。ウィザードでシーンやキャプチャソースを作成できない場合は、OBSでシーンとソースを手動で追加してください。Waylandではコンポジターに対応したOBSキャプチャソースを使用し、必要に応じてPipeWireの権限を許可します。

対応するゲームではWine/Proton経由のテキストフックを利用できます。フックが使えない場合はOCRを設定します。

- [テキストフックの設定](../features/text-hook.md)
- [OCRの設定](../features/ocr.md)
- [オーバーレイ](../features/overlay.md)

## Linux固有の注意点

- OneOCRはWindows専用です。使用できるOCRエンジンは現在のOCRタブで確認してください。
- Waylandではコンポジターと画面キャプチャ権限によって動作が異なります。
- グローバルホットキーやウィンドウフォーカスの挙動はデスクトップ環境に左右されることがあります。ショートカットが動作しない場合はGSMタブ内の操作を使ってください。

Ankiカード、オーバーレイ、音声の手順は[GSMの使い方](../how-to-use-gsm.md)をご覧ください。
