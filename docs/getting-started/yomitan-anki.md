---
id: yomitan-anki
description: Connect AnkiConnect and map Lapis, Kiku, or Senren fields in GSM and Yomitan.
title: "Connect Anki and Yomitan"
sidebar_label: Anki and Yomitan
sidebar_position: 6
---

# Connect Anki and Yomitan

Install [Anki](https://apps.ankiweb.net/). In **Tools → Add-ons → Get Add-ons**, enter `2055492159` for [AnkiConnect](https://ankiweb.net/shared/info/2055492159). Restart Anki and leave it running.

## Set up a recommended note type

1. In GSM, open **Settings → Mining → Anki → General** and choose **Set up recommended Anki cards**. Select **Check Anki / refresh decks**.
2. Choose **Lapis**, **Kiku**, or **Senren**, then choose the deck for new cards. Review the **GSM fields** table to see where sentence text, audio and screenshots will go.
3. If you mine in the overlay with Yomitan, select **Configure Yomitan in the running GSM overlay**. GSM creates a dedicated profile with the selected deck and fields.
4. Select **Install and set up**. If GSM opens Anki's import window, finish importing there and then choose **Finish setup** in GSM. An existing compatible note type can be reused.

![Recommended Anki setup with the card type, deck and field mappings](/img/desktop/recommended-en.png)

## Which field receives the media?

| GSM writes | Lapis and Kiku | Senren |
| --- | --- | --- |
| Dialogue | `Sentence` | `sentence` |
| Game voice clip | `SentenceAudio` | `sentenceAudio` |
| Game image | `Picture` | `picture` |
| Sentence with readings | `SentenceFurigana` | `sentenceFurigana` |

For template-specific display and study options, use the assistant's **Official setup guide** for the selected type.

## Mine from browser Yomitan

The browser extension has its own dictionaries and profiles. In the setup assistant open **Yomitan fields** and use **Copy Yomitan field table**. In browser Yomitan's **Anki** settings, enable integration, open **Configure Anki flashcards**, select the same deck and note type, and map the term fields using that table. It gives you the values for the installed template. [Yomitan's Anki guide](https://yomitan.wiki/anki/)

For a custom note type, map the word and sentence in Yomitan and select the matching fields in GSM's Anki settings. Leave the fields you want GSM to fill available for its media. Test one word from a line in the [text feed](../how-to-use-gsm.md) and check the resulting note in Anki.
