---
title: How to Use GSM
sidebar_label: Set Up Capture
sidebar_position: 1
---

import ImageFrame from '@site/src/components/ImageFrame';

# How to Use GSM

This is the core GSM walkthrough. It starts after installation and takes you from a game on screen to text in GSM, on-screen lookups, and an Anki card with game context.

You can follow the steps in order or jump to [text capture](#1-get-text-from-a-game), [overlay setup](#2-set-up-the-overlay), or [Anki enhancement](#3-make-an-enhanced-anki-card).

## Before you start

- Install GSM, OBS, Anki, and AnkiConnect. See [Installation](./getting-started/index.md).
- Open OBS and Anki before GSM's first capture session.
- If you use Yomitan, set up its Anki connection and note type using [Anki and Yomitan setup](./getting-started/yomitan-anki.md).

## 1. Get text from a game

Open GSM's **Home** tab and choose **Add a game**. For an existing game, select it and choose **⋯ → Run Capture Wizard**. It lets you check the game image, try text sources, and choose what should start automatically for this game.

<ImageFrame src="/img/guides/capture-wizard.png" alt="GSM Text Capture Wizard" caption="The Home tab's capture wizard walks through capture, text hook, OCR, and per-game startup choices." />

Prefer a text hook when the game has one that captures readable dialogue. Use OCR when there is no usable hook and the text is visible on screen. Speech recognition is for spoken dialogue without readable text. If you already use a separate text source, GSM can also receive its output.

| Source | Use it when | How to set it up |
|---|---|---|
| **Text hook (preferred)** | The game exposes dialogue through a compatible hook, often in visual novels. It usually gives the cleanest text and timing. | In the capture wizard, try **Agent** when a matching script is available, then test **Luna** or **Textractor**. **MAGES** is experimental and only supports listed games. Select the hook that shows complete dialogue. See [Text Hook Setup](./features/text-hook.md). |
| **OCR (usual fallback)** | No hook provides usable text, but dialogue or subtitles are visible in the captured game image. Use it for hard-subbed video too. | In the wizard or **OCR** tab, select the dialogue region and test a scan. See [OCR Setup](./features/ocr.md). |
| **Windows Speech Recognition** | Dialogue is spoken but not shown as readable text. | Enable the optional **Windows Speech** tab, select the game’s OBS scene, language, and engine, then start recognition. This is experimental and Windows-only. See [Windows Speech Recognition](./features/windows-speech-recognition.md). |
| **External text input** | Use this only if a separate app is already providing dialogue to GSM. | Choose GSM's WebSocket input when the app sends text over WebSocket, or clipboard input when it copies dialogue to the clipboard. Configure the matching source in **Settings → General**; see [Settings](./settings.md). |

Start with the capture wizard for the selected game. For a hook, keep the one that produces complete, clean dialogue. If no compatible hook provides usable text, use OCR and check a sample scan before enabling automatic capture. The external input row is for a separate app that already sends text to GSM; Agent, Luna, and Textractor are covered by the text-hook option above.

Once capture is running, incoming lines appear in GSM's **Text Feed**. Check that a line is complete, in the right language, and arrives when the matching dialogue appears. If you want to remove game-specific artifacts, use the [Text Processing](./features/text-processing.md) tools after the basic capture works.

When a text hook supplies dialogue, the overlay may still run OCR on the game image to locate each word on screen. That positioning scan is separate from OCR as the text source; see [Overlay](./features/overlay.md).

## 2. Set up the overlay

The overlay puts dictionary lookups on top of the game. From GSM's **Home** tab, open **Overlay Settings** to configure it, then launch the overlay. The settings window controls capture, reading, interaction, controller navigation, profiles, and other overlay options.

<ImageFrame src="/img/desktop/overlay-overview.png" alt="Current GSM Overlay Settings overview" caption="Open Overlay Settings from Home to configure how the overlay captures and displays text." />

The overlay uses recognized on-screen text to place word-level lookup targets. With text arriving from a hook, GSM can scan the game image to find those words; OCR can also supply the text itself. Hover or click a word to open its embedded Yomitan definition. Use the overlay toolbar for line actions and translations, or keep the floating text box visible when you want the full line alongside the game.

To get ready for your first lookup:

1. Launch the game capture you configured in the wizard and open the overlay.
2. Open the overlay's embedded Yomitan settings and import and enable your dictionaries. These are separate from browser Yomitan dictionaries.
3. Confirm the overlay's capture target is the same game image shown in OBS.
4. Wait for a new line of dialogue, then hover over a word to check its definition.

If you plan to add cards from overlay Yomitan, configure its Anki connection and note type separately. See [Anki and Yomitan setup](./getting-started/yomitan-anki.md) for note type and field guidance.

For settings, lookup behavior, text placement, and common problems, see [Overlay](./features/overlay.md). For controller lookup, see [Overlay Gamepad Navigation](./features/overlay-gamepad.md).

## 3. Make an enhanced Anki card

GSM enhances a card when Yomitan or another connected lookup tool creates it in Anki. Keep Anki open with AnkiConnect available, then mine a word from the current line. GSM matches the new card to captured game text and adds the media and fields enabled in your profile.

<ImageFrame src="/img/desktop/card-en.png" alt="Current GSM card confirmation window" caption="Review the captured dialogue and media in GSM's card confirmation window." />

Before making your first card, check the Anki status on Home and confirm your selected note type's field names in **Settings → Mining → Anki**. GSM can add sentence audio, screenshots or animations, dialogue context, game information, furigana, and optional AI output when those fields and features are configured.

If your note type is not ready, follow [Anki and Yomitan setup](./getting-started/yomitan-anki.md). For a full explanation of the enhancement flow and media options, see [Anki Enhancement](./features/anki-enhancement.md).

## Your first-session checklist

- The game image is visible in OBS and GSM reports OBS connected.
- Dialogue appears in the Text Feed from the source you selected.
- The overlay opens and Yomitan can look up a word on the game image.
- Anki and AnkiConnect are running, and a test card receives the expected GSM fields.

If any step fails, start with [Common Problems](./troubleshooting.md) or open the matching feature guide above.
