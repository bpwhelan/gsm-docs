---
title: GameSentenceMiner
sidebar_label: Overview
sidebar_position: 1
---

# GameSentenceMiner

GameSentenceMiner (GSM) turns game dialogue into material you can look up, mine, and review. It captures text from a game, lines that text up with the game audio and image, and can add that context to Anki when you make a card.

## The usual workflow

1. **Set up a game capture.** The Home tab's capture wizard helps connect OBS and choose a text source.
2. **Get dialogue into GSM.** Use a text hook when the game supports one, or choose OCR when it does not.
3. **Look up a word.** Use the overlay for on-screen Yomitan lookups, or use the text feed in a browser.
4. **Make an Anki card.** GSM can add matching dialogue, audio, screenshots, and other configured fields.

## Start here

- [Install GSM](/docs/getting-started)
- [Follow the first-use guide](/docs/how-to-use-gsm)
- [Set up Anki and Yomitan](/docs/getting-started/yomitan-anki)

The first-use guide walks through a complete session in that order. Read just the sections you need, or follow it from beginning to end before opening a game.

## Ways to capture text

- **Text hooks** read dialogue from a game's text output. GSM's **Texthook / Agent** tab helps select a hook and save it for the game.
- **OCR** reads text from the captured game image. It is a good fallback for games without a usable hook, and for video or hard-subbed content.
- **Windows Speech Recognition** can recognize speech from game audio when subtitles are unavailable. It is experimental and currently Windows-only.

## Explore more features

After the core workflow is working, explore [Game Automation](/docs/features/autolauncher), [Text Processing](/docs/features/text-processing), [AI tools](/docs/features/ai-features), [Longplay](/docs/features/longplay), [Game Pausing](/docs/features/game-pausing), and [Stats and Library tools](/docs/features/stats-and-library).

## Help and community

- [Common problems](/docs/troubleshooting)
- [GSM Discord](https://discord.gg/yP8Qse6bb8)
- [Report an issue](https://github.com/bpwhelan/GameSentenceMiner/issues)
