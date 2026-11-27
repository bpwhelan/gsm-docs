---
title: "Read dialogue with OCR"
sidebar_label: OCR
sidebar_position: 3
---

# Read dialogue with OCR

Select the game's OBS scene in the **OCR** tab. **Capture** shows the saved areas, recent recognized text and capture shortcuts for the scene. Click **Refresh frame** while dialogue is visible to check the image.

![OCR Capture with a saved area around a video subtitle](/img/desktop/ocrframe-en.png)

## Draw the areas

Use **Edit areas in preview** when available, or **Open Area Selector** for the separate editor. Drag a box around the whole dialogue line, including its second row if it wraps, then save the areas. You can export and import a layout for reuse.

| Area | Effect |
| --- | --- |
| Normal | Reads dialogue inside the green area during automatic capture or a manual green-area scan. |
| Exclusion | Ignores text in part of a larger capture area, such as a fixed HUD label. |
| Secondary | Reads this area with the menu capture action. Useful for choices. |
| Exclusive | If a line fits inside one of these boxes, automatic capture keeps only lines in exclusive boxes. |
| Black hole | Discards the automatic scan when recognized text overlaps the box, for example a pause-menu heading. |

## Test a line

Select **Start Manual OCR** and use **Manual (Green Areas)** while a complete line is visible. Check **Captured text** against the game. If the result includes menu labels, adjust the area. If a line is still being drawn when OCR reads it, review its timing under **Recognition**. Two-pass recognition can wait for text to settle before running the main engine.

Choose **Start Auto OCR** for continuous capture. Set **Autostart OCR** to **Auto OCR** or **Manual OCR** if you want that mode to start with this game. Under **Shortcuts** you can check or change the bindings for dialogue, menus, area selection and the whole window.

The [overlay](./overlay.md) can also use OCR to locate words when a text hook supplies the dialogue.
