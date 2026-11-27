---
title: OCR Setup
sidebar_label: OCR
sidebar_position: 3
---

import ImageFrame from '@site/src/components/ImageFrame';

# OCR Setup

OCR reads dialogue from the game image captured by OBS. Use it when a game has no clean text hook, for hard-subbed video, or when you want to capture a particular region of the screen. OCR can be the primary text source or a fallback for a hook that misses some lines.

## Select an OCR area

1. Connect OBS and select the game scene you want to configure.
2. Open GSM's **OCR** tab and choose **Open Area Selector** in **Capture**.
3. In the area selector, capture the current OBS frame or open an image, then draw the regions that apply to your game.
4. Save the areas. The setup is associated with the selected game or scene.

<ImageFrame src="/img/features/ocr/area-selector.png" alt="Current GSM OCR area selector" caption="The current area selector can use an OBS frame or a local image and supports several region types." />

| Region | Use it for |
|---|---|
| **Normal** | Dialogue to read automatically. |
| **Exclusion** | Parts of the screen to ignore, such as a persistent HUD. |
| **Secondary** | Text that should only be captured with a manual or menu scan. |
| **Exclusive** | Layouts where dialogue in this region should take priority over other normal areas. |
| **Black hole** | A screen region that suppresses a scan while a menu or other blocking screen is visible. |

Keep regions tight and avoid overlapping areas unless the game layout needs it. Use **Import areas** and **Export areas** to share or back up a scene's configuration.

## Choose how OCR runs

Open **Capture** for per-game areas and **Recognition** for engine and scan controls. Start with the defaults and change one setting at a time.

<ImageFrame src="/img/desktop/ocrframe-en.png" alt="Current GSM OCR settings in the dark theme" caption="Capture shows the saved areas and the current frame for the game." />

- **Autostart OCR** controls whether OCR begins automatically for this game. Use manual scanning while setting up; enable automatic scanning after the sample text looks right.
- **Text Appears Instantly** tells the pipeline whether the full line is visible immediately or appears over time. Turn it off for typewriter-style dialogue and tune the wait/retry behavior if the line is clipped.
- In **Recognition**, **Stability OCR** checks for text changes and **Main OCR** produces the final recognition result. **Two-pass** mode uses the fast check first and a more accurate pass after the text settles.
- Language, scan rate, image quality, furigana filtering, clipboard output, line breaks, and hotkeys are available in the OCR settings. The available engines depend on your platform and installed components.

## Test your setup

1. Open a game scene with visible dialogue.
2. Run a one-time or manual scan from the OCR tab and confirm the returned text.
3. Adjust the regions or the **Text Appears Instantly** setting if text is incomplete or includes interface labels.
4. Enable **Autostart OCR** only after the result is usable.
5. Confirm the captured line appears in the Text Feed. Then continue with [Overlay setup](./overlay.md) or [Anki Enhancement](./anki-enhancement.md).

For text that appears slowly, increase the wait for the final scan or disable the instant-text assumption. For missed or noisy dialogue, check the OBS scene, area boundaries, language, and scan log before changing engines.

:::tip
The overlay also uses OCR to place lookup targets over game text, even when a text hook supplies the dialogue. See [Overlay](./overlay.md) for how those two jobs fit together.
:::
