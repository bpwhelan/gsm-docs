---
title: "Translate or explain a line"
sidebar_label: AI Features
sidebar_position: 7
---

# Translate or explain a line

Open **Settings → Mining → AI and translation** and select a provider. Use **Account / API key page** and **Pricing, limits & help** in the provider panel for that service's account and model details.

| Provider | What to enter |
| --- | --- |
| Gemini, Groq or Z.ai | Create an API key with the selected service, paste it into the matching key field and choose a model available to your account. |
| OpenAI or an OpenAI-compatible service | Choose **OpenAI**. Enter the provider's base URL, model ID and API key. For OpenAI the base URL is `https://api.openai.com/v1`. For OpenRouter use `https://openrouter.ai/api/v1` and its model ID and key. |
| Ollama | Download a text model in Ollama and start its server. Enter the served model name and URL (normally `http://localhost:11434`). |
| LM Studio | Load a text model and start the server in the **Developer** tab. Enter the URL and model ID shown by the server. |
| DeepL | Enter a DeepL API key and select a target language. DeepL supports translation only. For an explanation, select a text-generation provider. |
| GSM Cloud | When available, authenticate in GSM Cloud settings and select a model offered to your account. |

For hosted providers, create a key in the service you selected. For local models, start the server on the computer and port you enter in GSM.

- [Google AI Studio keys](https://aistudio.google.com/apikey), [GroqCloud keys](https://console.groq.com/keys), and [Z.ai keys](https://z.ai/manage-apikey/apikey-list)
- [OpenAI API keys](https://platform.openai.com/api-keys) and [OpenRouter keys](https://openrouter.ai/settings/keys)
- [Ollama model library](https://ollama.com/library) and [LM Studio local server guide](https://lmstudio.ai/docs/developer/core/server)
- [DeepL API account](https://www.deepl.com/pro-api)

## Try a captured line

Use **Translate** on a line in the overlay. For an explanation of a phrase or grammar point, use **Explain**. In the AI settings you can change how much nearby dialogue is included and edit the prompts. **Preview prompt (no API request)** shows how a sample sentence fits the template. A translation or explanation sends a request to the selected provider.

## Put the result on a card

Enable **Add translation to Anki** and choose the target **Anki Field**. Confirm the field exists on the note type you mine into. Manual translation in the overlay and automatic output on cards can be used independently. [Anki enhancement](./anki-enhancement.md)
