---
title: Install GSM on Windows
sidebar_label: Windows
sidebar_position: 2
---

# Install GSM on Windows

Windows has the broadest GSM feature support. Install Anki and GSM first; the Home tab's capture wizard then guides you through setting up a game.

## Before installing

- GSM can install its own copy of **OBS Studio** for game image and audio capture.
- **Anki** with the [AnkiConnect add-on](https://ankiweb.net/shared/info/2055492159) if you want GSM to update cards.
- **Yomitan** or another lookup tool if you want to create cards while reading. See [Anki and Yomitan setup](./yomitan-anki.md).

You do not need to choose a text-hook tool before installing. GSM can run OCR and the built-in hook setup is available from the capture wizard. External tools such as Agent, Textractor, and LunaTranslator can be configured later if your game needs them.

## Install GSM

1. Open the [GSM release for the version you want](https://github.com/bpwhelan/GameSentenceMiner/releases).
2. Download and run the Windows installer.
3. Launch **GameSentenceMiner**.
4. Open OBS and Anki, then check their connection status on GSM's Home tab.

## Connect OBS and set up a game

If OBS is not connected, check the OBS WebSocket server settings in OBS and the matching connection in **GSM Settings → OBS**. Keep the OBS scene that captures the game active during setup. Enable OBS's replay buffer if you want GSM to make audio clips and other media from recent gameplay.

In GSM, choose **Home → select the game → ⋯ → Run Capture Wizard**. Choose a capture type and test the game image, then try a text hook or OCR, and choose what should start automatically for the game. Follow [How to Use GSM](../how-to-use-gsm.md) for the complete workflow.

## Connect Anki

Install AnkiConnect from Anki's add-on page using code **2055492159**, then restart Anki. Keep it running while GSM is open. In GSM's **Settings → Mining → Anki**, choose a note type and refresh its fields.

For recommended note types and Yomitan field mapping, see [Anki and Yomitan setup](./yomitan-anki.md). For a first card, continue to [Anki Enhancement](../features/anki-enhancement.md).

## Continue with the core workflow

- [Get text from a game](../features/text-hook.md)
- [Set up OCR](../features/ocr.md)
- [Set up the overlay](../features/overlay.md)
- [Make an enhanced Anki card](../features/anki-enhancement.md)

If something does not connect or the first capture fails, see [Common Problems](../troubleshooting.md) or ask in the [GSM Discord](https://discord.gg/yP8Qse6bb8).
