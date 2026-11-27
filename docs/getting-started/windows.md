---
title: Install GSM on Windows
sidebar_label: Windows
sidebar_position: 2
---

# Install GSM on Windows

1. From the [GSM release](https://github.com/bpwhelan/GameSentenceMiner/releases) you want, download and run the **GameSentenceMiner-Setup** executable.
2. Launch GSM and follow the [first-launch guide](./index.md). On Windows, GSM manages a portable copy of OBS for capture. Let its installation finish.
3. Start the game, choose **Home → Add a game**, and select its window. Check the preview before saving. If Game Capture shows a black frame, try Window Capture and compare the preview.

If you are upgrading from the older Windows desktop app, the rewrite's installer handoff offers to back up your database and settings. The new app uses the same data folder, so keep that backup when trying the new build.

If you use your own OBS installation, enable its WebSocket server under **Tools → WebSocket Server Settings**. Enter the matching host, port and password in GSM's main **OBS** settings. Keep the replay buffer running for card media.

Once you can see the game, [set up text capture](../how-to-use-gsm.md). [Connect Anki](./yomitan-anki.md) when you want to make cards.
