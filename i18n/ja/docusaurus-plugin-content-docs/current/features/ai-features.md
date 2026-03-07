---
title: AI機能
sidebar_label: AI機能
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ImageFrame from '@site/src/components/ImageFrame';

GSMは大規模言語モデル（LLM）を活用して、採掘したセンテンスに対してコンテキストを考慮した翻訳や要約を提供できます。これらはAnkiカードへ自動的に追加されます。

## セットアップ

AIの設定はすべてGSMの設定内の **AI** タブで行います。使用するサービスのAPIキーを入力してください。

<ImageFrame src="/img/ai/settings.png" alt="AI設定タブ" caption="GSM設定のAIプロバイダーとプロンプト設定" />

<Tabs>
<TabItem value="gemini" label="Google Gemini" default>

GoogleのGeminiは最近、無料枠の提供が大幅に縮小されました。しかし、gemma-3-27bのような一部のモデルはまだ無料枠で利用でき、翻訳に十分な品質を持っています。

1.  **[Google AI Studio](https://aistudio.google.com/app/apikey)** にアクセスし、Googleアカウントでサインインします。
2.  **APIキーを作成** をクリックし、生成されたキーをコピーします。
3.  このキーをGSMのAI設定の `Gemini API Key` フィールドに貼り付けます。

推奨事項：
現時点で無料枠として使う価値があるのは正直 gemma3-27b のみです。将来変更があれば、このドキュメントを更新します。

:::note
Geminiの無料枠は地域によって利用可否が異なります。お住まいの地域がサポートされているかどうかは[公式ドキュメント](https://ai.google.dev/gemini-api/docs/available-regions)を確認してください。
:::

</TabItem>

<TabItem value="groq" label="Groq">
Groqは使いやすく競争力のある価格設定のLLMサービスを提供しています。

1.  **[Groq](https://console.groq.com/)** にアクセスし、サインインまたはアカウントを作成します。
2.  APIセクションに移動して新しいAPIキーを生成します。
3.  このキーをGSMのAI設定の `Groq API Key` フィールドに貼り付けます。

推奨事項：

- meta-llama/llama-4-maverick-17b-128e-instruct: 1日1000リクエスト、非常に高精度。
- llama-3.1-8b-instant: 1日14000リクエスト、高速で、ほとんどの翻訳に十分な品質。

</TabItem>
<TabItem value="openai" label="OpenAI / OpenRouter">

OpenAI本体、OpenRouter、またはローカルLLMを含む、OpenAI互換のAPIエンドポイントであれば何でも使用できます。

OpenAIについては、データコントロール → 共有設定 → 入出力をOpenAIと共有する、をオンにすることで無料トークンを取得できる場合があります。私個人的には数百万トークンを使いましたが費用は一切かかっていません。ただし、このオプションが利用可能になる前に5ドルのデポジットでTier 1に昇格する必要があるかもしれません。

1.  ご利用のサービスからAPIキーを取得します。
2.  `OpenAI API Key` フィールドに貼り付けます。
3.  `OpenAI API URL` を設定します。これはAPIのベースURLです。
    -   **OpenAI**: `https://api.openai.com/v1`
    -   **OpenRouter**: `https://openrouter.ai/api/v1`

</TabItem>
<TabItem value="ollama" label="Ollama">

Ollamaはローカルモデルを使用したい場合に最適ですが、現在はクラウド利用でも非常に実用的な選択肢になっています。多くの方にとって、**Ollamaクラウド**はゲーム中に大きなモデルをローカル実行するよりも便利です。

### ローカルOllama

1. **[Ollama](https://ollama.com/)** をインストールし、Ollamaサーバーが起動していることを確認します。
2. 使用するモデルをプル（ダウンロード）します。例：

   ```bash
   ollama pull qwen3:8b
   ```

3. GSMのAI設定でプロバイダーとして **Ollama** を選択します。
4. 必要に応じて `Ollama URL` を設定します。デフォルトは `http://localhost:11434` です。
5. `Ollama Model` を選択します。プライマリモデルが失敗した場合のための `Ollama Backup Model` もオプションで設定できます。

### Ollamaクラウド

Ollamaの公式ドキュメントでは、同じAPIファミリーを通じたクラウドホスト型モデルをサポートするようになりました。主な利用方法は2つあります：

- **ローカルのOllamaインストール経由**：`ollama signin` でサインインし、ローカルのOllamaエンドポイントからクラウド対応モデルを使用します。
- **OllamaのホストAPIへ直接接続**：Ollamaは `https://ollama.com/api` でクラウドアクセス向けのホストAPIを公開しています。

GSMユーザーにとって最も簡単な方法は：

1. 通常通りOllamaをインストールします。
2. `ollama signin` を実行します。
3. Ollamaインストールからクラウドモデルを使用します。
4. GSMは通常のローカルOllamaのURLを指定したままにします：`http://localhost:11434`

これにより、GSMの通常のOllamaプロバイダー設定がそのまま使えながら、重いモデル処理をゲーミングPCではなくOllamaクラウドにオフロードできます。

OllamaのホストAPIを直接使用したい場合は、`Ollama URL` を `https://ollama.com` に設定し、そのホスト型セットアップ向けのOllama APIキーを使用してください。

推奨事項：

- 同じマシンでゲームをプレイする場合は、**Ollamaクラウド**または小さめのローカルモデルを推奨します。
- ローカル使用の場合、`qwen3:8b` や同程度の中サイズの命令チューニングモデルは速度と品質のバランスが良いです。
- モデルを頻繁に切り替える場合は、バックアップモデルを設定しておくことを推奨します。

:::tip
ローカルOllamaにはAPIキーは不要です。`ollama.com` でのホストアクセスには必要です。
:::

:::note
Ollamaの公式ドキュメントによると、`ollama signin` 後にローカルOllamaワークフロー経由でクラウドモデルを使用できるほか、Ollamaは `https://ollama.com/api` にホストAPIも提供しています。
:::

</TabItem>
<TabItem value="local" label="ローカルLLM（LM Studioなど）">

プライバシーやオフライン使用のために、OpenAI互換サーバーをローカルで実行できます。これにはLM Studio（推奨）、Ollama、Jan、KoboldCppなどのツールを使った別途セットアップが必要です。

1.  GSMのAI設定で `OpenAI API URL` をローカルサーバーのアドレスに設定します（例：`http://localhost:1234/v1`）。
2.  `OpenAI API Key` に空でない任意の値を設定します（例：`lm-studio`）。
3.  **ローカルビジョンモデルを使ったOCRタスク**については、別途設定が必要です。`C:/Users/{ユーザー名}/.config/owocr_config.ini` ファイルを作成または編集し、ローカルモデル用のセクションを追加します：

    ```ini
    [local_llm_ocr]
    url = http://localhost:1234/v1/chat/completions
    model = qwen/qwen3-vl-4b-instruct-gguf
    keep_warm = True
    api_key = lm-studio
    ;prompt = Extract all Japanese Text from Image. Ignore all Furigana...
    ```

</TabItem>
</Tabs>

## プリセットプロンプト

GSMはAIを誘導するためのプリセットプロンプトを使用します。これらのプロンプトのコンテキストは、GSMが受信した直近10行のテキストから構築されます。

### 翻訳プロンプト

このプロンプトはプロフェッショナルレベルのゲームローカライズ向けに設計されており、元のトーンとコンテキストを保ちながら自然な翻訳を提供するようAIに指示します。

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

### コンテキスト要約プロンプト

このプロンプトは、対話コンテキストに基づいて現在のシーンの簡潔な要約を求めます。

```text
**Task Directive:**
Provide a very brief summary of the scene in English based on the provided Japanese dialogue and context. Focus on the characters' actions and the immediate situation being described.

**Current Sentence:**
紫「あれ？ 八代さんがすごい<b>形相</b>でこっちに……」
```

## トラブルシューティング

-   **OpenAI GPT-5モデルが失敗する**：新しいOpenAIモデル（`gpt-5-nano`など）では `max_tokens` パラメーターが廃止され、代わりに `max_completion_tokens` が使用されます。GSMはこれに対応するよう更新されていますが、エラーが発生する場合は最新バージョンを使用しているか確認してください。
-   **翻訳が表示されない**：
    -   GSMの設定でAI機能の `Enabled` チェックボックスがオンになっているか確認してください。
    -   APIキーとURLが正しいか確認してください。
    -   使用しているAPIサービスのレート制限を超えていないか確認してください。
