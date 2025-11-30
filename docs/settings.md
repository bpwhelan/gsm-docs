---
title: GameSentenceMiner Configuration Guide
sidebar_label: Settings
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GameSentenceMiner Configuration Guide

This document provides a comprehensive overview of every setting available in the GameSentenceMiner configuration window. Understanding these options will help you tailor the application to your specific sentence mining workflow, whether you're using a texthooker, OCR, or a combination of tools.

## Legend for Settings

Throughout the configuration window, some setting labels are color-coded to indicate their importance. Here's what they mean:

-   <span style={{color: 'darkorange', fontWeight: 'bold'}}>Orange Text</span>: **Important / Required Setting**. These settings are crucial for the core functionality of GSM. Incorrect or missing values for these settings will likely cause the application to fail or not work as expected.
-   <span style={{color: 'red', fontWeight: 'bold'}}>Red Text</span>: **Advanced / Potentially Risky Setting**. These are advanced options that can significantly alter behavior. They may have unintended side effects or require a deeper understanding of the underlying tools (like FFmpeg). Use them with caution.
-   <span style={{color: 'green', fontWeight: 'bold'}}>Green Text</span>: **Recommended / Quality-of-Life Setting**. These settings are optional but highly recommended for a better, more organized, or more efficient user experience.

---

## Table of Contents

1.  [Key Settings Tab](#key-settings-tab)
2.  [General Tab](#general-tab)
3.  [Paths Tab](#paths-tab)
4.  [Anki Tab](#anki-tab)
5.  [VAD (Voice Activity Detection) Tab](#vad-tab)
6.  [Features Tab](#features-tab)
7.  [Screenshot Tab](#screenshot-tab)
8.  [Audio Tab](#audio-tab)
9.  [OBS Tab](#obs-tab)
10. [Profiles Tab](#profiles-tab)
11. [AI Tab](#ai-tab)
12. [Advanced Tab](#advanced-tab)
13. [Overlay Tab](#overlay-tab)

---

## Key Settings Tab

This tab provides a simplified view of the most essential settings to get you started quickly. All settings on this tab are also available in their respective detailed tabs.

### Text Input

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Websocket Enabled / Clipboard Enabled</span>
- **Tooltip**: Enable or disable WebSocket/Clipboard communication.
- **Default Value**: Websocket `True`, Clipboard `True`.
- **Details**: These are the two primary methods for getting text into GSM.
    - **Websocket**: GSM listens for text sent from other applications, like the built-in Texthooker page or external tools like Textractor. This is the recommended method as it's fast and reliable.
    - **Clipboard**: GSM monitors your system's clipboard for new text. This is a good fallback if your texthooker doesn't support WebSockets.
:::note
By default, if a WebSocket connection is active, clipboard monitoring is paused to prevent duplicate entries. You can change this behavior in the **General Tab**.
:::

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Websocket URI(s)</span>
- **Tooltip**: WebSocket URI for connecting. Allows comma-separated values for connecting to multiple sources.
- **Default Value**: `localhost:6677,localhost:9001,localhost:2333`
- **Details**: This tells GSM where to listen for incoming text. The default value covers the standard ports for **Textractor**, **Agent**, and **LunaTranslator**. You can add more URIs separated by commas.

### File Paths

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Folder to Watch</span>
- **Tooltip**: Path where OBS Replays will be saved.
- **Default Value**: `~/Videos/GSM`
- **Details**: This is a critical setting. It **must** match the "Replay Buffer Output Directory" set in your OBS settings (`Settings -> Output -> Replay Buffer`). GSM watches this folder for new video files to process.

### Anki Configuration

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Anki Field Mappings</span>
- **Details**: These fields are the core of the Anki integration. You must enter the **exact names** (case-sensitive) of the fields from your Anki Note Type that you want GSM to populate.
    - **Sentence Field**: The field for the full Japanese sentence. (Default: `Sentence`)
    - **Sentence Audio Field**: The field where the `[sound:...]` tag for the audio will be placed. (Default: `SentenceAudio`)
    - **Picture Field**: The field for the screenshot. (Default: `Picture`)
    - **Word Field**: The field containing the target word or expression you are mining. GSM uses this to identify which Anki card to update. (Default: `Expression`)

### Audio Processing

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Audio Extraction Beginning Offset</span>
- **Tooltip**: Offset in seconds from the beginning of the video to extract audio. Usually should be negative or 0.
- **Default Value**: `-0.5`
- **Details**: A crucial setting for accurate audio. Since the replay buffer saves video *before* you press the hotkey, this value tells GSM how many seconds *before* the text appeared to start the audio clip. A small negative value like `-0.5` helps capture the beginning of a spoken line that might start slightly before the text appears on screen.

<span style={{color: 'red', fontWeight: 'bold'}}>Audio Extraction End Offset (Pre-VAD)</span>
- **Tooltip**: Offset in seconds to trim from the end before VAD processing starts.
- **Default Value**: `0.5`
- **Details**: This defines the length of the raw audio slice that is fed into the Voice Activity Detection (VAD) model. It's added to the duration of the line (time until the next line appears). A value of `0.5` means the clip will be half a second longer than the line's on-screen duration, giving VAD some buffer.

### Feature Toggles

**Open Anki Edit / Open Anki Note in Browser**
- **Tooltip**: Automatically open Anki for editing or in the browser after an update.
- **Details**: Provides immediate feedback. After updating a card, GSM can either open the Anki card editor window directly or open the Anki browser focused on the card that was just updated.

---

## General Tab

This tab contains the most fundamental settings for how GSM receives input and general application behavior.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Websocket Enabled</span>
- **Tooltip**: Enable or disable WebSocket communication. Enabling this will disable the clipboard monitor.
- **Default Value**: `True`
- **Details**: This is one of the two primary methods for getting text into GSM. When enabled, GSM opens a WebSocket server that can receive text from other applications, most commonly a browser-based texthooker like the one built into GSM. This method is generally faster and more reliable than clipboard monitoring. This is the **recommended** method for input, and clipboard monitoring is disabled by default when this is on.
:::info
This setting is also available on the **Key Settings** tab.
:::

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Clipboard Enabled</span>
- **Tooltip**: Enable or disable Clipboard monitoring.
- **Default Value**: `True`
- **Details**: This is the second primary method for getting text into GSM. When enabled, GSM will constantly monitor your system's clipboard. Any time new text is copied, GSM will process it as a new line. Use this if your texthooking method doesn't support WebSockets. It's a reliable fallback but can be accidentally triggered.
:::info
This setting is also available on the **Key Settings** tab.
:::

<span style={{color: 'red', fontWeight: 'bold'}}>Allow Both Simultaneously</span>
- **Tooltip**: Enable to allow GSM to accept both clipboard and websocket input at the same time.
- **Default Value**: `False`
- **Details**: By default, GSM will prioritize one input method. This advanced setting allows both the WebSocket server and the clipboard monitor to be active at once. This can lead to duplicate entries if you are not careful (e.g., if your texthooker sends via WebSocket *and* copies to the clipboard). Only enable this for specific workflows that require simultaneous input from different sources.

<span style={{color: 'red', fontWeight: 'bold'}}>Merge Matching Sequential Text</span>
- **Tooltip**: Merges sequential text lines that appear to be part of the same sentence.
- **Default Value**: `False`
- **Details**: Some games send dialogue line-by-line or character-by-character. This feature attempts to merge these fragments into a single, complete sentence. It waits a short period for more text; if the new text is a continuation of the previous, it merges them. This is an advanced feature that may require tuning and can behave unpredictably depending on the game.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Websocket URI(s)</span>
- **Tooltip**: WebSocket URI for connecting. Allows Comma Separated Values for Connecting Multiple.
- **Default Value**: `localhost:6677,localhost:9001,localhost:2333` (Textractor, Agent, Luna)
- **Details**: Specifies the address(es) and port(s) for the WebSocket server(s) that GSM will listen to. You can provide a comma-separated list to listen to multiple sources (e.g., a texthooker and an OCR tool) simultaneously. The default value is set to listen on several common ports for texthooking tools.
:::info
This setting is also available on the **Key Settings** tab.
:::

**Texthook Replacement Regex**
- **Tooltip**: Regex to run replacement on texthook input, set this to the same as what you may have in your texthook page.
- **Default Value**: `""` (empty string)
- **Details**: Allows you to specify a Regular Expression (Regex) to automatically clean up incoming text before GSM processes it. This is useful for removing artifacts like control codes or speaker names. This should mirror any replacement rules you have set up in your texthooker.

**Open Config on Startup**
- **Tooltip**: Whether to open config when the script starts.
- **Default Value**: `False`
- **Details**: A convenience setting. If checked, this configuration window will automatically appear every time you launch GameSentenceMiner.

**Open GSM Texthooker on Startup**
- **Tooltip**: Whether to open Texthooking page when the script starts.
- **Default Value**: `True`
- **Details**: If checked, your default web browser will automatically open the built-in GSM texthooker page on startup.

**GSM Texthooker Port**
- **Tooltip**: Port for the Texthooker to run on. Only change if you know what you are doing.
- **Default Value**: `55000`
- **Details**: Specifies the network port for the built-in texthooker web page. You should only change this if the default port is already in use by another application on your system.

**Native Language**
- **Tooltip**: Your native language, used for AI translations and other features.
- **Default Value**: `English`
- **Details**: Select your native language from the dropdown. This is used primarily by the AI feature to know which language to translate the Japanese text into.

---

## Paths Tab

This tab is for configuring all the essential file and folder locations.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Folder to Watch</span>
- **Tooltip**: Path where the OBS Replays will be saved.
- **Default Value**: `~/Videos/GSM`
- **Details**: This is a critical path setting. It **must** point to the exact directory where OBS is configured to save its Replay Buffer files. The `~` symbol automatically expands to your user's home directory (e.g., `C:\Users\YourName` on Windows).
:::info
This setting is also available on the **Key Settings** tab.
:::

**Copy temp files to output folder**
- **Tooltip**: Copy temporary files (audio, screenshot) to the output folder.
- **Default Value**: `False`
- **Details**: When enabled, GSM will create a subfolder in your "Output Folder" for each mined word and copy the final audio and screenshot files into it. This is great for building an organized, long-term archive of your mined content outside of Anki.

**Open output folder on card creation**
- **Tooltip**: Open the output folder in your file explorer when a card is created.
- **Default Value**: `False`
- **Details**: A convenience feature that automatically opens the specific subfolder (created by the setting above) where the media for the newly mined card was just saved.

**Copy trimmed replay to output folder**
- **Tooltip**: Copy the trimmed video replay (containing just the mined line) to the output folder.
- **Default Value**: `False`
- **Details**: In addition to audio and screenshots, this will save a short video clip of the mined sentence to the word's output folder. Requires the "Copy temp files" setting to be enabled.

**Remove Video**
- **Tooltip**: Remove the source video from the "Folder to Watch" after processing.
- **Default Value**: `True`
- **Details**: If enabled, GSM will delete the original OBS replay video file after it has successfully processed it. This is highly recommended to save disk space and keep your watch folder clean.

---

## Anki Tab

This tab controls all interactions with Anki, including which fields to update and how to tag your cards.

**Update Anki**
- **Tooltip**: Automatically update Anki with new data.
- **Default Value**: `True`
- **Details**: The master switch for all Anki integration. If disabled, GSM will process media but will not attempt to connect to Anki or update any cards.

<span style={{color: 'red', fontWeight: 'bold'}}>Show Update Confirmation Dialog</span>
- **Tooltip**: Show a confirmation dialog before updating an Anki card.
- **Default Value**: `False`
- **Details**: When enabled, a pop-up window will appear before each Anki update. This dialog allows you to:
    - Edit the sentence and translation.
    - Choose a different screenshot using the Screenshot Selector.
    - Generate Text-to-Speech (TTS) audio instead of using the game audio.
    - Decide whether to include audio at all.
    - Add an "NSFW" tag to the card.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Anki URL</span>
- **Tooltip**: The URL to connect to your Anki instance.
- **Default Value**: `http://127.0.0.1:8765`
- **Details**: The address for the AnkiConnect add-on, which allows GSM to communicate with Anki. The default value should work for most users. You must have the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on installed and Anki running.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Field Mappings</span>
- **Details**: These fields are the core of the Anki integration. You must enter the **exact names** (case-sensitive) of the fields from your Anki Note Type that you want GSM to populate.
    - **Sentence Field**: `Default: "Sentence"`
    - **Sentence Audio Field**: `Default: "SentenceAudio"`
    - **Picture Field**: `Default: "Picture"`
    - **Word Field**: `Default: "Expression"`
    - **Previous Sentence Field**: `Default: ""` (empty)
    - **Previous Image Field**: `Default: ""` (empty)
    - **Video Field**: `Default: ""` (empty)
    - **Game Name Field**: `Default: ""` (empty)
:::info
The main four fields are also available on the **Key Settings** tab.
:::

**Add Tags**
- **Tooltip**: Comma-separated custom tags for the Anki cards.
- **Default Value**: `GSM`
- **Details**: Tags listed here (comma-separated) will be added to every Anki card that GSM updates.

<span style={{color: 'green', fontWeight: 'bold'}}>Tags to work on</span>
- **Tooltip**: Comma-separated Tags, script will only do 1-click on cards with these tags...
- **Default Value**: (empty)
- **Details**: This setting acts as a filter. If empty, GSM targets the most recently created Anki card. If filled (e.g., `_mining`), GSM will only operate on cards that already have that specific tag.

<span style={{color: 'green', fontWeight: 'bold'}}>Add Game as Tag</span> & <span style={{color: 'green', fontWeight: 'bold'}}>Game Parent Tag</span>
- **Tooltip (Add Game)**: Include a tag for the game on the Anki card.
- **Tooltip (Parent Tag)**: Parent tag for the Game Tag...
- **Default Value (Add Game)**: `True`
- **Default Value (Parent Tag)**: `Game`
- **Details**: These settings work together to automatically organize cards by game. The "Current Game" is determined by your active OBS Scene. For example, if `Parent Tag` is `Game` and the current scene is `FinalFantasyX`, the resulting Anki tag will be `Game::FinalFantasyX`, creating a nested tag in Anki.

**Overwrite Audio / Overwrite Picture**
- **Tooltip**: Overwrite existing audio/pictures in Anki cards.
- **Default Value (Audio)**: `False`
- **Default Value (Picture)**: `True`
- **Details**: If enabled, GSM will replace any existing content in the respective field. If disabled, it will not add new media if the field is already filled.

**Multi-line Mining Overwrite Sentence**
- **Tooltip**: When using Multi-line Mining, overwrite the sentence with a concatenation of the lines selected.
- **Default Value**: `True`
- **Details**: When using the multi-line mining feature, this setting, if enabled, will join the selected lines and overwrite the content of the `Sentence Field` in Anki.

---

## VAD Tab

This tab contains settings for Voice Activity Detection (VAD), which automatically trims audio clips to isolate spoken dialogue.

**Voice Detection Postprocessing**
- **Tooltip**: Enable post-processing of audio to trim just the voiceline.
- **Default Value**: `True`
- **Details**: This is the master switch for VAD. When enabled, it will use the models and settings on this tab to intelligently find and trim the audio. If disabled, GSM takes a raw audio slice based on offsets.

**Language**
- **Tooltip**: Select the language for VAD.
- **Default Value**: `ja` (Japanese)
- **Details**: This hint helps the VAD models (especially Whisper) more accurately detect speech in the target language.

**Whisper Model**
- **Tooltip**: Select the Whisper model size for VAD.
- **Default Value**: `base`
- **Details**: Determines the size and accuracy of the local Whisper model. Larger models (`small`, `medium`) are more accurate but slower and require more resources. `tiny` and `base` are faster.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Select VAD Model</span>
- **Tooltip**: Select which VAD model to use.
- **Default Value**: `WHISPER`
- **Details**: The primary engine for voice detection.
    - **WHISPER**: Highly accurate transcription-based VAD. Can be slow depending on the model size and your hardware.
    - **SILERO**: Very fast, lightweight, and language-agnostic VAD. Less accurate than Whisper but excellent for speed.

**Backup VAD Model**
- **Tooltip**: Select which model to use as a backup if no audio is found.
- **Default Value**: `OFF`
- **Details**: If the primary VAD model fails to find speech, GSM can try again with this backup model. A common strategy is to use the accurate `WHISPER` model first, then fall back to the fast `SILERO` model if Whisper fails.

**Add Audio on No Results**
- **Tooltip**: Add audio even if no results are found by VAD.
- **Default Value**: `False`
- **Details**: If enabled, and if both primary and backup VAD models find no speech, GSM will save the original, untrimmed audio clip instead of failing.

**Use TTS as Fallback / TTS URL**
- **Tooltip (TTS)**: Use Text-to-Speech if no voice activity is detected.
- **Tooltip (URL)**: The URL for the TTS service.
- **Default Value (TTS)**: `False`
- **Default Value (URL)**: `http://127.0.0.1:5050/?term=$s`
- **Details**: If VAD fails to find any speech, GSM can generate audio using a Text-to-Speech service. The `$s` in the URL is a placeholder that will be replaced with the sentence text. This is compatible with services like the popular [Game TTS](https://github.com/leokik/game-tts) server.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Audio End Offset</span>
- **Tooltip**: Offset in seconds from end of the video to extract.
- **Default Value**: `0.5`
- **Details**: This setting defines the length of the **initial audio clip** that is fed into the VAD model. It is added to the duration of the video replay segment. A value of `0.5` means the clip will be half a second longer than the detected speech segments.
:::info
This setting is also available on the **Key Settings** tab.
:::

**Trim Beginning / Beginning Offset**
- **Tooltip**: Beginning offset after VAD Trim...
- **Default Value (Trim Beginning)**: `False`
- **Default Value (Beginning Offset)**: `-0.25`
- **Details**: After VAD finds the start of the speech, this lets you fine-tune it. A small negative offset (like the default `-0.25`s) is useful to add a tiny bit of silence before the speech begins, ensuring the sound isn't clipped. This only applies if "Trim Beginning" is checked.

**Cut and Splice Segments / Padding**
- **Tooltip**: Cut Detected Voice Segments and Paste them back together...
- **Default Value (Cut and Splice)**: `False`
- **Default Value (Padding)**: `0.1`
- **Details**: An advanced feature for audio clips with multiple pauses. When enabled, VAD finds all distinct speech segments, cuts them out, and stitches them together into one file, with a silence of `Padding` seconds between each segment.
:::info
This setting is also available on the **Key Settings** tab.
:::

---

## Features Tab

This tab controls various automated behaviors and quality-of-life features.

**Notify on Update**
- **Tooltip**: Notify the user when an update occurs.
- **Default Value**: `True`
- **Details**: If enabled, GSM shows a system notification pop-up whenever it successfully updates an Anki card.

**Open Anki Edit / Open Anki Note in Browser**
- **Tooltip**: Automatically open Anki for editing... / Open Anki note in browser...
- **Default Value (Edit)**: `False`
- **Default Value (Browser)**: `True`
- **Details**: Provides immediate feedback. After updating a card, GSM can open the Anki card editor window, or open the Anki browser focused on the card that was just updated.
:::info
This setting is also available on the **Key Settings** tab.
:::

**Browser Query**
- **Tooltip**: Query to use when opening Anki notes in the browser. Ex: 'Added:1'
- **Default Value**: `""` (empty string)
- **Details**: When "Open Anki Note in Browser" is enabled, this Anki search query determines which cards are shown. An empty query will default to showing the single card that was just modified. A query like `added:1` would show all cards added in the last day.

**Generate LongPlay**
- **Tooltip**: Generate a LongPlay video using OBS recording, and write to a .srt file with all the text coming into gsm. RESTART REQUIRED FOR SETTING TO TAKE EFFECT.
- **Default Value**: `False`
- **Details**: An experimental feature. When enabled, GSM will start a continuous recording in OBS alongside the replay buffer. It will also generate an `.srt` subtitle file containing all the text received by GSM, with timestamps synchronized to the video. Requires a restart of GSM to take effect.

---

## Screenshot Tab

This tab controls everything related to capturing, processing, and timing screenshots.

**Enabled**
- **Tooltip**: Enable or disable screenshot processing.
- **Default Value**: `True`
- **Details**: The master switch for all screenshot functionality.

**Width / Height / Quality / Extension**
- **Details**: These settings control the final output of the image.
    - **Width/Height**: `Default: 0`. A value of `0` or `-1` maintains the original aspect ratio while resizing the other dimension.
    - **Quality**: `Default: 85`. For lossy formats like `jpeg` and `webp`, controls compression (0-100).
    - **Extension**: `Default: "webp"`. `webp` or `avif` are recommended for a good balance of quality and file size. `png` offers lossless quality at a larger size.

**Animated**
- **Tooltip**: Create an animated screenshot instead of a static image.
- **Default Value**: `False`
- **Details**: When enabled, GSM will create a short, looping video clip (in AVIF format) instead of a single image. The duration of the clip is determined by the VAD results.

<details>
<summary>Example</summary>

![Animated Screenshot Example](assets/settings/animated.avif)

This is what an animated screenshot looks like when the "Animated" setting is enabled. It creates a short, looping clip of the scene instead of a single frame.

</details>


<span style={{color: 'red', fontWeight: 'bold'}}>FFmpeg Reencode Options</span>
- **Tooltip**: Custom FFmpeg options for re-encoding screenshots.
- **Default Value**: `""` (empty string)
- **Details**: For advanced users. This field allows you to provide your own FFmpeg command-line arguments for image conversion, overriding the basic settings above.

**Screenshot Timing & <span style={{color: 'darkorange', fontWeight: 'bold'}}>Screenshot Offset</span>**
- **Tooltip (Timing)**: Select when to take the screenshot relative to the line: beginning, middle, or end.
- **Tooltip (Offset)**: Time in seconds to offset the screenshot from the selected timing point.
- **Default Value (Timing)**: `beginning`
- **Default Value (Offset)**: `1.0`
- **Details**: These settings are crucial for getting the perfect screenshot. The final timestamp is calculated based on the timing anchor plus the offset.
    - **Example 1**: With default settings (`beginning`, `1.0`), the screenshot is taken 1.0 second *after* the line appeared.
    - **Example 2**: To take a screenshot right as a line disappears, you could set Timing to `end` and Offset to `0.0`.

**Use Screenshot Selector for every card**
- **Tooltip**: Enable to use the screenshot selector to choose the screenshot point on every card.
- **Default Value**: `False`
- **Details**: If enabled, a manual frame-by-frame screenshot selection tool will pop up for every single card, allowing you to choose the exact frame you want.

**Screenshot Hotkey Updates Anki**
- **Tooltip**: Enable to allow Screenshot hotkey/button to update the latest anki card.
- **Default Value**: `False`
- **Details**: If enabled, using the "Take Screenshot" hotkey will not only save a screenshot but also attempt to add it to the most recently updated Anki card.

---

## Audio Tab

This tab controls the specifics of audio extraction and processing.

**Enabled**
- **Tooltip**: Enable or disable audio processing.
- **Default Value**: `True`
- **Details**: The master switch for all audio functionality.

**Audio Extension**
- **Tooltip**: File extension for audio files.
- **Default Value**: `opus`
- **Details**: The audio format for the final clip. `opus` is highly recommended for its excellent compression and quality.

<span style={{color: 'darkorange', fontWeight: 'bold'}}>Audio Extraction Beginning Offset</span>
- **Tooltip**: Offset in seconds from beginning of the video to extract (Should Usually be negative or 0).
- **Default Value**: `-0.5`
- **Details**: This critical setting adjusts the start time of the initial audio slice relative to when the line was registered. Since the replay buffer captures video *before* you trigger it, this value is almost always **negative**. It determines how much time *before* the registered line is included in the audio clip, ensuring the beginning of the speech is not cut off.
:::info
This setting is also available on the **Key Settings** tab.
:::

<span style={{color: 'red', fontWeight: 'bold'}}>Audio Extraction End Offset (Pre-VAD)</span>
- **Tooltip**: Offset in seconds to trim from the end before VAD processing starts.
- **Default Value**: `0.0`
- **Details**: An advanced parameter that shortens the initial audio clip *from the end* before it's sent to VAD. The default of `0.0` does nothing. A positive value can be useful for getting extra audio audio after the speech ends, while a negative value can help remove unwanted noise or echoes at the end.
:::info
This setting is also available on the **Key Settings** tab.
:::

<span style={{color: 'red', fontWeight: 'bold'}}>FFmpeg Reencode Options</span> & FFmpeg Preset Options
- **Tooltip**: Custom FFmpeg options... / Select a preset FFmpeg option...
- **Default Value**: (Varies by OS, typically includes a fade-in)
- **Details**: These control how the final, trimmed audio clip is encoded.
    - **Preset Options**: A dropdown of tested FFmpeg commands for common tasks like normalizing volume (`loudnorm`) or adding a fade-in to prevent clipping (the default behavior). This is the recommended way to set these options.
    - **Reencode Options**: If you select "Custom" from the presets, you can write your own FFmpeg command here for full control.

<span style={{color: 'green', fontWeight: 'bold'}}>External Audio Editing Tool</span>
- **Tooltip**: Path to External tool that opens the audio up for manual trimming...
- **Default Value (Path)**: `""` (empty string)
- **Default Value (Enabled)**: `True`
- **Details**: Allows integration of a third-party audio editor. If a path is provided and this is enabled, GSM will open the trimmed audio file in the specified program (e.g., OcenAudio, Audacity) for manual review before saving to Anki. The "Install Ocenaudio" button can set this up automatically.
:::info
This setting is also available on the **Key Settings** tab.
:::

<span style={{color: 'green', fontWeight: 'bold'}}>Anki Media Collection</span>
- **Tooltip**: Path of the Anki Media Collection, used for external Trimming tool.
- **Default Value**: `""` (empty string)
- **Details**: This should be the full path to your `collection.media` folder inside your Anki profile directory. It's used by the External Audio Editing Tool feature to save the file in the correct place. The "Get Anki Media Collection" button can find and set this path for you.

---

## OBS Tab

This tab controls the integration with OBS (Open Broadcaster Software).

**Open OBS / Close OBS**
- **Tooltip**: Open OBS when GSM starts / Close OBS when GSM closes.
- **Default Value (Open)**: `True`
- **Default Value (Close)**: `True`
- **Details**: Convenience settings to manage the OBS application alongside GSM.

**OBS Path**
- **Tooltip**: Path to the OBS executable.
- **Default Value**: (auto-detected path)
- **Details**: The path to your `obs64.exe` (or equivalent). GSM will attempt to find this automatically, but you can specify it manually if needed.

**Host / Port / Password**
- **Details**: These settings are for connecting to the OBS WebSocket plugin, which must be enabled in OBS (`Tools > WebSocket Server Settings`). The values here must match your OBS configuration.
    - **Host**: `Default: "127.0.0.1"`
    - **Port**: `Default: 7274`
    - **Password**: `Default: "your_password"` (**You must change this to your actual OBS WebSocket password!**)

**Minimum Replay Size (KB)**
- **Tooltip**: Minimum Replay Size for OBS Replays in KB. If Replay is Under this, Audio/Screenshot Will not be grabbed.
- **Default Value**: `0`
- **Details**: A filter to prevent processing of empty or corrupted replay files. If a new replay video is smaller than this size in kilobytes, GSM will ignore it. A value of 0 disables this check.

**Automatically Manage Replay Buffer**
- **Tooltip**: Automatically start/stop the OBS replay buffer based on whether a game is detected.
- **Default Value**: `True`
- **Details**: To save system resources, GSM can automatically start the replay buffer when it detects video output from a game source and stop it after a period of inactivity (e.g., a black screen).

---

## Profiles Tab

This tab allows you to manage multiple configurations for different games or use cases.

**Select Profile**
- **Tooltip**: Select a profile to load its settings.
- **Details**: The dropdown shows all your saved profiles. Selecting a profile immediately loads all its associated settings across all tabs. The `Default` profile cannot be deleted.

**Add / Copy / Delete Profile**
- **Details**:
    - **Add Profile**: Creates a new profile based on the default settings.
    - **Copy Profile**: Creates a duplicate of the currently selected profile.
    - **Delete Profile**: Deletes the currently selected profile (except for `Default`).

**OBS Scene (Auto Switch Profile)**
- **Tooltip**: Select an OBS scene to associate with this profile. (Optional)
- **Details**: This is the core of the auto-profile switching feature. Here, you can link one or more OBS scenes to the current profile. When OBS switches to any of the selected scenes, GSM will automatically activate this profile. You can select multiple scenes by holding `Ctrl` or `Shift`.

**Switch to Default if Scene Not Found**
- **Tooltip**: If no profile matches the current OBS scene, switch to the 'Default' profile.
- **Default Value**: `True`
- **Details**: If you switch to an OBS scene that isn't linked to any specific profile, this setting determines the fallback behavior. If enabled, GSM will switch to your `Default` profile. If disabled, it will remain on the last active profile.

---

## AI Tab

This tab configures generative AI features, such as automatic translations or context generation.

**Enabled**
- **Tooltip**: Enable or disable AI integration.
- **Default Value**: `False`
- **Details**: Master switch for AI features. Requires an internet connection and a valid API key.

**Provider, Model, and API Key**
- **Details**: Choose your AI service, the specific model, and enter your secret API key.
    - **Provider**: `Default: 'Gemini'`. Choose between Google Gemini, Groq, or any OpenAI-compatible API (like a local LLM server).
    - **Gemini Model**: `Default: 'gemini-2.5-flash-lite'`. Select the desired Google model.
    - **Groq Model**: `Default: 'meta-llama/llama-4-scout-17b-16e-instruct'`. Select the desired Groq model.
    - **OpenAI URL/Model/API Key**: For local models or other services that use the OpenAI API format.
    - **API Key Fields**: Enter your secret API key for the chosen provider.

**Anki Field**
- **Tooltip**: Field in Anki for AI-generated content.
- **Default Value**: `""` (empty string)
- **Details**: The name of the Anki field where the output from the AI will be placed (e.g., a `Translation` or `AI_Context` field).

**Use Canned... / Custom Prompt**
- **Details**: This controls the instructions given to the AI.
    - **Use Canned Translation Prompt**: A pre-written, optimized prompt for translating game dialogue.
    - **Use Canned Context Prompt**: A pre-written prompt for generating a brief summary of the scene.
    - **Custom Prompt**: If neither canned prompt is selected, you can write your own instructions for the AI in this text box. The game dialogue will be appended to your custom prompt.

**Dialogue Context Length**
- **Tooltip**: Number of preceding and succeeding lines to include as context for the AI.
- **Default Value**: `10`
- **Details**: To improve translation quality, GSM can send surrounding lines of dialogue to the AI for context. This value controls how many lines before and after the current line are included. A value of `-1` sends all available lines. A value of `0` sends no context.

---

## Advanced Tab

This tab contains miscellaneous settings for advanced users or niche workflows.

**Audio Player Path / Video Player Path**
- **Tooltip**: Path to the audio/video player executable.
- **Default Value**: `""` (empty string)
- **Details**: Specify a media player (like MPC-HC or VLC) to quickly preview your content using the hotkey below. The video player option will even seek to the correct timestamp in the original replay file.

**Hotkeys**
- **Details**: Configure keyboard shortcuts for various actions.
    - **Play Latest Video/Audio Hotkey**: `Default: 'f7'`
    - **Take Screenshot Hotkey**: `Default: 'f6'`
    - **Reset Line Hotkey**: `Default: 'f5'`

**Multi-line Mining Settings**
- **Details**: These control the behavior of the multi-line mining feature.
    - **Multi-line Line-Break**: `Default: '<br>'` (The character(s) to insert between joined sentences).
    - **Multi-Line Sentence Storage Field**: `Default: ""` (A temporary field in Anki to hold the combined text, if needed by your workflow).

**Websocket Ports**
- **Details**: Configure ports for advanced communication features.
    - **OCR WebSocket Port**: `Default: 9002` (Port for receiving text from external OCR tools).
    - **Texthooker Communication WebSocket Port**: `Default: 55001`
    - **Plaintext Websocket Export Port**: `Default: 55002`

---

## Overlay Tab

This tab configures the experimental real-time text overlay feature.

**Websocket Port**
- **Tooltip**: The port the overlay WebSocket server will run on.
- **Default Value**: `55499`
- **Details**: The port that the GSM Overlay client will connect to. This should match the setting in the overlay application. This should likely not be changed.

**Overlay Monitor**
- **Tooltip**: The monitor to capture for the overlay.
- **Default Value**: `Monitor 1`
- **Details**: Select which of your monitors the game is running on. The overlay will capture this monitor to perform OCR.

**Overlay Engine**
- **Tooltip**: The OCR engine to use for the overlay.
- **Default Value**: `lens`
- **Details**:
    - **lens (Google Lens)**: Slower but highly accurate. It sends a screenshot to Google's servers for processing.
    - **oneocr**: A fast, local OCR engine. It's less accurate than Lens but runs entirely on your machine and is much quicker.

**Scan Delay**
- **Tooltip**: Delay in seconds between receiving a text hook and performing the screen scan.
- **Default Value**: `0.25`
- **Details**: Adds a small delay to ensure the text has fully rendered on screen before the OCR scan happens. Increase this for games with slow-scrolling or animated text.

**Periodic Scanning**
- **Tooltip**: Periodically scan the screen for text even without a texthook event.
- **Default Value**: `False`
- **Details**:
    - **Periodic**: If enabled, GSM will continuously scan the screen for text at the specified interval.
    - **Periodic Interval**: The time in seconds between each periodic scan.
    - **Periodic Ratio**: A similarity threshold (0.0 to 1.0). A new scan's text must be less than this similar to the previous scan's text to be sent to the overlay, preventing spam.

**Minimum Character Size**
- **Tooltip**: The minimum size (in pixels) for a character to be detected by the OCR.
- **Default Value**: `0`
- **Details**: This is a filter to ignore small, irrelevant text on screen. It acts as a simple furigana filter. You can use the "Minimum Character Size Finder" tool to help determine an appropriate value for your game. A value of `0` disables the filter.

**Manual Scan Hotkey**
- **Tooltip**: Hotkey to manually trigger a screen scan for text.
- **Default Value**: `F8`
- **Details**: Pressing this hotkey will immediately capture the screen and perform an OCR scan, sending any detected text to the overlay. Useful for testing or capturing text outside of normal texthook events, or if the normal scan didn't catch everything.