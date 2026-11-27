---
title: "Mine subtitles burned into video"
sidebar_label: Hard-Subbed Content
sidebar_position: 2
---

# Mine subtitles burned into video

Pause the video on a frame with subtitles. You will use OBS for the picture and audio, and OCR to turn the subtitles into selectable text.

1. Add the player window or a display capture to an OBS scene. Play a few seconds and check both the preview and the audio meter. Enable the replay buffer if you want game media on cards.
2. In GSM, select the scene in **OCR → Capture**. Refresh the frame and draw a normal area around the full subtitle block, allowing room for two-line subtitles. Leave the OBS picture uncropped if you want the full image on the card.
3. Start manual OCR and scan a subtitle. Check **Captured text** for the entire line. Move or resize the area if it also reads player controls.
4. Start automatic OCR, play the video and watch the text feed for new lines. Look up a word and [make an enhanced card](../features/anki-enhancement.md) while that moment is still in the replay buffer.

For subtitles at multiple positions, save additional [OCR areas](../features/ocr.md) for that scene.
