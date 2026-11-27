---
title: "Install GSM on macOS"
sidebar_label: macOS
sidebar_position: 4
---

# Install GSM on macOS

## Install FFmpeg

GSM needs the `ffmpeg` and `ffprobe` command-line tools to extract audio and screenshots from OBS replays. If you use Homebrew, run `brew install ffmpeg` in Terminal. [Homebrew FFmpeg package](https://formulae.brew.sh/formula/ffmpeg)

Check that `ffmpeg -version` and `ffprobe -version` both print a version. If GSM launched from Finder cannot find them, place the two executables or symlinks to them in the `ffmpeg` subfolder of GSM’s shared data folder. You can also use this folder for tools you [download separately](https://ffmpeg.org/download.html).

## Install GSM and connect OBS

1. Download the **.dmg** from the [GSM release](https://github.com/bpwhelan/GameSentenceMiner/releases) you want. Choose **arm64** for Apple silicon or **x64** for an Intel Mac when offered.
2. Open the disk image, drag the app into **Applications**, and launch it. Choose your languages and reader in the [setup guide](./index.md).
3. In [OBS Studio](https://obsproject.com/download), add a macOS screen capture source to a scene. Grant the requested screen-recording permission and select the game. Check that dialogue is visible and game audio registers in the mixer.
4. Enable the OBS WebSocket server and enter its port and password in GSM's main **OBS** settings. Enable the OBS replay buffer for card media.
5. With the scene active, open GSM's **OCR** tab. [Select the dialogue area and test a scan](../features/ocr.md). The integrated text-hook tab is available on Windows and Linux.

Use the [first-session guide](../how-to-use-gsm.md) for lookups and [Anki setup](./yomitan-anki.md) for cards.
