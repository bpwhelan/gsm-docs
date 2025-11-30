---
title: Troubleshooting & FAQ
sidebar_label: Troubleshooting
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Troubleshooting & FAQ

This page covers frequently asked questions and common issues encountered while using GameSentenceMiner (GSM).

## General Troubleshooting

Before diving into specific issues, try these common solutions first. Many problems can be resolved with a simple restart or environment refresh.

<Tabs>
<TabItem value="restart" label="Restart GSM" default>

Many transient issues, especially those related to connections (OBS, Anki) or UI elements not appearing, can be fixed by completely restarting GSM.

1.  Right-click the GSM pickaxe icon in your system tray.
2.  Select **Quit**.
3.  Relaunch GSM.

If you can't find the tray icon, you may need to end the `GameSentenceMiner.exe` and `python.exe` processes in your Task Manager.

</TabItem>
<TabItem value="repair" label="Repair Python Environment">

If GSM fails to start after an update, or you encounter errors mentioning missing modules (`psutil`, `torchaudio`, `PIL`, `pysbd`), the Python environment may be corrupted.

1.  Close GSM completely.
2.  Open Windows PowerShell or Command Prompt.
3.  Run the following commands one by one:

    ```powershell
    # This command cleans the package cache, which can resolve some update issues.
    ~/AppData/Roaming/GameSentenceMiner/python/python.exe -m uv cache clean

    # This command forces an upgrade to the latest version of the GSM Python package.
    ~/AppData/Roaming/GameSentenceMiner/python/python.exe -m uv pip install --upgrade gamesentenceminer
    ```

4.  Restart GSM. In the most severe cases, you may need to delete the `python` folder inside `~/AppData/Roaming/GameSentenceMiner/` and let GSM reinstall it on the next launch.

</TabItem>
</Tabs>

## Installation & Startup

### GSM Crashes or Fails to Initialize on Startup

This is often caused by a corrupted update or a conflict with other software.

-   **Razer Software Conflict**: Razer Synapse / Cortex is known to use port `55000`, which GSM also uses by default. This will prevent GSM's web server from starting, causing it to hang or fail.
    -   **Solution 1 (Recommended):** Change GSM's port. Go to `Settings` -> `General` and change the `Web Server Port` to another number (e.g., `55010`).
    -   **Solution 2:** Close all Razer software before starting GSM.
-   **Corrupted Update**: You may see errors like `module 'psutil' has no attribute 'NoSuchProcess'` or `cannot import name 'Image' from 'PIL'`.
    -   **Solution**: Follow the **Repair Python Environment** steps above.

### I can't find where to install GSM. It only installs on my C: drive.

The installation path for GSM is not currently customizable. User data, OBS, and Python packages are stored in `%AppData%\GameSentenceMiner`.

## OBS & Media (Audio/Screenshots)

### OBS Shows a Black Screen for My Game

This is a common OBS issue, especially with games that have aggressive anti-cheat or run in exclusive fullscreen. See a full list [here](https://obsproject.com/kb/game-capture-troubleshooting).

-   **Run as Administrator**: Many games (especially Hoyoverse titles like Genshin Impact) require OBS to be run with administrator privileges to be captured. The easiest way to do this is to run GSM itself as an administrator.
-   **Change Capture Method**: In the OBS window, double-click your game source. Change the `Capture Method` from `Automatic` to `Windows 10 (1903 and up)`.
-   **Use Game Capture**: If Window Capture fails, try creating a new scene with a "Game Capture" source instead.
-   **Toggle Source Visibility**: Sometimes, simply clicking the "eye" icon next to the source in OBS to hide and then show it again can fix the black screen.

### My Anki Cards Have No Audio or Screenshot

This usually means GSM cannot communicate with OBS or the replay buffer is not working correctly.

-   **"Replay Buffer is not active" Error**: This is the most common cause.
    1.  Check the OBS window. The "Start Replay Buffer" button should be blue and say "Stop Replay Buffer". If not, click it.
    2.  GSM now includes **Automatic Replay Buffer Management**. It should start the buffer when a non-black image is detected in OBS and stop it after a period of inactivity. If this fails, a GSM restart usually fixes it.
-   **OBS Disconnected**: Check the status indicators on GSM's home page. If OBS is disconnected, ensure the port and password in GSM's `Settings -> OBS` match the settings in OBS under `Tools -> WebSocket Server Settings`. A common issue is another program using the default OBS port (`7274`). Try changing it in both GSM and OBS to a different number.

### The Audio on My Card is Wrong (BGM only, wrong line, etc.)

This is often a Voice Activity Detection (VAD) issue, where the model struggles to differentiate speech from background music or noise.

-   **Whisper Hallucinations**: Sometimes, especially with music that has vocals or with unvoiced game lines, Whisper will "hallucinate" and detect speech where there is none.
    -   **Solution**: Go to `Settings` -> `VAD / Audio` and enable **Use VAD pre-filter**. This processes the audio to remove noise before sending it to Whisper, which can significantly improve accuracy, but may occasionally cut off very high-pitched voices.
-   **Audio is Cut Off (Beginning/End)**:
    -   **Solution**: Adjust the **Beginning Offset** and **End Offset** in `Settings -> Key Settings / Audio`. A small negative value for the beginning offset (e.g., `-0.5`) can help capture the start of a line.
-   **Double Audio / Echo**: This happens when OBS is capturing both the specific game's audio and your general "Desktop Audio."
    -   **Solution**: In the OBS window's "Audio Mixer" panel, mute the "Desktop Audio" track.

## OCR (Text Recognition)

### OCR Isn't Working or Fails to Start

-   **"Unrecognized arguments" Error**: This happens when your GSM desktop app version and Python package version are out of sync.
    -   **Solution**: Update GSM via the `File -> Update GSM` menu. This ensures both components are on compatible versions.
-   **Missing `oneocr` Files**: OneOCR requires additional model files to be downloaded.
    -   **Solution**: In the `OCR` tab, click the **Install/Update OWOCR Dependencies** button. If this fails, you may need to manually download the files and place them in `C:/Users/your_username/.config/oneocr`.
-   **Area Select Doesn't Work**:
    -   **Problem**: When using "Run Area Selector," the screen overlay appears but you can't save, or it fails immediately.
    -   **Solution**: This can be caused by having an incorrect or no OBS Scene selected in the OCR tab. Ensure the correct scene is selected before running the selector.

### OCR Gives Incorrect or Incomplete Text

-   **Text Appears Slowly**: If text fades or scrolls in, the OCR might scan before the full line is visible.
    -   **Solution**: In `Settings -> OCR -> Extra and Debug`, increase the **Scan Delay**. A value of `1.0` (1 second) is often a good starting point.
-   **Furigana is Being Read**:
    -   **Solution**: Use the **Furigana Filter Sensitivity** slider in the `OCR` tab. A higher value will be more aggressive in removing small text above the main line. You must restart the OCR process for this change to take effect.
-   **Text is Split or Duplicated**: This often happens with pixelated text (e.g., from DS games) or fast scan rates.
    -   **Solution**: Try increasing the **OCR Scan Rate** to a higher number (e.g., `0.8` or `1.0`) to give the screen more time to settle. Disabling **Optimize 2nd Scan** can also sometimes help at the cost of slower performance.

## Overlay

### The Overlay Doesn't Appear or Update

-   **It's Not Automatic (by default)**: The overlay's OCR scan is triggered by a new text event from a source like Agent, Textractor, or GSM's own OCR. It doesn't scan constantly unless you enable **Periodic Capture**.
    -   **Solution**: For media without a text hook (like manga or videos), enable **Periodic Capture** in the `Overlay` settings tab.
-   **Slowly Appearing Text**: Similar to the main OCR issue, if text fades in, the overlay might scan too early.
    -   **Solution**: Use the **Scan Delay** or **Extra Local Scans per Event** options in the `Overlay` settings to give the text time to fully appear before the final scan.
-   **Focus Issues**: Some games in exclusive fullscreen may "trap" the mouse, preventing you from interacting with the overlay.
    -   **Solution**: Enable **Manual Mode (Hotkey)**. This allows you to press and hold a key to activate the overlay for lookups, then release it to return focus to the game.

## Integrations (Yomitan, Migaku, Anki)

### My Anki Card Only Has Part of the Sentence

This is a Yomitan issue, not a GSM issue. Yomitan splits sentences based on punctuation.

-   **Solution**: In Yomitan's settings, under `Parsing`, change **Sentence termination characters** to **Newlines only**. It's highly recommended to create a separate Yomitan profile specifically for the texthooker page with this setting.

### Migaku Extension is Breaking Sentence Mining

The Migaku browser extension heavily modifies the HTML of the texthooker page, which can interfere with how Yomitan parses sentences.

-   **Solution**: In Yomitan's settings, under `Scanning`, turn **OFF** the **Enable layout-aware scanning** option. This usually resolves the issue.

### Opus Audio Files Don't Play on Anki for iOS

Anki on iOS does not support the Opus audio format.

-   **Solution**: In GSM `Settings -> Audio`, change the **Audio Output Extension** to `mp3`. For existing cards, you may need to use an FFmpeg script to batch-convert your `.opus` files to `.mp3`.