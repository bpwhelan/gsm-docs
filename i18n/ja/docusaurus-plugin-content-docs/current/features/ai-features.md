---
title: "台詞を翻訳・解説する"
sidebar_label: AI機能
sidebar_position: 7
---

# 台詞を翻訳・解説する

**設定 → マイニング → AI and translation** でプロバイダーを選びます。各サービスのアカウント作成や利用可能なモデル、料金は、プロバイダー欄のAPIキー取得先とヘルプで確認できます。

| プロバイダー | 入力する内容 |
| --- | --- |
| Gemini、Groq、Z.ai | 選んだサービスでAPIキーを作成し、対応する欄に貼り付けます。そのアカウントが使えるモデルを選びます。 |
| OpenAIと互換サービス | **OpenAI**を選び、ベースURL、モデルID、APIキーを入力します。OpenAIは `https://api.openai.com/v1`、OpenRouterは `https://openrouter.ai/api/v1` とOpenRouter側のモデルID・キーを使います。 |
| Ollama | テキストモデルをダウンロードしてOllamaサーバーを起動し、モデル名とURL（通常は `http://localhost:11434`）を入力します。 |
| LM Studio | モデルを読み込み、**Developer**タブでサーバーを起動します。表示されたURLとモデルIDを入力します。 |
| DeepL | DeepL APIキーと翻訳先言語を設定します。DeepLは翻訳専用です。解説には文章生成に対応するプロバイダーを選びます。 |
| GSM Cloud | 利用できる場合はGSM Cloudの設定で認証し、利用可能なモデルを選びます。 |

クラウド型では、選んだサービスでキーを作成します。ローカルモデルを使う場合は、GSMに入力したホストとポートでサーバーを起動してください。

- [Google AI Studioのキー](https://aistudio.google.com/apikey)・[GroqCloudのキー](https://console.groq.com/keys)・[Z.aiのキー](https://z.ai/manage-apikey/apikey-list)
- [OpenAI APIキー](https://platform.openai.com/api-keys)・[OpenRouterのキー](https://openrouter.ai/settings/keys)
- [Ollamaのモデル一覧](https://ollama.com/library)・[LM Studioのローカルサーバー設定](https://lmstudio.ai/docs/developer/core/server)
- [DeepL APIアカウント](https://www.deepl.com/pro-api)

## 一行試す

オーバーレイで台詞の **Translate** を使って翻訳を試します。表現や文法の説明は **Explain** で取得できます。AI設定では、文脈に含める台詞の数やプロンプトを変更できます。プロンプトのプレビューではAPIに送信せずに組み立てた内容を確認できます。翻訳や解説を実行すると選択したプロバイダーにリクエストを送ります。

## カードに出力する

**Add translation to Anki** を有効にし、出力先の **Anki Field** を選びます。使用するノートタイプにそのフィールドがあることを確認します。オーバーレイで手動翻訳するだけならこの設定は不要です。[Ankiカードの強化](./anki-enhancement.md)
