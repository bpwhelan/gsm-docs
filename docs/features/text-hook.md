---
title: Text Hook Setup
sidebar_label: Text Hook Setup
sidebar_position: 2
---

import ImageFrame from '@site/src/components/ImageFrame';

# Text Hook Setup

A text hook reads dialogue from a game's text output and sends it to GSM. It usually gives cleaner text and better timing than OCR, so try it first when the game has a compatible hook. The current **Texthook / Agent** tab brings the engine, hook selection, output preview, saved profile, and troubleshooting together.

<ImageFrame src="/img/desktop/texthook-en.png" alt="Current Texthook / Agent tab in GSM" caption="Choose an engine, select a readable hook, check its output, and save the choice for this game." />

## Set up a hook

1. Open the game and make sure GSM has the right game or OBS capture selected.
2. Open the Home tab's **Run Capture Wizard** and go to **Texthook**, or open **Texthook / Agent** directly.
3. Choose an engine:
   - **Luna** or **Textractor** for compatible visual novels and games.
   - **Agent** for games with a matching script. Use **Search for hooks** to find a script; GSM ranks likely matches using the game and executable details.
   - **MAGES** for supported MAGES titles. This built-in engine is experimental and only applies to listed games.
4. Start the engine and wait for the hook list to fill in.
5. Select a hook and read its preview. Choose the one that shows the complete dialogue in the language you want to mine. GSM highlights likely readable hooks; noisy hooks can be shown when needed.
6. Use **Save Hook** to keep the engine and selected hook for this game. Leave automatic hook selection enabled if you want GSM to reconnect to it on later sessions.

The tab also shows the active target and engine status. Expand **Output & timing** for optional behavior such as copy-to-clipboard and flush timing. Open **Tools** there for engine update, repair, and diagnostic controls.

## If no hook works

- Try another hook in the list. The first hook is not always the dialogue hook.
- Check the preview for duplicate redraws, script commands, or partial text before saving.
- For Agent, confirm the selected script matches the game version and launch context.
- If the game has no compatible hook, use [OCR](./ocr.md). If you use an external hook tool, it can also send text through GSM's WebSocket or clipboard input; see [Settings](../settings.md) for input options.

:::note
Text-hook support varies by engine and game. GSM supports text hooking on Windows and Linux/Wine/Proton; macOS does not currently show the Text Hook tab.
:::

After a line reaches the Text Feed, continue with [Overlay setup](./overlay.md) and [Anki Enhancement](./anki-enhancement.md).
