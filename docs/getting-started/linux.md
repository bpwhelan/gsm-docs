---
title: "Install GSM on Linux"
sidebar_label: Linux
sidebar_position: 3
---

# Install GSM on Linux

Download the x86-64 **AppImage** from the [GSM release](https://github.com/bpwhelan/GameSentenceMiner/releases) you want. In your file manager, open the file's **Properties → Permissions**, allow it to run as a program, then open it. Follow the [first-launch guide](./index.md).

## Install FFmpeg

GSM uses `ffprobe` to inspect OBS replays and `ffmpeg` to extract card audio and screenshots. Install the FFmpeg package from your distribution. On Debian or Ubuntu, run `sudo apt install ffmpeg`. For other distributions, see the [FFmpeg download page](https://ffmpeg.org/download.html).

Run `ffmpeg -version` and `ffprobe -version` in a terminal. Both should print a version. GSM looks for the tools on its `PATH`. If you download the executables yourself, you can also put both in the `ffmpeg` subfolder of GSM’s shared data folder.

## Connect OBS

1. Install [OBS Studio](https://obsproject.com/download) and start it in the same desktop session as the game.
2. In **Tools → WebSocket Server Settings**, enable the server and keep authentication enabled. Enter the matching host, port and password in GSM's main **OBS** settings. GSM defaults to port `7274`. [OBS remote control guide](https://obsproject.com/kb/remote-control-guide)
3. Enable **Settings → Output → Replay Buffer** in OBS for card media. Check **Home** in GSM for the OBS connection.

## Capture the game

Open **Home → Add a game**. On X11, GSM uses XComposite window capture. On Wayland, select the game or display in the PipeWire system chooser. If you already have an OBS scene, activate it and check that its preview shows dialogue.

Try a [text hook](../features/text-hook.md) for compatible Wine or Proton titles, or [OCR](../features/ocr.md) for visible text. To make cards, [set up AnkiConnect](./yomitan-anki.md) and keep Anki running while you play.
