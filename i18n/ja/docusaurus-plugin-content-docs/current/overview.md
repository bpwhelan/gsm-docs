---
title: GameSentenceMinerとは？
sidebar_label: 概要
sidebar_position: 1
---

# GameSentenceMinerとは？

GameSentenceMinerは、ビデオゲームやビジュアルノベルを通じて言語学習を強化するために設計された強力なアプリケーションです。ゲームセッションからコンテキスト豊富な素材を自動的にキャプチャすることで、GSMはすべてのゲームを没入型の言語学習体験に変えます。

:::tip クイックリンク
- **ショートデモ**: [まずはこちらをご覧ください](https://www.youtube.com/watch?v=FeFBL7py6HY)
- **インストールガイド**: [完全なビデオチュートリアル](https://www.youtube.com/watch?v=sVL9omRbGc4)
- **Discordコミュニティ**: [参加する](https://discord.gg/yP8Qse6bb8)
:::

## 主な機能

### Ankiカードの強化

GSMは、豊富なコンテキスト情報でAnkiカードを大幅に強化します。

*   **音声**: テキストに対応するセリフの音声を自動的に録音します。

*   **スクリーンショット**: セリフが話された瞬間のゲーム画面をキャプチャします。

*   **複数行対応**: GSM独自のTexthookerを使用することで、複数行のテキストとそれに付随する音声を一度にキャプチャできます。

*   **AI翻訳**: AIを統合し、キャプチャした文章の翻訳を素早く提供します。カスタムプロンプトにも対応しています。（オプション、ご自身のAPIキーが必要です）

#### ゲームでの使用例（音声あり）

<video controls="controls" width="100%">
  <source src="https://github.com/user-attachments/assets/df6bc38e-d74d-423e-b270-8a82eec2394c" type="video/mp4" />
  ご利用のブラウザはビデオタグをサポートしていません。
</video>

---

#### ビジュアルノベルでの使用例（音声あり）

<video controls="controls" width="100%">
  <source src="https://github.com/user-attachments/assets/ee670fda-1a8b-4dec-b9e6-072264155c6e" type="video/mp4" />
  ご利用のブラウザはビデオタグをサポートしていません。
</video>

---

### OCR

GSMは[OwOCR](https://github.com/AuroraWright/owocr/)のフォークを実行し、フックが利用できないゲームからでも正確なテキストキャプチャを提供します。以下は、GSMが標準のOwOCRに加えた改良点です。

*   **簡単なセットアップ**: GSMに管理されたPythonインストール機能により、数回ボタンをクリックするだけでセットアップが完了します。

*   **除外領域の設定**: OCRを実行する領域を選択する代わりに、OCRから除外する領域を選択できます。これは、ゲーム内に固定のUIがあり、テキストが画面の様々な場所にランダムに表示される場合に便利です。

*   **2パスOCR**: API呼び出しを減らし、出力をクリーンに保つため、GSMは「2パス」OCRシステムを搭載しています。ローカルOCRが常に実行され、画面上のテキストが安定した時点で、より高精度な2回目のスキャンが実行され、その結果がクリップボードやWebSocketに送信されます。

*   **一貫した音声タイミング**: 2パスシステムにより、特殊なオフセットやハックを使わなくても、正確なタイミングで録音された音声をAnkiに取り込むことができます。

*   **多言語対応**: 標準のOwOCRは日本語にハードコードされていますが、GSMでは様々な言語を使用できます。


<video controls="controls" width="100%">
  <source src="https://github.com/user-attachments/assets/07240472-831a-40e6-be22-c64b880b0d66" type="video/mp4" />
  ご利用のブラウザはビデオタグをサポートしていません。
</video>

---

### オーバーレイ

GSMは、画面上でYomitanによる辞書検索を可能にするオーバーレイ機能も備えています。オーバーレイが有効になっている場合、GSMに任意のソースからテキストイベントが入ってくるたびに、画面を一度スキャンします。その後、ゲーム内の実際の文字にカーソルを合わせることで、Yomitanでの検索やマイニングが可能になります。

https://youtu.be/m1MweBsHbwI

![l0qGasWkoH](https://github.com/user-attachments/assets/c8374705-efa0-497b-b979-113fae8a1e31)

<!--### ゲームランチャー機能（開発中）

これはおそらく私が最も力を入れていない機能ですが、私のように面倒くさがりな方には役立つかもしれません。

*   **起動**: GSMから直接ゲームを起動でき、セットアッププロセスを簡略化します。

*   **フック**: ゲームへのフック（Agent使用）プロセスを効率化します。

この機能は、ゲームの起動と（将来的には）フックのプロセスを簡素化し、ワークフロー全体をより効率的にします。

<img width="2560" height="1392" alt="GameSentenceMiner_1zuov0R9xK" src="https://github.com/user-attachments/assets/205769bb-3dd2-493b-9383-2d6e2ca05c2d" />-->
---

### 統計

GSMには、現在**32種類のグラフ**を備えた統計ページがあり、充実したデータを視覚化できます。

![stats](../../../../docs/assets/overview2.png)

この統計は、ただ見た目が良いだけではありません。

あなたの成長を助けるために設計されています。

目標を設定し、それを達成するために毎日必要なタスクを正確に確認できます：

![stats](../../../../docs/assets/goals2.png)

読んだすべての漢字を、好きな順序で表示できます：

![stats](../../../../docs/assets/kanji_grid2.png)

そして、それらをクリックすると、その漢字を含むすべての文章を見ることができます：

![stats](../../../../docs/assets/search2.png)

Ankiを使っていますか？よく読む漢字だけど、まだAnkiに入っていない漢字を見つけられます：

![stats](../../../../docs/assets/anki2.png)

高度なツールで、好きな方法でデータをクリーンアップできます。

![stats](../../../../docs/assets/db_management2.png)

これらの統計は、ただ見た目を良くするためだけでなく、以下のような質問に答えるために設計されています：
* 楽しさと学習の両方を最大化できるゲームは何か？
* 夕方と朝、どちらの方が読解力が高いか？
* この言語で上達しているか？
* 目標を達成するために、どのくらいイマージョンすべきか？

## 基本要件

GSMを始めるには、次のものが必要です。

*   **Ankiカード作成ツール**: [Yomitan](https://github.com/yomidevs/yomitan)（推奨）、[JL](https://github.com/rampaa/JL)など。
*   **テキスト抽出方法**: [Agent](https://github.com/0xDC00/agent)、[Textractor](https://github.com/Artikash/Textractor)、[LunaTranslator](https://github.com/HIllya51/LunaTranslator)、またはGSMの内蔵OCR
*   **対象言語のゲーム**
*   **OBS Studio** - 音声とスクリーンショットのキャプチャ用
*   **Anki** - フラッシュカードの作成とレビュー用

## スタートガイド

さあ、始めましょう！詳細なインストール手順については、お使いのプラットフォームの[スタートガイド](/docs/getting-started)をご覧ください。

## GSMの仕組み

GSMは、複数のツールを連携させて、コンテキストを意識した豊富なフラッシュカードを作成します。

1.  **テキストイベントの検出**: テキストフッカー（Agent、Textractor、OCR）がゲームからテキストをキャプチャし、セリフの開始をマークします。
2.  **音声キャプチャ**: GSMは音声アクティビティ検出（VAD）を使用して、音声の開始と終了を自動的に検出します。
3.  **スクリーンショットキャプチャ**: テキストイベントの瞬間に、GSMはOBSからスクリーンショットを保存します。
4.  **カードの強化**: Yomitan経由でAnkiカードを作成すると、GSMは自動的に音声クリップとスクリーンショットを追加します。

このプロセスは、対応する音声をキャプチャするために正確にタイミングが合ったテキストイベントに依存しています。GSMは、さまざまなゲームやテキストソースに対応するための広範な設定を提供し、さまざまなセットアップで一貫した結果を保証します。

## サポートとコミュニティ

問題が発生した場合や質問がある場合：

*   リアルタイムでヘルプを得るには、[Discordサーバー](https://discord.gg/yP8Qse6bb8)に参加してください
*   一般的な問題については、[トラブルシューティングガイド](/docs/troubleshooting)を確認してください
*   バグレポートについては、[GitHub](https://github.com/bpwhelan/GameSentenceMiner/issues)でissueを開いてください

## 謝辞

*   [OwOCR](https://github.com/AuroraWright/owocr) - GSMに統合させていただいた、その優れたOCR実装に感謝します。

*   [chaiNNer](https://github.com/chaiNNer-org/chaiNNer) - Electronアプリ内にPythonをインストールするというアイデアに感謝します。

*   [OBS](https://obsproject.com/) と [FFMPEG](https://ffmpeg.org/) - これらのツールなしではGSMは実現不可能でした。

*   [Renji's Texthooker](https://github.com/Renji-XD/texthooker-ui)

*   https://github.com/Saplling/transparent-texthooker-overlay

*   [exSTATic](https://github.com/KamWithK/exSTATic) - GSMの統計機能のインスピレーション

*   [Kanji Grid](https://github.com/Kuuuube/kanjigrid)

*   [Jiten.moe（メタデータ提供）](https://jiten.moe)

*   [rtr46](https://github.com/rtr46)による[MeikiOCR](https://github.com/rtr46/meikiocr)。GSMオーバーレイよりもシンプルなものが必要な場合は、彼のクールなプロジェクト[Meikipop](https://github.com/rtr46/meikipop)をチェックしてください。

## 寄付

もしこのプロジェクトや他の私のプロジェクトが役に立ったと感じたら、[GitHub Sponsors](https://github.com/sponsors/bpwhelan)または[Ko-fi](https://ko-fi.com/beangate)を通じて私の活動を支援していただけると幸いです。