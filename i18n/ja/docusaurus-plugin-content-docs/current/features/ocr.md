---
title: OCRの設定
sidebar_label: OCR
sidebar_position: 3
---

import ImageFrame from '@site/src/components/ImageFrame';

# OCRの設定

OCRはOBSが取り込んだゲーム画面から台詞を認識します。使えるテキストフックがないゲーム、焼き込み字幕、画面の特定範囲を取り込みたいときに使います。メイン入力にも、フックが読み落とした文字を補う用途にも使えます。

## OCR範囲を選ぶ

1. OBSを接続し、設定するゲームのシーンを選びます。
2. GSMの**OCR**タブで、**Capture → Open Area Selector**を選びます。
3. OBSの現在のフレームを取り込むか画像を開き、ゲームに合った範囲を指定します。
4. 範囲を保存します。設定はゲームまたはシーンに関連付けられます。

<ImageFrame src="/img/features/ocr/area-selector.png" alt="GSMの現在のOCR範囲セレクター" caption="OBSのフレームや画像を使って、複数種類の範囲を設定できます。" />

| 範囲 | 用途 |
|---|---|
| **Normal** | 自動で読み取る台詞 |
| **Exclusion** | HUDなど、読み取りから除外する領域 |
| **Secondary** | 手動またはメニュー用スキャンで読み取る文字 |
| **Exclusive** | 他のNormal領域より優先する領域 |
| **Black hole** | メニューなどを検出したときにスキャン結果を無効にする領域 |

範囲を小さくし、必要がなければ重ねないようにします。**Import areas**と**Export areas**で設定を共有・保存できます。

## OCRの動作を設定する

**Capture**でゲームごとの範囲を、**Recognition**でエンジンやスキャンを設定します。まずは初期設定を試し、一度に一項目だけ変更してください。

<ImageFrame src="/img/desktop/ocrframe-ja.png" alt="ダークテーマのGSM OCR設定" caption="Captureではゲームごとの範囲と現在のフレームを確認できます。" />

- **Autostart OCR**で、このゲームのOCRを自動起動するか決めます。設定中は手動スキャンから始めます。
- **Text Appears Instantly**は、台詞がすぐに表示されるか、時間をかけて表示されるかを指定します。タイプライター表示の場合はオフにします。
- **Recognition**では**Stability OCR**が文字の変化を確認し、**Main OCR**が最終的な認識結果を作ります。**Two-pass**では安定性確認の後に精度の高い読み取りを行います。
- 言語、スキャン間隔、画像品質、ふりがなフィルター、クリップボード出力、改行、ショートカットはOCR設定にあります。利用できるエンジンはOSやインストール済みコンポーネントによって異なります。

## 動作を確認する

1. OBSで台詞が表示されているゲームシーンを開きます。
2. OCRタブから手動スキャンを実行し、結果を確認します。
3. 台詞が途中で切れる場合やUI文字を拾う場合は、範囲や**Text Appears Instantly**を調整します。
4. 認識結果が使える状態になってから**Autostart OCR**を有効にします。
5. Text Feedに台詞が届くことを確認し、[オーバーレイ](./overlay.md)や[Anki Enhancement](./anki-enhancement.md)へ進みます。

文字がゆっくり表示される場合は、最終スキャンを遅らせるか即時表示の設定をオフにします。認識されない場合は、OBSシーン、範囲、言語、スキャンログを確認してください。

:::tip
テキストフックを使っている場合も、オーバーレイは画面上の単語位置を探すためにOCRを使います。詳細は[オーバーレイ](./overlay.md)をご覧ください。
:::
