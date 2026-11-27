---
title: "Steam DeckでGSMを使う"
sidebar_label: Steam Deck
sidebar_position: 5
---

# Steam DeckでGSMを使う

## Deck本体で実行する

1. **Steam → 電源 → デスクトップに切り替え**を選び、DiscoverからOBS Studioをインストールします。
2. [Linux版の手順](./linux.md)に従ってDeckにFFmpegを用意し、GSMのAppImageを起動します。OBSを接続してリプレイバッファーを有効にします。
3. デスクトップモードでゲームを起動します。**ホーム**からゲームを追加するか、OBSで既存のシーンを選びます。プレビューで台詞を確認し、[フック](../features/text-hook.md)を選ぶか台詞を囲む[OCR領域](../features/ocr.md)を指定します。
4. 台詞を一行送り、テキストフィードを確認します。Deckのコントローラーで辞書を引く場合は[ゲームパッド操作](../features/overlay-gamepad.md)を設定します。カードを作る場合はDeckで[AnkiとAnkiConnect](./yomitan-anki.md)を起動します。

## PCから配信する

ゲーム、GSM、OBS、AnkiはホストPCで起動し、まずPC側で一行読み取って辞書検索を試します。DeckにMoonlightをインストールし、表示されたPINでホストとペアリングします。ゲームとオーバーレイが一緒に見えるようにデスクトップを配信してください。Moonlightを非Steamゲームとして登録すると、ゲーミングモードから配信を開始できます。[Moonlightのセットアップガイド](https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide)
