---
title: WindowsにGSMをインストールする
sidebar_label: Windows
sidebar_position: 2
---

# WindowsでのGameSentenceMiner

GSMは主にWindows向けに開発されており、このプラットフォームで最も完全な機能セットを提供します。

## 前提条件

GSMをインストールする前に、以下のソフトウェアがインストールされている必要があります：

### 必須ソフトウェア

1. **Anki** - フラッシュカードアプリケーション
   - [公式サイト](https://apps.ankiweb.net/)からダウンロード
   - **AnkiConnect**アドオンをインストール（`ツール` > `アドオン` > `アドオンを取得...`）
   - コードを使用: **`2055492159`**

2. **Yomitan**（ブラウザ拡張機能） - テキストからAnkiカードを作成するため
   - お使いのブラウザの拡張機能ストアからインストール
   - [Chrome/Edge](https://chromewebstore.google.com/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/yomitan/)

### オプションですが推奨

- **テキストフッカー** - ゲームからテキストを抽出するため
  - [Agent](https://github.com/0xDC00/agent) - ゲームにスクリプトがある場合に推奨。
  - [Textractor](https://github.com/Artikash/Textractor) - 古いゲーム/VNで動作します。
  - [LunaTranslator](https://github.com/HIllya51/LunaTranslator) - 多目的で高度にカスタマイズ可能なツールで、Textractorのように機能しますが、多くのウイルスの誤検知が伴います。自己責任で使用してください。
  - [LunaHook](https://github.com/AuroraWright/LunaTranslator/releases/tag/LunaHook) - LunaTranslatorから多くの余分な機能を取り除いたもの。

## インストール

1. **GSMをダウンロード**
   - [GitHubの最新リリース](https://github.com/bpwhelan/GameSentenceMiner/releases/latest)にアクセス
   - Windows用の`.exe`インストーラーをダウンロード

2. **インストーラーを実行**
   - ダウンロードした`.exe`ファイルをダブルクリック
   - インストールウィザードに従います
   - GSMは`C:\Users\{YOUR_USER}\AppData\Local\Programs\GameSentenceMiner\`にインストールされます

3. **初回起動**
   - 初回実行時、GSMは自動的にPython仮想環境をセットアップします
   - このプロセスには数分かかる場合があります
   - 完了すると、メインのGSMウィンドウが表示されます

## OBSの設定

GSMはOBS Studioを使用してゲームの映像、スクリーンショット、音声をキャプチャします。これらの設定の多くは自動的に設定されるはずですが、以下を確認・設定してください：

### 1. WebSocketサーバーを有効にする

1. OBSで、`ツール` → `WebSocketサーバー設定`に移動します
2. **WebSocketサーバーを有効にする**をチェックします
3. **サーバーポート**を`7274`（GSMのデフォルト）に設定します
4. **認証を有効にする**のチェックを外します（またはパスワードをメモしてGSMの設定に入力します）
5. **OK**をクリックして保存します

### 2. リプレイバッファを有効にする

リプレイバッファを使用すると、GSMはカード作成時に音声やスクリーンショットを遡って保存できます。

1. `設定` → `出力`に移動します
2. **リプレイバッファ**セクションに移動します。
3. **リプレイバッファを有効にする**をチェックします
4. **最大リプレイ時間**を少なくとも**300秒**（5分推奨）に設定します
5. **OK**をクリックして保存します

:::tip
GSMはゲームのアクティビティを検出すると、リプレイバッファを自動的に開始/停止できます。手動で開始する必要はありません。
:::

### 3. 最初のゲームを設定する

GSMには、ゲーム用のOBSシーンを設定するのに役立つウィザードが含まれています：

1. GSMのメインウィンドウで、**ホーム**タブに移動します
2. ドロップダウンからゲームを選択し、**ウィンドウキャプチャ**または**ゲームキャプチャ**のいずれかをクリックします
    - **ウィンドウキャプチャ**は互換性が高いですが、一部のゲームでパフォーマンスの問題が発生する可能性があります
    - **ゲームキャプチャ**はより効率的ですが、すべてのゲームで機能するとは限りません
3. これが最初のシーンである場合は、「はい」と答えてGSMに自動シーン切り替えを作成させます。
4. OBSシーンが正しく作成および設定されていることを確認します。

または、OBSで手動でシーンを作成することもできます：
1. **シーン**の下にある**+**ボタンをクリックします
2. **ウィンドウキャプチャ**または**ゲームキャプチャ**ソースを追加します
3. ゲームウィンドウを選択します
4. **音声ミキサー**で音声がキャプチャされていることを確認します

## AnkiConnectの設定

1. Ankiを開きます
2. `ツール` → `アドオン`に移動します
3. **AnkiConnect**を選択します
4. **設定**をクリックして設定を確認します：

```json
{
    "enabled": true,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765
}
```

5. 変更を加えた場合はAnkiを再起動します

## テキストフッカーの接続

GSMは、クリップボード監視またはWebSocket接続を介してテキストフッカーからテキストを受信できます。

### 方法1：Websocket（推奨）

GSMは、ポート`9001`（[Agent](https://github.com/0xDC00/agent)）、`6677`（[textractor-websocket](https://github.com/sadolit/textractor-websocket)）、および`2333`（[Luna Translator](https://github.com/HIllya51/LunaTranslator)）でWebsocket経由でテキストを受信するように事前設定されています。これらのポートを変更する必要がある場合は、GSMの設定で行うことができます。

1. GSMで、`設定` → `一般`に移動します
2. **WebSocket**を有効にします
3. GSMに接続するようにテキストフッカーを設定します：
   - **Agent**: Websocketを有効にし、WebSocket URLが`ws://localhost:9001`に設定されていることを確認します
   - **Textractor**: [textractor-websocketプラグイン](https://github.com/sadolit/textractor-websocket)を使用します
   - **LunaTranslator**: `コア設定` -> `その他` -> `ネットワークサービス` -> `有効`にし、ポートが`2333`に設定されていることを確認します

### 方法2：クリップボード監視

1. GSMで、`設定` → `一般`に移動します
2. **クリップボード監視**を有効にします
3. テキストをクリップボードにコピーするようにテキストフッカーを設定します
   - **Agent**: 「自動コピー」を有効にします
   - **Textractor**: 「クリップボードに自動コピー」を有効にします
   - **LunaTranslator**: `コア設定` -> `クリップボード` -> `テキストを自動出力`

## 確認

すべてが機能していることを確認するには：

1. **OBS接続**: ホームタブを確認します - OBSステータスインジケーターが緑色である必要があります
2. **Anki接続**: Ankiステータスインジケーターも緑色である必要があります
3. **テキスト受信**: テキストフッカーとゲームを開始します - テキストがGSMのテキストフッカーページに表示されるはずです（デフォルトでは`localhost:55000/texthooker`でアクセス可能）

## 次のステップ

- 自動翻訳に[AI機能](/docs/guides/ai-features)を使用する方法を学びます
- 問題が発生した場合は[トラブルシューティング](/docs/troubleshooting)にアクセスしてください

## ヘルプの入手

問題が発生した場合：
- [Discordサーバー](https://discord.gg/yP8Qse6bb8)に参加する
- [トラブルシューティング](/docs/troubleshooting)ページを確認する
- [GitHub](https://github.com/bpwhelan/GameSentenceMiner/issues)でissueを開く
