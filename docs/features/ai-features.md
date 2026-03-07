---
title: AI Features
sidebar_label: AI Features
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ImageFrame from '@site/src/components/ImageFrame';

GSM can leverage Large Language Models (LLMs) to provide context-aware translations or summaries for your mined sentences, which can be automatically added to your Anki cards.

## Setup

All AI configuration is handled in the **AI** tab within GSM's settings. You must provide an API key for the service you wish to use.

<ImageFrame src="/img/ai/settings.png" alt="AI Settings Tab" caption="AI provider and prompt configuration in GSM settings" />

<Tabs>
<TabItem value="gemini" label="Google Gemini" default>

Google's Gemini recently underwent a massive downgrade in free tier availability. But some models like gemma-3-27b are still generously supported in free tier, and are good enough for translations.

1.  Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)** and sign in with your Google account.
2.  Click **Create API Key** and copy the generated key.
3.  Paste this key into the `Gemini API Key` field in GSM's AI settings.

Recommendations:
Honestly, gemma3-27b is the only one worth using right now in terms of free tier. I will update this doc if that changes in the future.

:::note
Gemini's free tier has regional availability. Check the [official documentation](https://ai.google.dev/gemini-api/docs/available-regions) to see if your region is supported.
:::

</TabItem>

<TabItem value="groq" label="Groq">
Groq provides an easy-to-use LLM service with competitive pricing.

1.  Go to **[Groq](https://console.groq.com/)** and sign in or create an account.
2.  Navigate to the API section and generate a new API key.
3.  Paste this key into the `Groq API Key` field in GSM's AI settings.

Recommendations:

- meta-llama/llama-4-maverick-17b-128e-instruct: 1000 requests per day, very accurate.
- llama-3.1-8b-instant: 14000 requests per day, fast, and still probably good enough for most translations.

</TabItem>
<TabItem value="openai" label="OpenAI / OpenRouter">

You can use any OpenAI-compatible API endpoint, including OpenAI itself, OpenRouter, or local LLMs.

For OpenAI, you may be able to get free tokens by opting in to sharing your API inputs/outputs at Data Controls -> Sharing -> Share inputs and outputs with OpenAI. I personally have used millions of tokens and haven't been charged a dime. You may have to put in 5 dollars to unlock tier 1 before this becomes available though.

1.  Obtain your API key from your chosen service.
2.  Paste it into the `OpenAI API Key` field.
3.  Set the `OpenAI API URL`. This should be the base URL of the API.
    -   **OpenAI**: `https://api.openai.com/v1`
    -   **OpenRouter**: `https://openrouter.ai/api/v1`

</TabItem>
<TabItem value="ollama" label="Ollama">

Ollama is a great option if you want local models, but it is also a very practical cloud option now. For a lot of people, **Ollama Cloud** makes more sense than running a big model locally while gaming.

### Local Ollama

1. Install **[Ollama](https://ollama.com/)** and make sure the Ollama server is running.
2. Pull a model you want to use, for example:

   ```bash
   ollama pull qwen3:8b
   ```

3. In GSM's AI settings, choose **Ollama** as the provider.
4. Set the `Ollama URL` if needed. The default is `http://localhost:11434`.
5. Pick your `Ollama Model`. GSM also supports an optional `Ollama Backup Model` if the primary one fails.

### Ollama Cloud

Ollama's official docs now support cloud-hosted models through the same API family. There are two useful ways to think about this:

- **Through your local Ollama install**: sign in with `ollama signin`, then use cloud-enabled models from your local Ollama endpoint.
- **Direct to Ollama's hosted API**: Ollama exposes a hosted API at `https://ollama.com/api` for cloud access.

For GSM users, the easiest path is usually:

1. Install Ollama normally.
2. Run `ollama signin`.
3. Use a cloud model from your Ollama install.
4. Keep GSM pointed at your normal local Ollama URL: `http://localhost:11434`.

This is nice because you still use GSM's normal Ollama provider setup, but the heavy model work can be offloaded to Ollama's cloud instead of your gaming PC.

If you want to use Ollama's hosted API directly instead, set the `Ollama URL` to `https://ollama.com` and use an Ollama API key for that hosted setup.

Recommendations:

- If you are gaming on the same machine, prefer **Ollama Cloud** or smaller local models.
- For local use, `qwen3:8b` or similar midsize instruction-tuned models are a good balance of speed and quality.
- Keep a backup model configured if you frequently swap models around.

:::tip
Local Ollama does not require an API key. Hosted access on `ollama.com` does.
:::

:::note
According to Ollama's official docs, cloud models can be used through the local Ollama workflow after `ollama signin`, and Ollama also provides a hosted API at `https://ollama.com/api`.
:::

</TabItem>
<TabItem value="local" label="Local LLMs (LM Studio, etc.)">

For privacy or offline use, you can run an OpenAI-compatible server locally. This requires a separate setup using a tool like LM Studio (which I recommend), Ollama, Jan, or KoboldCpp.

1.  In GSM's AI settings, set the `OpenAI API URL` to your local server's address (e.g., `http://localhost:1234/v1`).
2.  Set the `OpenAI API Key` to any non-empty value (e.g., `lm-studio`).
3.  For **OCR tasks with a local vision model**, you must configure it separately. Create or edit the file at `C:/Users/{YOUR_USER}/.config/owocr_config.ini` and add a section for your local model:

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

## Pre-written Prompts

GSM uses pre-written prompts to guide the AI. The context for these prompts is built from the last 10 lines of text received by GSM.

### Translation Prompt

This prompt is designed for professional-grade game localization, instructing the AI to provide a natural-sounding translation that preserves the original tone and context.

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

### Context Summary Prompt

This prompt asks for a brief summary of the current scene based on the dialogue context.

```text
**Task Directive:**
Provide a very brief summary of the scene in English based on the provided Japanese dialogue and context. Focus on the characters' actions and the immediate situation being described.

**Current Sentence:**
紫「あれ？ 八代さんがすごい<b>形相</b>でこっちに……」
```

## Troubleshooting

-   **OpenAI GPT-5 Models Fail**: Newer OpenAI models (like `gpt-5-nano`) have deprecated the `max_tokens` parameter in favor of `max_completion_tokens`. GSM has been updated to handle this, but ensure you are on the latest version if you encounter errors.
-   **No Translation Appears**:
    -   Make sure the `Enabled` checkbox for AI features is ticked in GSM's settings.
    -   Check that your API key and URL are correct.
    -   Confirm you haven't exceeded the rate limits of your chosen API service.
