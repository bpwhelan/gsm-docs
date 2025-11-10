---
title: Using AI Features
sidebar_label: AI Features
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

GSM can leverage Large Language Models (LLMs) to provide context-aware translations or summaries for your mined sentences, which can be automatically added to your Anki cards.

## Setup

All AI configuration is handled in the **AI** tab within GSM's settings. You must provide an API key for the service you wish to use.

![GSM AI Settings Tab](https://github.com/user-attachments/assets/333a5098-6cba-40ad-975d-eb7b622b1c2d)

<Tabs>
<TabItem value="gemini" label="Google Gemini" default>

Google's Gemini API offers a generous free tier, making it an excellent choice for getting started.

1.  Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)** and sign in with your Google account.
2.  Click **Create API Key** and copy the generated key.
3.  Paste this key into the `Gemini API Key` field in GSM's AI settings.

:::note
Gemini's free tier has regional availability. Check the [official documentation](https://ai.google.dev/gemini-api/docs/available-regions) to see if your region is supported.
:::

</TabItem>

<TabItem value="groq" label="Groq Studio">
Groq Studio provides an easy-to-use LLM service with competitive pricing.

1.  Go to **[Groq Studio](https://groq.studio)** and sign in or create an account.
2.  Navigate to the API section and generate a new API key.
3.  Paste this key into the `Groq API Key` field in GSM's AI settings.

</TabItem>
<TabItem value="openai" label="OpenAI / OpenRouter">

You can use any OpenAI-compatible API endpoint, including OpenAI itself, OpenRouter, or local LLMs.

1.  Obtain your API key from your chosen service.
2.  Paste it into the `OpenAI API Key` field.
3.  Set the `OpenAI API URL`. This should be the base URL of the API.
    -   **OpenAI**: `https://api.openai.com/v1`
    -   **OpenRouter**: `https://openrouter.ai/api/v1`

</TabItem>
<TabItem value="local" label="Local LLMs (LM Studio, etc.)">

For privacy or offline use, you can run an OpenAI-compatible server locally. This requires a separate setup using a tool like LM Studio, Jan, or KoboldCpp.

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