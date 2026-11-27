---
title: Anki Enhancement
sidebar_label: Anki Enhancement
sidebar_position: 5
---

import ImageFrame from '@site/src/components/ImageFrame';

# Anki Enhancement

GSM watches Anki for cards created from captured game text. When it finds a match, it can add the sentence, game audio, screenshots, dialogue context, and other enabled fields to the card. The fields depend on your note type and the options you have turned on.

## Set up Anki once

1. Install Anki and the AnkiConnect add-on, then leave Anki running while you play.
2. In GSM's **Settings → Mining → Anki**, choose the note type and refresh its fields. Field names must match the note type.
3. If you need a note type, **Settings → Mining → Anki → General → Set up recommended Anki cards** can help install Lapis, Kiku, or Senren. GSM can also prepare a separate Yomitan profile for the selected template.
4. Check that OBS is connected and is capturing the game audio and image. Replay-buffer media requires OBS to retain the relevant part of the session.

See [Anki and Yomitan setup](../getting-started/yomitan-anki.md) for note templates and browser Yomitan setup.

## Make a card during a session

1. Start a game capture and confirm its text appears in GSM's Text Feed.
2. Look up a word in Yomitan and create the card in Anki.
3. GSM matches the new card to a recent line, then prepares the enabled media and fields.
4. If review or confirmation is enabled, check the sentence, context, audio, and screenshots in the card confirmation window before applying the update.

<ImageFrame src="/img/desktop/card-en.png" alt="Current GSM card confirmation window" caption="Review the sentence and its media before confirming the update." />

## What GSM can add

- **Sentence audio** from the game recording, with voice detection and timing controls.
- **Screenshots** from the matching moment, including stills or animated images when configured.
- **Previous and next dialogue context**, including selected lines in supported workflows.
- **Furigana, game name, tags, and AI output** when the corresponding fields and features are enabled.

GSM respects the field mapping and overwrite or append behavior configured for the selected note type. A field left unmapped or disabled is not populated.

## If a card is not enhanced

- Confirm Anki is open and the Home screen shows Anki connected.
- Check that the card uses the selected note type and that its expression and sentence fields map to the right values.
- Confirm the sentence appears in GSM's Text Feed. If the line is incomplete or different from the card, adjust the source hook or OCR setup before changing audio offsets.
- If audio or screenshots are missing, check the OBS capture source and replay-buffer status.
- If GSM enhances cards from another source, review the note type and tags it is configured to process.

Continue with the [full first-session guide](../how-to-use-gsm.md) or see [Troubleshooting](../troubleshooting.md).
