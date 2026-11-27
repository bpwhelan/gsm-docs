---
title: "Add game media to an Anki note"
sidebar_label: Anki Enhancement
sidebar_position: 5
---

# Add game media to an Anki note

Set up [AnkiConnect and your note type](../getting-started/yomitan-anki.md). Leave Anki open, check its connection on Home, and confirm the game's image and audio in OBS. The replay buffer must cover the moment you want to mine.

1. Capture a line and look up a word in it. Use the reader's add-card action.
2. GSM checks the new note against the configured note type and tag filters, then matches its sentence to recent game text.
3. GSM fills the fields enabled for that profile. These can include sentence audio, a screenshot or animation, furigana, nearby lines, the game name and optional AI output. In **Settings → Anki**, check the destination field and its overwrite or append behavior.
4. If confirmation is enabled, inspect the sentence, image and audio, then choose **Confirm**. With session review enabled, you can revisit captured cards after playing.

![Card confirmation showing the word, editable sentence and selected screenshot](/img/desktop/card-en.png)

AnkiBeacon is optional. It notifies GSM when Anki creates a card. Without the add-on, GSM can poll AnkiConnect for new cards. If a test card is missing a field, compare it with the [capture and card checks](../troubleshooting.md).
