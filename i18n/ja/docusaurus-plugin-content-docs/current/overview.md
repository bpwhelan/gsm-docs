---
title: GameSentenceMiner
sidebar_label: 概要
sidebar_position: 1
---

# GameSentenceMiner

GameSentenceMiner（GSM）は、ゲームの台詞を取り込み、辞書で調べたりAnkiカードに追加したりできるデスクトップアプリです。ゲームの文字を検出し、音声や画面の情報と結び付けて学習素材にします。

## 基本の流れ

1. OBSとゲームを接続します。Homeタブのキャプチャウィザードがゲームごとの初期設定を案内します。
2. テキストフックまたはOCRで台詞をGSMに取り込みます。
3. オーバーレイまたはText Feedで単語を調べます。
4. Ankiでカードを作成し、GSMから音声やスクリーンショットなどを追加します。

## まずはこちら

- [GSMのインストール](getting-started/index.md)
- [使い方の手順](how-to-use-gsm.md)
- [AnkiとYomitanの設定](getting-started/yomitan-anki.md)

## テキストを取り込む方法

- **テキストフック**はゲーム内部の台詞を直接読み取ります。Texthook / Agentタブでフックを選び、ゲームごとに保存できます。
- **OCR**はOBSの画面画像から文字を読み取ります。フックがないゲームや焼き込み字幕に便利です。
- **Windows音声認識**は画面に文字がない場合にゲーム音声を文字起こしします。実験的機能で、現在はWindowsのみです。

## その他の機能

[ゲーム自動化](features/autolauncher.md)、[テキスト処理](features/text-processing.md)、[AI機能](features/ai-features.md)、[Longplay](features/longplay.md)、[ゲームの一時停止](features/game-pausing.md)、[統計とゲームライブラリ](features/stats-and-library.md)をご覧ください。

## ヘルプとコミュニティ

- [よくある問題](troubleshooting.md)
- [GSM Discord](https://discord.gg/yP8Qse6bb8)
- [GitHubで問題を報告](https://github.com/bpwhelan/GameSentenceMiner/issues)
