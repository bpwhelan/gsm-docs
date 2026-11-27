---
title: "Capture dialogue with a text hook"
sidebar_label: Text Hook Setup
sidebar_position: 2
---

# Capture dialogue with a text hook

On Windows or Linux with a compatible Wine or Proton game, select the game on Home and open **Texthook / Agent**. Verify the game and executable under **Current game**.

![Text hook workspace showing detected hooks](/img/desktop/texthook-en.png)

1. Choose an engine. **Luna Hook** and **Textractor** can detect hooks in supported games. **Agent** uses a script for the game. Its runtime downloads on first use. The experimental **MAGES** option applies to listed titles.
2. Start the engine or choose **Search for hooks**. Advance several lines of dialogue and watch **Detected Hooks**. Select a row and compare **Selected Hook Output** with what the character actually said. A speaker-name or file-access hook may produce text too.
3. Choose **Save Hook** to save immediately. With a selected hook, GSM can also save its filters after three different lines. Enable **Auto-attach saved hook on next start** to reuse it.
4. Check Home's text feed. If the selected hook reliably contains extra markup, preview a [text processing rule](./text-processing.md). If no hook produces dialogue, [configure OCR](./ocr.md) for the visible text.

Use **Output & timing** for capture timing and **Tools** for engine maintenance. To launch the saved setup with its game, see [Game Automation](./autolauncher.md).
