---
title: AI機能
sidebar_label: AI機能
sidebar_position: 7
---

import ImageFrame from '@site/src/components/ImageFrame';

# AI機能

GSMは台詞の翻訳や説明、前後の会話の要約を行い、任意でAIの出力をAnkiに追加できます。ホスト型プロバイダー、ローカルモデル、翻訳専用のDeepLを利用できます。このページでは、アカウントやローカルサーバーの準備からGSMへの接続まで説明します。

## GSMでプロバイダーを接続する

**設定 → マイニング → AI・翻訳**を開きます。プロバイダーを選び、下記の設定手順に従ってから、必要なキー、モデル、URLを入力します。設定は自動保存されます。

<ImageFrame src="/img/desktop/ai-ja.png" alt="GSMのAIプロバイダーと認証情報の設定" />

1. 使いたいプロバイダーを選びます。設定画面に、そのプロバイダーのアカウント作成やAPIキー、料金情報へのリンクが表示されます。
2. 下記の手順でAPIキーを作成するかローカルモデルを準備し、必要な項目を入力します。ホスト型サービスは対応するAPIキー欄へキーを貼り付けます。ローカルサービスは先にサーバーを起動し、サーバーで利用できるモデルを選びます。
3. ゲーム台詞の**Translate**または**Explain**を試します。これらの機能だけを使う場合、**翻訳を Anki に追加**を有効にする必要はありません。

モデル名、利用条件、上限、料金は変更されることがあります。現在プロバイダーが提供しているモデルを選び、自動リクエストを有効にする前に料金と利用制限を確認してください。

## ホスト型の文章生成プロバイダー

### Google Gemini

1. Googleアカウントで[Google AI Studio](https://aistudio.google.com/apikey)にサインインし、Gemini APIの利用規約に同意します。
2. API Keysページを開きます。新しいユーザーにはプロジェクトとキーがすでに作成されている場合があります。既存のGoogle Cloudプロジェクトが表示されない場合は、先に**Projects**からインポートします。
3. **Create API key**を選び、使用するプロジェクトのキーを作成してコピーします。
4. GSMで**Gemini**を選び、**Gemini API Key**に貼り付け、現在利用可能なGeminiの文章モデルを選びます。

Googleの[APIキーガイド](https://ai.google.dev/gemini-api/docs/api-key)、[モデル料金](https://ai.google.dev/gemini-api/docs/pricing)、[対応地域](https://ai.google.dev/gemini-api/docs/available-regions)をご覧ください。無料枠や利用制限はモデル、プロジェクト、地域によって異なります。

### Groq

1. [GroqCloud](https://console.groq.com/keys)にサインインします。アカウントがなければ作成します。
2. **API Keys**を開き、**Create API Key**を選びます。キーに名前を付けて作成し、表示されたキーをコピーします。
3. GSMで**Groq**を選び、**Groq API Key**に貼り付け、アカウントで利用できる文章モデルを選びます。

最新の[モデル一覧](https://console.groq.com/docs/models)と[レート制限](https://console.groq.com/docs/rate-limits)をご確認ください。無料アカウントの上限はモデルごとに異なり、変更される場合があります。

### Z.ai

この設定は、すでにZ.aiを選択しているプロファイルで使用できます。

1. [Z.ai](https://z.ai/manage-apikey/apikey-list)にサインインするか、アカウントを作成します。
2. **API Keys**を開き、新しいキーを作成してコピーします。
3. 既存のZ.aiプロファイルで**Z.ai API Key**に貼り付け、利用可能なモデルを選びます。

GSMはZ.aiの標準APIを利用します。標準APIを使うために別のCoding Plan契約は必要ありません。モデルや無料利用の可否、応答速度は変わることがあるため、最新の[料金とモデル一覧](https://docs.z.ai/guides/overview/pricing)をご確認ください。

### OpenAI、OpenRouter、その他の互換API

GSMの**OpenAI**プロバイダーは、OpenAIとOpenAI互換APIを提供するサービスに接続できます。

#### OpenAI

1. [OpenAI API Platform](https://platform.openai.com/api-keys)にサインインするか、アカウントを作成します。
2. **API Keys**を開いてシークレットキーを作成し、コピーします。利用状況に応じてAPI Platform側で請求設定が必要です。
3. GSMで**OpenAI**を選び、次の項目を入力します。
   - **OpenAI API URL:** `https://api.openai.com/v1`
   - **OpenAI Model:** APIアカウントで現在利用できるモデルID
   - **OpenAI API Key:** 作成したキー

ChatGPTのサブスクリプションとAPI Platformの請求は別々に管理されます。[OpenAI APIの請求ガイド](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)と[API料金](https://platform.openai.com/docs/pricing)をご確認ください。

#### OpenRouter

1. [OpenRouter](https://openrouter.ai/)のアカウントを作成するか、サインインします。
2. [API Keys](https://openrouter.ai/settings/keys)を開き、キーを作成してコピーします。
3. GSMで**OpenAI**を選び、次の項目を入力します。
   - **OpenAI API URL:** `https://openrouter.ai/api/v1`
   - **OpenAI Model:** OpenRouterに表示され、アカウントで利用できるモデルID
   - **OpenAI API Key:** OpenRouterで作成したキー

互換エンドポイントとモデルID形式は[OpenRouter Quickstart](https://openrouter.ai/docs/quickstart)をご覧ください。モデルの最新料金と利用可否はOpenRouterのアカウント画面で確認します。

#### その他のOpenAI互換サービス

そのサービスでAPIキーを作成し、サービスの説明にある**ベースURL**と**モデルID**をGSMのOpenAI項目に入力します。ローカルサーバーも利用できます。[LM Studio](#lm-studio)をご覧ください。URLは通常`/v1`で終わりますが、サービスが案内するURLを使ってください。

## ローカルモデル

### Ollama

ローカルのOllamaはアカウントやAPIキーを必要としません。

1. [Ollama](https://ollama.com/download)をインストールします。
2. [Ollamaライブラリ](https://ollama.com/library)から文章モデルを選び、Ollamaでダウンロードします。ターミナルを使う場合は`ollama pull MODEL_NAME`を実行し、`MODEL_NAME`をライブラリにあるモデル名に置き換えます。
3. Ollamaサーバーを起動します。初期設定のURLは`http://localhost:11434`です。
4. GSMで**Ollama**を選び、URLが異なる場合は入力し、ダウンロード済みのモデルを選びます。必要ならバックアップモデルも指定できます。

Ollama Cloudのモデルを使う場合は、まずOllamaにサインインします。`ollama signin`を実行し、Ollamaが対応するクラウドモデルを選択します。GSMは引き続きローカルOllamaサーバーへ接続します。[Ollama Cloudモデル](https://ollama.com/blog/cloud-models)をご覧ください。

### LM Studio

LM Studioはローカルモデルサーバーを実行できます。通常のローカル利用にプロバイダーアカウントは必要ありません。

1. [LM Studio](https://lmstudio.ai/)をダウンロードしてインストールします。
2. 文章モデルを検索してダウンロードし、読み込みます。
3. **Developer**タブを開き、**Start server**を有効にします。[LM Studioのローカルサーバーガイド](https://lmstudio.ai/docs/developer/core/server)を参照してください。
4. GSMで**LM Studio**を選び、LM Studioに表示されるサーバーURLと読み込み済みモデルIDを入力します。サーバー認証を有効にした場合だけAPIキーも入力します。

## DeepL（翻訳のみ）

DeepLはGSMで翻訳に使えますが、台詞の説明、文法解説、その他の文章生成アクションには対応しません。

1. [DeepL for Developers](https://www.deepl.com/pro-api)でDeepL APIのプランを選び、登録します。通常のDeepL TranslatorのサブスクリプションだけではAPIを使えません。
2. DeepLアカウントで**Account → API Keys & Limits**を開き、キーを作成してコピーします。[DeepLのAPIキーガイド](https://support.deepl.com/hc/en-us/articles/360020695820-API-key-for-DeepL-API)も参照してください。
3. GSMで**DeepL**を選び、APIキー欄に貼り付け、翻訳先の言語を指定します。

## GSM Cloud

利用中のビルドまたはアカウントで**GSM Cloud**が使える場合は、先に**Settings → GSM Cloud**で認証します。その後、AIプロバイダーとして**GSM Cloud**を選び、アカウントで利用できるモデルを指定します。この方法では外部プロバイダーのAPIキーは入力しません。

## セッション中にAIを使う

- オーバーレイの**Translate**で翻訳し、**Explain**で現在の台詞の説明を表示します。
- Text Feedの台詞から**Ask AI**を選ぶか、台詞のアクションからプロンプトを選びます。
- GSMは前後のキャプチャ台詞をコンテキストとして含められます。**AI・翻訳 → General**でコンテキストの長さを調整します。
- **AI・翻訳 → Prompts**で組み込みプロンプトを確認したり、独自のプロンプトを追加したりできます。**Preview prompt**で送信前の内容を確認できます。

### AI出力をAnkiに追加する

AnkiへのAI出力は任意で、手動のTranslateやExplainとは別の設定です。

1. **AI・翻訳 → General**で**翻訳を Anki に追加**を有効にします。
2. 出力先の**Anki Field**を選びます。
3. **Settings → Mining → Anki**で、使用中のノートタイプにそのフィールドがあることを確認します。

## プロンプトの例

GSMのプロンプト編集画面には、翻訳、文の分解、文法、語彙、ニュアンス、場面要約などのプリセットがあります。以下には以前から掲載されていた翻訳と場面要約のプロンプト例を残しています。現在の内容は**AI・翻訳 → Prompts**で確認・編集してください。

### 翻訳

```text
**Professional Game Localization Task**

**Task Directive:**
Translate ONLY the provided line of game dialogue specified below into natural-sounding, context-aware ENGLISH. The translation must preserve the original tone and intent of the source.

**Output Requirements:**
- Provide only the single, best ENGLISH translation.
- Use expletives if they are natural for the context and enhance the translation's impact, but do not over-exaggerate.
- Carryover all HTML tags present in the original text to HTML tags surrounding their corresponding translated words in the translation. Look for the equivalent word, not the equivalent location. DO NOT CONVERT TO MARKDOWN.
- If there are no HTML tags present in the original text, do not add any in the translation whatsoever.
- Do not include notes, alternatives, explanations, or any other surrounding text. Absolutely nothing but the translated line.

**Line to Translate:**
君の物語は、ここで終わりなのか？
```

### 場面の要約

```text
**Task Directive:**
Provide a very brief summary of the scene in English based on the provided Japanese dialogue and context. Focus on the characters' actions and the immediate situation being described.

**Current Sentence:**
紫「あれ？ 八代さんがすごい<b>形相</b>でこっちに……」
```

## トラブルシューティング

- 選択したモデルIDがアカウントで利用できるか、プロバイダーがモデルの提供を終了していないか確認します。
- ホスト型サービスでは、APIキーの権限、利用枠、上限、請求状況を確認します。
- OllamaやLM Studioでは、サーバーが起動していてモデルが読み込まれていること、GSMのURLがサーバーと一致していることを確認します。
- **Translate**は動作しても**Explain**が失敗する場合、文章生成プロバイダーを選びます。DeepLは翻訳のみです。
- AnkiカードにAI出力がない場合は、**翻訳を Anki に追加**を有効にし、選択したノートタイプに指定フィールドがあることを確認します。
