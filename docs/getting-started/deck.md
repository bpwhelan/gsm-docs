---
title: "Use GSM on Steam Deck"
sidebar_label: Steam Deck
sidebar_position: 5
---

# Use GSM on Steam Deck

## Run GSM on the Deck

1. Choose **Steam → Power → Switch to Desktop**. Install OBS Studio from Discover.
2. Follow the [Linux instructions](./linux.md) to install FFmpeg on the Deck, start the GSM AppImage, connect OBS and enable the replay buffer.
3. Start the game in Desktop Mode. Add its window from **Home** or select an existing OBS scene. Check the preview, then select a [hook](../features/text-hook.md) or draw an [OCR area](../features/ocr.md) around the dialogue.
4. Advance one line and check the text feed. To look up words using the Deck controls, configure the [overlay gamepad bindings](../features/overlay-gamepad.md). For cards, run [Anki with AnkiConnect](./yomitan-anki.md) on the Deck.

## Stream a session from a PC

Run the game, GSM, OBS and any card tools on the host PC. Verify a lookup there first. Install Moonlight on the Deck, pair it with the host using the displayed PIN, then stream the desktop so the overlay and game share the view. Add Moonlight to Steam as a non-Steam game to start the stream in Gaming Mode. [Moonlight setup guide](https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide)
