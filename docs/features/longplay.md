---
title: Longplay
sidebar_label: Longplay
sidebar_position: 6
---

import ImageFrame from '@site/src/components/ImageFrame';

# Longplay

Longplay writes captured game dialogue to an **SRT subtitle file** timed to the OBS recording. The sidecar file lets you replay a session with its dialogue or use the recording later for review and mining.

<ImageFrame src="/img/features/longplay/longplay-demo.png" alt="A game recording with dialogue subtitles" caption="The SRT sidecar can be opened with the matching OBS recording in a media player." />

## Enable Longplay

1. Open GSM **Settings → Features**.
2. Turn on **Generate Longplay**.
3. Make sure text capture is working and start an OBS recording.
4. Stop the recording normally. GSM writes the SRT file next to the recording.

Longplay follows OBS recording state; it does not replace the Replay Buffer used for individual Anki cards. The SRT output uses the recording's base name, for example:

```text
MyGame.mp4
MyGame.srt
```

Most media players can load an SRT sidecar with the matching video. Longplay needs a text source, such as a text hook or OCR, while recording.
