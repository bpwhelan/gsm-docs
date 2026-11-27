---
title: GSMのトラブルシューティング
sidebar_label: よくある問題
sidebar_position: 9
---

# よくある問題

まずGSMの**Home**タブにある接続状態を確認します。OBSやAnkiの接続問題と、テキストの取り込みやカード照合の問題を切り分けやすくなります。

## OBSが未接続、または画面が黒い

- 先にOBSを起動し、GSMのHomeタブで接続を確認します。
- **Settings → OBS**でWebSocket接続先を確認します。
- OBSでゲームを映すシーンとキャプチャソースを確認します。
- **Home → ゲームを選択 → ⋯ → Run Capture Wizard**で映像を確認します。黒い場合はキャプチャ方法やゲームの表示モードを変えてみます。

## GSMにテキストが届かない

- フックの場合は**Texthook / Agent**を開いてエンジンを起動し、フックを選んでプレビューを確認します。[テキストフック](./features/text-hook.md)
- OCRの場合はOCRタブで範囲を選び、手動スキャンの結果を確認します。[OCR](./features/ocr.md)
- [Text Feed](http://localhost:7275/texthooker)を開いて受信行を確認します。
- 外部フックを使う場合は、WebSocketまたはクリップボードの設定が一致しているか確認します。

## OCRの文字が途中で切れる

OCR範囲が台詞全体を含み、言語が合っているか確認します。文字が時間をかけて表示されるゲームでは**Text Appears Instantly**をオフにします。メニューが混ざる場合は除外またはSecondary領域を追加します。

## オーバーレイが表示されない、辞書検索できない

- Homeタブからオーバーレイを起動し、**Overlay Settings**の表示、キャプチャ、操作項目を確認します。
- ブラウザー版とは別に、オーバーレイの組み込みYomitanへ辞書をインポートします。
- OBSが実際のゲームを映しているか確認します。排他フルスクリーンで不安定な場合はボーダーレスやウィンドウ表示を試します。

## Ankiカードにメディアがない、または文が違う

- Ankiを起動し、Homeタブで接続済みと表示されていることを確認します。
- **Settings → Mining → Anki**でノートタイプとフィールド対応を確認します。
- Ankiの文章とText Feedの行が一致しているか確認します。必要に応じてYomitanの文区切りを**Newlines only**にします。[不完全な文を修正](./guides/incomplete-sentences.md)
- 音声や画像がない場合は、OBSの音声・画面キャプチャとReplay Bufferを確認します。

## AI翻訳や説明が失敗する

**設定 → マイニング → AI・翻訳**でプロバイダーとモデルを確認し、取り込んだ台詞で**翻訳**を試します。Ankiに出力がない場合は対象フィールドの設定も確認します。

解決しない場合は[GSM Discord](https://discord.gg/yP8Qse6bb8)または[GitHubのIssue](https://github.com/bpwhelan/GameSentenceMiner/issues)をご利用ください。ログを共有する場合は、匿名化されたエクスポートを確認してください。
