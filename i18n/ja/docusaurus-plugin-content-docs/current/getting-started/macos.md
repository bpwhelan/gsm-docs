---
title: "macOSにGSMをインストールする"
sidebar_label: macOS
sidebar_position: 4
---

# macOSにGSMをインストールする

## FFmpegをインストールする

OBSのリプレイからカード用の音声や画像を切り出すには、`ffmpeg` と `ffprobe` が必要です。Homebrewを使っている場合は、ターミナルで `brew install ffmpeg` を実行します。[HomebrewのFFmpegパッケージ](https://formulae.brew.sh/formula/ffmpeg)

`ffmpeg -version` と `ffprobe -version` の両方でバージョンが表示されることを確認します。Finderから起動したGSMがコマンドを見つけられない場合は、GSMの共有データフォルダー内の `ffmpeg` フォルダーに両方の実行ファイルかシンボリックリンクを置きます。[個別にダウンロード](https://ffmpeg.org/download.html)した実行ファイルも同じ場所に置けます。

## GSMをインストールしてOBSを接続する

1. [リリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)からMac用の **.dmg** をダウンロードします。Appleシリコンは **arm64**、Intel Macは **x64** があるリリースを選びます。
2. ディスクイメージを開き、アプリを**アプリケーション**にドラッグして起動します。[初期設定](./index.md)で言語と辞書を選びます。
3. [OBS Studio](https://obsproject.com/download)でシーンにmacOSの画面キャプチャソースを追加し、画面収録の権限を許可してゲームを選びます。プレビューに台詞が映り、ゲーム音声に合わせてミキサーのメーターが動くか確認してください。
4. OBSのWebSocketサーバーを有効にして、GSMのメイン設定の**OBS**にポートとパスワードを入力します。カード用のメディアを取得するにはOBSのリプレイバッファーも有効にします。
5. そのシーンを選んだままGSMの **OCR** タブを開き、[台詞の領域を指定して読み取りを試します](../features/ocr.md)。内蔵のテキストフックタブはWindowsとLinuxで利用できます。

単語の検索は[初回セッション](../how-to-use-gsm.md)、カードの作成は[Ankiの設定](./yomitan-anki.md)を参照してください。
