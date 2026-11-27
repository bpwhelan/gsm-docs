---
title: Windows Speech Recognition
sidebar_label: Windows Speech
sidebar_position: 4
---

# Windows Speech Recognition

GSM can transcribe game audio when dialogue is spoken but not shown on screen. The feature is experimental and Windows-only. When subtitles or a text hook are available, they are usually more accurate than speech recognition.

## Set up a scene

1. Open **Settings → Desktop → General → Tabs & windows** and make **Windows Speech** visible if the tab is hidden.
2. Connect OBS, then open **Windows Speech**.
3. Select the OBS scene whose game audio you want to recognize. Settings are saved per scene.
4. Choose the language and recognition backend. **Embedded speech** is the recommended backend; **Windows SAPI** is an alternative.
5. Save the scene settings, then choose **Start Speech Recognition**.

The first start with the embedded backend may download about **358 MB** and unpack about **492 MB**. GSM reuses the downloaded files after that. Use the advanced path fields only if you need a custom model, runtime, or license location.

Recognized text is sent through GSM's text pipeline and appears in the Text Feed. Partial hypotheses update the same line while recognition is in progress. Recognition stops when the OBS scene changes; the session log stays in the current app session.

For ordinary subtitle-based mining, follow [Text Hook Setup](./text-hook.md) or [OCR Setup](./ocr.md) instead.
