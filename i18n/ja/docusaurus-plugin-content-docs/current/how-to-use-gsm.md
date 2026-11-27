---
title: GSMの使い方
sidebar_label: キャプチャを設定
sidebar_position: 1
---

import ImageFrame from '@site/src/components/ImageFrame';

# GSMの使い方

インストール後、ゲームの台詞をGSMに取り込み、オーバーレイで辞書を引き、Ankiカードにゲームの情報を追加する手順です。順番に進めても、必要な項目だけ読んでも構いません。

## 始める前に

- GSM、OBS、Anki、AnkiConnectをインストールします。[インストールガイド](./getting-started/index.md)
- 初回のキャプチャ時はOBSとAnkiを起動しておきます。
- Yomitanを使う場合は、[AnkiとYomitanの設定](./getting-started/yomitan-anki.md)も確認します。

## 1. ゲームからテキストを取得する

GSMの**Home**タブから **Add a game** を選びます。登録済みのゲームは、ゲーム名の横の **⋯ → Run Capture Wizard** から設定できます。ゲーム画面を確認し、テキストソースを試し、このゲームで自動起動する機能を選べます。

<ImageFrame src="/img/guides/capture-wizard.png" alt="GSMのキャプチャウィザード" caption="キャプチャ、テキストフック、OCR、ゲームごとの起動方法を設定します。" />

使える場合はテキストフックを優先してください。読み取れるフックがない場合は、画面に表示されている台詞をOCRで取得します。テキストが表示されず音声のみの場合は音声認識を使います。外部ツールの出力をGSMに送る方法もあります。

| 方法 | 使う場面 | 設定方法 |
|---|---|---|
| **テキストフック（推奨）** | ゲームが対応フックを提供している場合。特にビジュアルノベルでは、きれいな台詞とタイミングを取得しやすい方法です。 | ウィザードで、対応スクリプトがある場合は**Agent**を試し、次に**Luna**または**Textractor**を確認します。**MAGES**は実験的で、対応作品のみです。完全な台詞が出るフックを選びます。[テキストフックの設定](./features/text-hook.md)を参照してください。 |
| **OCR（通常の代替手段）** | 使えるフックがなく、台詞や字幕がゲーム画面に見えている場合。ハードサブ動画にも使えます。 | ウィザードまたは**OCR**タブで台詞の範囲を選び、サンプルスキャンを確認します。[OCRの設定](./features/ocr.md)を参照してください。 |
| **Windows音声認識** | 台詞が音声で流れるものの、画面に読み取れる文字がない場合。 | 任意の**Windows Speech**タブを表示し、OBSシーン、言語、エンジンを選んで開始します。実験的なWindows専用機能です。[Windows音声認識](./features/windows-speech-recognition.md)を参照してください。 |
| **外部テキスト入力** | 別のアプリがすでに台詞をGSMへ送っている場合に使います。 | アプリがWebSocketで送る場合はGSMのWebSocket入力を、台詞をクリップボードへコピーする場合はクリップボード入力を選びます。**Settings → General**で入力元を設定します。[設定](./settings.md)を参照してください。 |

まず選択中のゲームでウィザードを使います。フックでは完全で自然な台詞が出るものを保存してください。使えるフックがなければOCRを選び、自動キャプチャを有効にする前にサンプルを確認します。外部入力は、別のアプリが台詞をGSMへ送る場合に使います。Agent、Luna、Textractorは上のテキストフックに含まれます。

キャプチャが開始すると、受信した台詞がGSMの**Text Feed**に表示されます。文が最後まで取得され、正しい言語で表示されていることを確認してください。

テキストフックが台詞を送る場合でも、オーバーレイは単語の画面上の位置を調べるためにOCRを使うことがあります。この位置検出は、OCRをテキストソースとして使う場合とは別です。詳しくは[オーバーレイ](./features/overlay.md)をご覧ください。

## 2. オーバーレイを設定する

Homeタブから **Overlay Settings** を開き、オーバーレイを起動します。画面上の単語にマウスを合わせると、組み込みのYomitanで辞書を引けます。

<ImageFrame src="/img/desktop/overlay-overview.png" alt="現在のGSM Overlay Settings画面" caption="HomeのOverlay Settingsからキャプチャや表示、操作方法を設定します。" />

初回はオーバーレイ内のYomitan設定を開き、辞書をインポートして有効にします。ブラウザー版Yomitanとは別に保存されます。ゲームに新しい台詞を表示し、単語にカーソルを合わせて検索できることを確認してください。

オーバーレイ内のYomitanからAnkiカードを作る場合は、そのYomitan側でもAnki接続とノートタイプを設定します。ノートタイプとフィールドは[AnkiとYomitanの設定](./getting-started/yomitan-anki.md)を参照してください。

設定や画面上の文字の配置は[オーバーレイ](./features/overlay.md)、ゲームパッド操作は[Overlay Gamepad Navigation](./features/overlay-gamepad.md)をご覧ください。

## 3. Ankiカードを作成する

AnkiConnectが動作中であることをHomeタブで確認します。Yomitanなどから単語をAnkiに追加すると、GSMがカードと直前のゲーム台詞を照合し、設定した音声やスクリーンショットなどを追加します。

<ImageFrame src="/img/desktop/card-ja.png" alt="現在のGSMカード確認画面" caption="カード確認画面で、台詞と対応するメディアを確認できます。" />

ノートタイプやフィールド名は **Settings → Mining → Anki** で確認します。テンプレートの設定は[AnkiとYomitanの設定](./getting-started/yomitan-anki.md)、追加できるメディアは[Anki Enhancement](./features/anki-enhancement.md)をご覧ください。

## 初回セッションのチェック

- OBSがゲーム画面を映し、GSMのHomeタブにOBS接続済みと表示される。
- 選んだテキストソースから台詞がText Feedに届く。
- オーバーレイが起動し、Yomitanで単語を調べられる。
- AnkiConnectが接続され、試しに作ったカードへ必要なフィールドが追加される。

問題が起きた場合は[よくある問題](./troubleshooting.md)か各機能ガイドをご覧ください。
