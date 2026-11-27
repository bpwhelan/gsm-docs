---
title: "Look up words over the game"
sidebar_label: Overlay
sidebar_position: 4
---

# Look up words over the game

1. Get a line into the text feed from a [hook](./text-hook.md) or [OCR](./ocr.md).
2. In **Settings → Dictionary**, select Yomitan or [Hachidori](./hachidori.md). Open the selected reader's settings and enable a dictionary. GSM can also copy supported browser libraries from **Import from browser**. For Firefox, use the reader's backup export and import.
3. Enable the overlay on **Home**. Open **Overlay Settings → Interaction** to find your activation shortcut. With the dialogue visible, activate the overlay and point at a word to open the reader.

![Overlay Settings with shortcuts to reading, capture and interaction](/img/desktop/overlay-overview.png)

## How the overlay finds a word

A hook can deliver the sentence without its screen coordinates. The overlay can scan the captured image to find the positions while the line is still visible. **Capture & OCR** controls those scans. When the game moves or the scene changes, check that the OBS preview still shows the same game and dialogue.

![Capture and OCR controls in the overlay settings sidebar](/img/desktop/overlay-capture.png)

## Read and mine

Use the floating text box to read the whole line, or look up a word directly on the game. The overlay toolbar provides line actions including translation and explanation when an [AI provider](./ai-features.md) is configured. To add a word to Anki, configure the reader's [Anki integration](../getting-started/yomitan-anki.md) and use its mining action.

For controller bindings, open **Overlay Settings → Controller**. To follow a game automatically, enable **Open and close with active game** in Home's Overlay controls. [Gamepad navigation](./overlay-gamepad.md)
