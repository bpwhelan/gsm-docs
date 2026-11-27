---
title: AI Features
sidebar_label: AI Features
sidebar_position: 7
---

import ImageFrame from '@site/src/components/ImageFrame';

# AI Features

GSM can translate dialogue, explain a line, summarize nearby context, and add optional AI output to Anki. You can use a hosted provider, a local model, or DeepL for translations. This page walks through creating an account or local endpoint and connecting it to GSM.

## Connect a provider in GSM

Open **Settings → Mining → AI and translation**. Choose a provider, follow its setup instructions below, then return to GSM and enter the key, model, and URL requested for that provider. GSM saves settings automatically.

<ImageFrame src="/img/desktop/ai-en.png" alt="GSM AI provider and credentials settings" />

1. Choose the provider you want to use. Its setup guide appears in the settings page and links to the current key-creation and pricing pages.
2. Create or download a model as described below, then fill in the provider's fields. For hosted services, paste the API key into the matching key field. For local services, start the server first and select a model it serves.
3. Try **Translate** or **Explain** from a game line. You do not need to enable **Add translation to Anki** to use these actions.

Model names, access, quotas, and prices change. Select a model currently offered by the provider and check its linked pricing and limits before enabling repeated or automatic requests.

## Hosted text-generation providers

### Google Gemini

1. Sign in to [Google AI Studio](https://aistudio.google.com/apikey) with your Google account and accept the Gemini API terms.
2. Open the API Keys page. New users may already have a project and key. If you use an existing Google Cloud project that is not listed, import it from **Projects** first.
3. Select **Create API key**, choose the project, and copy the key.
4. In GSM, choose **Gemini**, paste the key into **Gemini API Key**, and select an available Gemini text model.

See Google's [API key guide](https://ai.google.dev/gemini-api/docs/api-key), [model pricing](https://ai.google.dev/gemini-api/docs/pricing), and [supported regions](https://ai.google.dev/gemini-api/docs/available-regions). Free-tier access and quotas depend on the model, project, and region.

### Groq

1. [Sign in to GroqCloud](https://console.groq.com/keys), or create an account if you are new.
2. Open **API Keys**, select **Create API Key**, give the key a name, and copy it.
3. In GSM, choose **Groq**, paste the key into **Groq API Key**, and select a text model available to your account.

Check Groq's current [models](https://console.groq.com/docs/models) and [rate limits](https://console.groq.com/docs/rate-limits). Free accounts have limits that vary by model and can change.

### Z.ai

These fields are available to profiles that already have Z.ai selected.

1. Sign in to [Z.ai](https://z.ai/manage-apikey/apikey-list) or create an account.
2. Open **API Keys**, create a key, and copy it.
3. In the existing Z.ai profile, paste the key into **Z.ai API Key**, and choose an available model.

GSM uses Z.ai's standard API. A separate Coding Plan is not required for standard API access. Check the current [pricing and model list](https://docs.z.ai/guides/overview/pricing) before choosing a model; free access or performance can vary.

### OpenAI, OpenRouter, and other compatible APIs

GSM's **OpenAI** provider can connect to OpenAI and other services that implement an OpenAI-compatible API.

#### OpenAI

1. Sign in to the [OpenAI API Platform](https://platform.openai.com/api-keys) or create an account.
2. Open **API Keys**, create a secret key, and copy it. Configure API billing in the API Platform if required for your usage.
3. In GSM, choose **OpenAI** and enter:
   - **OpenAI API URL:** `https://api.openai.com/v1`
   - **OpenAI Model:** a model ID currently available to your API account
   - **OpenAI API Key:** the key you created

ChatGPT subscription billing and API Platform billing are separate. See the [OpenAI API billing guide](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform) and [API pricing](https://platform.openai.com/docs/pricing).

#### OpenRouter

1. [Create or sign in to an OpenRouter account](https://openrouter.ai/).
2. Open [API Keys](https://openrouter.ai/settings/keys), create a key, and copy it.
3. In GSM, choose **OpenAI** and enter:
   - **OpenAI API URL:** `https://openrouter.ai/api/v1`
   - **OpenAI Model:** the model ID shown by OpenRouter and available to your account
   - **OpenAI API Key:** the OpenRouter key

See the [OpenRouter quickstart](https://openrouter.ai/docs/quickstart) for its compatible endpoint and model ID format. Check the selected model's current price and availability in your OpenRouter account.

#### Another OpenAI-compatible service

Create an API key with that service, then use its documented **base URL** and **model ID** in GSM's OpenAI fields. This also works with a local server; see [LM Studio](#lm-studio) below. The URL normally ends in `/v1`, but use the value supplied by the service.

## Local models

### Ollama

Local Ollama does not require an account or API key.

1. Install [Ollama](https://ollama.com/download).
2. Choose a text model from the [Ollama library](https://ollama.com/library) and download it in Ollama, or run `ollama pull MODEL_NAME` in a terminal, replacing `MODEL_NAME` with the model name from the library.
3. Make sure the Ollama server is running. Its default URL is `http://localhost:11434`.
4. In GSM, choose **Ollama**, enter that URL if it differs from the default, and select the downloaded model. You can optionally choose a backup model.

Ollama Cloud models require signing in to Ollama first. Run `ollama signin`, then choose a cloud model supported by your Ollama installation while keeping GSM connected to the local Ollama server. See [Ollama cloud models](https://ollama.com/blog/cloud-models).

### LM Studio

LM Studio runs a local model server and does not require a provider API account for ordinary local use.

1. Download and install [LM Studio](https://lmstudio.ai/).
2. Find and download a text model in LM Studio, then load it.
3. Open the **Developer** tab and turn on **Start server**. See [LM Studio's local server guide](https://lmstudio.ai/docs/developer/core/server).
4. In GSM, choose **LM Studio**, enter the server URL and loaded model ID shown by LM Studio, and enter an API key only if you enabled server authentication.

## DeepL (translation only)

DeepL can translate text in GSM, but it does not provide sentence explanations, grammar help, or other text-generation actions.

1. Visit [DeepL for Developers](https://www.deepl.com/pro-api) and sign up for a DeepL API plan. A regular DeepL Translator subscription alone does not provide API access.
2. In your DeepL account, open **Account → API Keys & Limits**, create a key, and copy it. See [DeepL's API key guide](https://support.deepl.com/hc/en-us/articles/360020695820-API-key-for-DeepL-API).
3. In GSM, choose **DeepL**, paste the key into the DeepL API key field, and set the target language.

## GSM Cloud

If **GSM Cloud** is available in your build or account, authenticate in **Settings → GSM Cloud** first. Then choose **GSM Cloud** as the AI provider and select the model or models offered to your account. You do not enter a third-party provider key for this option.

## Use AI in a session

- In the overlay, use **Translate** for a translation or **Explain** for an explanation of the current line.
- In the Text Feed, use **Ask AI** or choose a prompt from a line's actions.
- GSM can include nearby captured dialogue as context. Adjust the context length in **AI and translation → General**.
- Open **AI and translation → Prompts** to review the built-in prompts or add your own. **Preview prompt** lets you inspect the request before sending it.

### Add AI output to Anki

AI output for Anki is optional and separate from manual Translate and Explain actions.

1. In **AI and translation → General**, enable **Add translation to Anki**.
2. Choose the **Anki Field** that should receive the output.
3. Confirm that your selected note type has that field in **Settings → Mining → Anki**.

## Prompt examples

GSM's prompt editor includes presets for translation, sentence breakdown, grammar, vocabulary, nuance, and scene summaries. These examples preserve the original translation and scene-summary prompts; review the current versions in **AI and translation → Prompts** and edit them there if needed.

### Translation

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

### Scene summary

```text
**Task Directive:**
Provide a very brief summary of the scene in English based on the provided Japanese dialogue and context. Focus on the characters' actions and the immediate situation being described.

**Current Sentence:**
紫「あれ？ 八代さんがすごい<b>形相</b>でこっちに……」
```

## Troubleshooting

- Check that the selected model ID is available to your account and that the provider has not changed or removed it.
- For hosted services, check the account's key permissions, quota, usage limits, and billing status.
- For Ollama and LM Studio, confirm the server is running, the model is loaded, and GSM's URL matches the server.
- If **Translate** works but **Explain** does not, choose a text-generation provider; DeepL supports translation only.
- If AI output is missing from an Anki card, enable **Add translation to Anki** and confirm the selected note type contains the chosen field.
