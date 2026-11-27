---
title: Windows音声認識
sidebar_label: Windows Speech
sidebar_position: 4
---

# Windows音声認識

画面に字幕がない場合、GSMはゲーム音声から台詞を文字起こしできます。実験的なWindows専用機能です。字幕やテキストフックが使える場合は、通常そちらの方が正確です。

## シーンごとに設定する

1. **設定 → デスクトップ → 一般 → タブとウィンドウ**で、非表示の場合は**Windows Speech**タブを表示します。
2. OBSを接続し、**Windows Speech**タブを開きます。
3. 認識する音声があるOBSシーンを選びます。設定はシーンごとに保存されます。
4. 言語とエンジンを選びます。**Embedded speech**が推奨、**Windows SAPI**は代替です。
5. 設定を保存し、**Start Speech Recognition**を選びます。

組み込みエンジンの初回起動時は約358MBのダウンロードと約492MBの展開が必要になる場合があります。以後はローカルのファイルを再利用します。

認識文字はGSMのテキスト処理を通りText Feedに表示されます。音声認識はOBSシーンの変更時に停止します。

字幕があるゲームは[テキストフック](./text-hook.md)または[OCR](./ocr.md)をお試しください。
