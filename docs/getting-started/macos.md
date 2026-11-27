---
title: Install GSM on macOS
sidebar_label: macOS
sidebar_position: 4
---

# Install GSM on macOS

The macOS build is experimental and some capture features differ from Windows. Use OCR as the text source; the **Texthook / Agent** tab is currently hidden on macOS.

## Before installing

- Install **FFmpeg** separately. With Homebrew, run `brew install ffmpeg`. Check that `ffmpeg -version` and `ffprobe -version` both print a version. If GSM cannot find them on its `PATH`, place both executables in the `ffmpeg` subfolder of GSM’s data folder.
- **OBS Studio** for game or screen capture.
- **Anki** and the [AnkiConnect add-on](https://ankiweb.net/shared/info/2055492159) if you want GSM to update cards.
- **Yomitan** or another lookup tool for making cards. See [Anki and Yomitan setup](./yomitan-anki.md).

## Install GSM

1. Download the macOS `.dmg` asset for your Mac from the [GSM release for the version you want](https://github.com/bpwhelan/GameSentenceMiner/releases).
2. Open the disk image and move **GameSentenceMiner** to **Applications**.
3. If macOS blocks the app on first launch, use the option in **Privacy & Security** to allow the downloaded app.
4. Open GSM.

## Connect OBS and set up OCR

Create an OBS scene that captures the game or display and includes the audio you want on cards. Enable the OBS WebSocket server and replay buffer, then match the connection in **GSM Settings → OBS**.

Open GSM's **Home → select the game → ⋯ → Run Capture Wizard** to test the game image. Use the **OCR** step to select a text area and check a sample. If the wizard cannot create a capture source on your setup, add the source in OBS and return to GSM to test it.

For scan areas and typewriter-style dialogue, see [OCR Setup](../features/ocr.md). For overlay lookups and the Anki flow, follow [How to Use GSM](../how-to-use-gsm.md).

## Platform notes

- Text hooking is not currently available in the macOS build; use OCR to get text into GSM.
- If a capture mode or global shortcut does not work in your macOS version, use the available controls in the OCR tab and check the OBS capture source.
- Update GSM from the [releases page](https://github.com/bpwhelan/GameSentenceMiner/releases) if in-app updating is unavailable.
