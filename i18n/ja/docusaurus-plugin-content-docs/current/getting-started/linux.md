---
title: "LinuxにGSMをインストールする"
sidebar_label: Linux
sidebar_position: 3
---

# LinuxにGSMをインストールする

[リリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)から使いたいバージョンのx86-64用 **AppImage** をダウンロードします。ファイルの**プロパティ → 権限**でプログラムとしての実行を許可し、AppImageを開いて[初期設定](./index.md)を進めます。

## OBSを接続する

1. [OBS Studio](https://obsproject.com/download)をインストールし、ゲームと同じデスクトップセッションで起動します。
2. OBSの**ツール → WebSocketサーバー設定**でサーバーと認証を有効にします。GSMのメイン設定の**OBS**に同じホスト、ポート、パスワードを入力してください。GSMの初期ポートは `7274` です。[OBSの接続ガイド](https://obsproject.com/kb/remote-control-guide)
3. カード用のメディアを取得する場合は、OBSの**設定 → 出力 → リプレイバッファー**を有効にします。GSMのホームでOBSの接続を確認します。

## ゲームをキャプチャする

**ホーム → ゲームを追加**を開きます。X11ではXCompositeでウィンドウを取得します。WaylandではPipeWireの選択画面でゲームかディスプレイを指定します。既存のOBSシーンがある場合は、そのシーンに切り替えて台詞が映るか確認します。

WineやProtonの対応タイトルでは[テキストフック](../features/text-hook.md)を試せます。画面上の文字を読むには[OCR](../features/ocr.md)を使います。カードを作る場合は[AnkiConnectを設定](./yomitan-anki.md)し、プレイ中はAnkiを開いておきます。
