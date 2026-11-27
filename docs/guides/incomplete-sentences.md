---
title: "Keep a complete dialogue line in Anki"
sidebar_label: Incomplete Sentences
sidebar_position: 2
---

# Keep a complete dialogue line in Anki

Compare the card's sentence with the same line in GSM's text feed. If the feed already cuts off mid-line, check the [hook output](../features/text-hook.md) or [OCR capture](../features/ocr.md). If the feed is complete but the card stops at punctuation, check the sentence Yomitan sends to Anki.

For example, the game may show `ありがとうございました。明日もよろしく。` in one text box. With punctuation-based termination, a lookup in the second half can send only `明日もよろしく。`.

1. In browser Yomitan's **Profiles**, make a profile for the GSM text feed. Copy your existing profile if you want to keep its dictionary and Anki settings.
2. Set a **URL → Matches RegExp** condition for your feed. For the default local address use `^http://localhost:7275/texthooker(?:[/?#]|$)`. Adjust the host and port to match your browser's address bar.
3. In that profile's **Text Parsing** settings, find **Sentence termination characters** and select **Newlines only**.
4. Look up the same word in the feed and create a test card. If there is a real newline inside the dialogue, preview a newline-removal rule in [Text Processing](../features/text-processing.md) before applying it to that game's input.
