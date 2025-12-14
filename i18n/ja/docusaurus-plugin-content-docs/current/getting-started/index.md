---
title: GSMを始めよう
sidebar_label: 概要
sidebar_position: 1
---

# GSMを始めよう

GameSentenceMiner（GSM）へようこそ！このガイドは、迅速にセットアップを完了し、利用を開始するのに役立ちます。

## クイックスタートビデオ

以下のインストールチュートリアルを参照すると、セットアップ手順を実際に確認できます：

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sVL9omRbGc4" title="GSM Installation Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 必要なもの

プラットフォームに関わらず、以下のものが必要です：

1. **ゲーム** をプレイするためのゲーム
2. **Yomitan（ブラウザ拡張）** - テキストからカードを作成します。インストール手順は次を参照してください: [Yomitan Getting Started](https://yomitan.wiki/getting-started/)
3. **[Anki](https://apps.ankiweb.net/)** - フラッシュカードの作成と復習に使用します。Yomitanのテンプレートや設定については、`yomitan-anki.md`を参照してください。
4. **GSMへテキストを取り込む方法**（いずれか）
   - [Agent](https://github.com/0xDC00/agent) - [Video Tutorial](https://www.youtube.com/watch?v=fMWJYr_PcRE)
   - [LunaTranslator](https://github.com/HIllya51/LunaTranslator) - [Video Tutorial](https://www.youtube.com/watch?v=ysZBI2tcxMc)
   - [Textractor](https://github.com/Artikash/Textractor) - [Video Tutorial](https://www.youtube.com/watch?v=sEIYGTEuciA)
   - GSMの組み込みOCR

## GSMのインストール（簡易）

GSMは複数のオペレーティングシステムで利用できます。特定のインストール手順については、プラットフォーム別のページを参照してください：

- **[Windows](/docs/getting-started/windows)** - 全機能サポート、推奨プラットフォーム
- **[macOS](/docs/getting-started/macos)** - 実験的サポート
- **[Linux](/docs/getting-started/linux)** - 実験的サポート

## GSMの仕組み

ワークフローを理解することは、問題のトラブルシューティングに役立ちます：

1. **テキストイベント** - テキストフッカー（Agent, Textractor, OCR）がゲームからテキストを検出します
2. **音声キャプチャ** - GSMはこれをボイスラインの開始としてマークし、監視を開始します
3. **音声検出** - 音声が終了すると（VADによって検出）、GSMはオーディオクリップを保存します
4. **スクリーンショット** - テキストイベントの瞬間にOBSからスクリーンショットがキャプチャされます
5. **カード作成** - Yomitanを使用してテキスト内の単語を検索し、Ankiカードを作成します
6. **強化** - GSMは音声、スクリーンショット、およびオプションのAI翻訳をカードに自動的に追加します

## 基本的なワークフロー

セットアップが完了したら、これが典型的なマイニングセッションです：

1. OBSを起動し、ゲームキャプチャシーンを設定します
2. GSMを開始します
3. テキストフッカーを起動します（使用している場合）
4. ゲームを開始します
5. 通常通りプレイし、未知の単語に遭遇した場合：
   - GSMのテキストフッカーページでYomitanを使用して検索します
   - Ankiカードを作成します
   - GSMは音声とスクリーンショットで自動的に強化します

## 次のステップ

インストール後：

- 自動翻訳のために[AI機能](/docs/guides/ai-features)を設定します
- 問題が発生した場合は[トラブルシューティング](/docs/troubleshooting)を確認します

## コミュニティとサポート

- **Discord**: [コミュニティに参加](https://discord.gg/yP8Qse6bb8)
- **GitHub**: [問題を報告または貢献する](https://github.com/bpwhelan/GameSentenceMiner)
- **ビデオ**: [デモとチュートリアルを見る](https://www.youtube.com/watch?v=FeFBL7py6HY)
