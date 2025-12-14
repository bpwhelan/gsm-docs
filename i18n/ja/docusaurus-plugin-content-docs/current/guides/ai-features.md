---
title: AI機能の使用
sidebar_label: AI機能
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

GSMは、大規模言語モデル（LLM）を活用して、マイニングした文章に対して文脈を考慮した翻訳や要約を提供し、それらを自動的にAnkiカードに追加することができます。

## セットアップ

すべてのAI設定は、GSMの設定内の**AI**タブで処理されます。使用したいサービスのAPIキーを提供する必要があります。

![AI設定タブ](../../../../../docs/assets/ai/settings.png)

<Tabs>
<TabItem value="gemini" label="Google Gemini" default>

GoogleのGeminiは最近、無料枠の提供が大幅に縮小されました。しかし、gemma-3-27bのような一部のモデルは、まだ無料枠で手厚くサポートされており、翻訳には十分な性能です。

1.  **[Google AI Studio](https://aistudio.google.com/app/apikey)**にアクセスし、Googleアカウントでサインインします。
2.  **APIキーを作成**をクリックし、生成されたキーをコピーします。
3.  このキーをGSMのAI設定の`Gemini APIキー`フィールドに貼り付けます。

推奨事項:
正直なところ、無料枠の観点では現在gemma3-27bが唯一使用する価値のあるモデルです。将来的に変更があれば、このドキュメントを更新します。

:::note
Geminiの無料枠は地域によって利用可能性が異なります。[公式ドキュメント](https://ai.google.dev/gemini-api/docs/available-regions)で、お住まいの地域がサポートされているか確認してください。
:::

</TabItem>

<TabItem value="groq" label="Groq">
Groqは、使いやすいLLMサービスを競争力のある価格で提供しています。

1.  **[Groq](https://console.groq.com/)**にアクセスし、サインインまたはアカウントを作成します。
2.  APIセクションに移動し、新しいAPIキーを生成します。
3.  このキーをGSMのAI設定の`Groq APIキー`フィールドに貼り付けます。

推奨事項:

- meta-llama/llama-4-maverick-17b-128e-instruct: 1日1000リクエスト、非常に正確です。
- llama-3.1-8b-instant: 1日14000リクエスト、高速で、ほとんどの翻訳にはおそらく十分です。

</TabItem>
<TabItem value="openai" label="OpenAI / OpenRouter">

OpenAI自体、OpenRouter、またはローカルLLMなど、任意のOpenAI互換APIエンドポイントを使用できます。

OpenAIの場合、データ管理 -> 共有 -> OpenAIとAPIの入力/出力を共有する、にオプトインすることで無料トークンを取得できる場合があります。私は個人的に数百万トークンを使用しましたが、一銭も請求されていません。ただし、これが利用可能になる前に、ティア1をアンロックするために5ドルを入金する必要があるかもしれません。

1.  選択したサービスからAPIキーを取得します。
2.  それを`OpenAI APIキー`フィールドに貼り付けます。
3.  `OpenAI API URL`を設定します。これはAPIのベースURLである必要があります。
    -   **OpenAI**: `https://api.openai.com/v1`
    -   **OpenRouter**: `https://openrouter.ai/api/v1`

</TabItem>
<TabItem value="local" label="ローカルLLM（LM Studioなど）">

プライバシーやオフラインでの使用のために、ローカルでOpenAI互換サーバーを実行できます。これには、LM Studio（推奨）、Ollama、Jan、KoboldCppなどのツールを使用した個別のセットアップが必要です。

1.  GSMのAI設定で、`OpenAI API URL`をローカルサーバーのアドレス（例：`http://localhost:1234/v1`）に設定します。
2.  `OpenAI APIキー`を空でない任意の値（例：`lm-studio`）に設定します。
3.  **ローカルビジョンモデルを使用したOCRタスク**の場合、別途設定する必要があります。`C:/Users/{YOUR_USER}/.config/owocr_config.ini`にあるファイルを作成または編集し、ローカルモデルのセクションを追加します：

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

## 事前作成済みプロンプト

GSMは、AIをガイドするために事前作成済みのプロンプトを使用します。これらのプロンプトのコンテキストは、GSMが受信した最後の10行のテキストから構築されます。

### 翻訳プロンプト

このプロンプトは、プロフェッショナルグレードのゲームローカライゼーション用に設計されており、AIに元のトーンと文脈を保持した自然な響きの翻訳を提供するよう指示します。

```text
**プロフェッショナルゲームローカライゼーションタスク**

**タスク指示：**
以下に指定されたゲームの対話の行のみを、自然で文脈に合った英語に翻訳してください。翻訳は、元のトーンと意図を保持する必要があります。

**出力要件：**
- 最良の英語翻訳を1つだけ提供してください。
- 文脈上自然で、翻訳の効果を高める場合は罵り言葉を使用しても構いませんが、過度に誇張しないでください。
- 元のテキストに存在するすべてのHTMLタグを、翻訳内の対応する翻訳語を囲むHTMLタグに引き継いでください。同等の場所ではなく、同等の単語を探してください。MARKDOWNに変換しないでください。
- 元のテキストにHTMLタグが存在しない場合は、翻訳に一切追加しないでください。
- メモ、代替案、説明、その他の付随するテキストは一切含めないでください。翻訳された行以外は絶対に何も含めないでください。

**翻訳する行：**
君の物語は、ここで終わりなのか？
```

### コンテキスト要約プロンプト

このプロンプトは、対話の文脈に基づいて現在のシーンの簡単な要約を求めます。

```text
**タスク指示：**
提供された日本語の対話と文脈に基づいて、シーンの非常に簡単な要約を英語で提供してください。キャラクターの行動と、説明されている当面の状況に焦点を当ててください。

**現在の文：**
紫「あれ？ 八代さんがすごい<b>形相</b>でこっちに……」
```

## トラブルシューティング

-   **OpenAI GPT-5モデルが失敗する**: 新しいOpenAIモデル（`gpt-5-nano`など）は、`max_tokens`パラメータを廃止し、`max_completion_tokens`を優先するようになりました。GSMはこの変更に対応するように更新されていますが、エラーが発生した場合は最新バージョンであることを確認してください。
-   **翻訳が表示されない**:
    -   GSMの設定でAI機能の`有効`チェックボックスがオンになっていることを確認してください。
    -   APIキーとURLが正しいことを確認してください。
    -   選択したAPIサービスのレート制限を超えていないことを確認してください。
