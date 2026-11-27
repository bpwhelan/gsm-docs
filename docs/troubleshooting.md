---
title: "Find where capture stops"
sidebar_label: Troubleshooting
sidebar_position: 9
---

# Find where capture stops

Use one visible line of dialogue to check the path from the game to the card. Start with the first step whose result differs from what you see.

| What you see | What to check |
| --- | --- |
| Home shows **OBS disconnected** | For your own OBS installation, open its WebSocket server settings. Match the host, port and password in GSM's main **OBS** settings. |
| OBS is connected but the preview shows another window | Select the intended scene in OBS. Check the source's target window and preview before changing OCR. |
| The picture is right but the feed is empty | For a [hook](./features/text-hook.md), advance dialogue and inspect **Selected Hook Output**. For [OCR](./features/ocr.md), start manual OCR and scan the dialogue area. Check **Captured text** before turning on automatic capture. |
| A line arrives but lookup shows no definitions | Check which [reader](./features/overlay.md) is active and enable a dictionary in that reader. Browser Yomitan and the overlay maintain separate libraries. |
| The feed has the whole line but the card ends at punctuation | Check the [Yomitan sentence boundary](./guides/incomplete-sentences.md) for the profile used to make the card. |
| The card exists but has no game audio or screenshot | Verify **Home** shows Anki connected. Check the note type and media field mapping in GSM. Play the line again with the game visible in OBS, the audio meter moving and the replay buffer running, then mine a new card. |

If you need help, include your GSM version, operating system, capture source and the first step above that failed. Pair the symptom with the relevant message from **Logs**. [GSM Discord](https://discord.gg/yP8Qse6bb8) · [GitHub issues](https://github.com/bpwhelan/GameSentenceMiner/issues)
