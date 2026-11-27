---
title: "From game dialogue to your first card"
sidebar_label: Set Up Capture
sidebar_position: 1
---

# From game dialogue to your first card

## 1. Add a game

After [installation](./getting-started/index.md), leave the game on a line of dialogue. Open **Home → Add a game**, select the capture target, and give it a name. Check the image before saving. If you set the scene up in OBS, select that scene in GSM.

![Home with a selected game, overlay controls and text feed](/img/desktop/home-en.png)

## 2. Capture one complete line

The Text Capture Wizard opens after adding a game when that option is enabled. To reopen it, select the game in **Home**, open the **⋯** menu beside its name, and choose **Run Capture Wizard**.

- **Text hook** reads dialogue directly from a compatible game. Start a hook, advance the dialogue and select the entry that shows the entire line. [Text hook setup](./features/text-hook.md)
- **OCR** reads visible text. Choose the dialogue area, run a manual scan, and check the result before starting automatic scans. [OCR setup](./features/ocr.md)
- **Spoken dialogue** can be transcribed with the experimental [Windows Speech](./features/windows-speech-recognition.md) tool. For a separate app that already copies or sends text, configure [clipboard or WebSocket input](./settings.md).

At **Finalize**, save which source should start for this game. Advance the dialogue and check that a new line appears in the text feed on Home.

## 3. Look up a word

Enable the overlay from Home. If you installed a dictionary in the setup guide, try that reader now. Otherwise open its dictionary settings, import a dictionary and enable it. Activate the overlay using its configured shortcut and point at a word while the line is visible. The overlay can scan the picture for word positions even when a hook supplies the text. [Overlay controls](./features/overlay.md)

## 4. Save a card

Keep [Anki and AnkiConnect](./getting-started/yomitan-anki.md) running and the OBS replay buffer active. Use the reader's add-card action on a word. GSM matches the new note to recent dialogue and fills its configured media fields. If confirmation is enabled, review the sentence, screenshot and audio before confirming. Open the note in Anki to check the result. [Anki enhancement](./features/anki-enhancement.md)
