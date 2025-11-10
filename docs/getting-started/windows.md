---
title: Installing GSM on Windows
sidebar_label: Windows
sidebar_position: 2
---

# GameSentenceMiner on Windows

GSM is primarily developed for Windows and offers the most complete feature set on this platform.

## Prerequisites

Before installing GSM, you'll need to have the following software installed:

### Required Software

1. **Anki** - The flashcard application
   - Download from the [official website](https://apps.ankiweb.net/)
   - Install the **AnkiConnect** add-on (`Tools` > `Add-ons` > `Get Add-ons...`)
   - Use the code: **`2055492159`**

2. **Yomitan** (Browser Extension) - For creating Anki cards from text
   - Install from your browser's extension store
   - [Chrome/Edge](https://chromewebstore.google.com/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/yomitan/)

### Optional but Recommended

- **A Texthooker** - For extracting text from games
  - [Agent](https://github.com/0xDC00/agent) - Recommended for modern games
  - [Textractor](https://github.com/Artikash/Textractor) - Works with older games
  - [LunaTranslator](https://github.com/HIllya51/LunaTranslator) - All-in-one solution

## Installation

1. **Download GSM**
   - Go to the [latest release on GitHub](https://github.com/bpwhelan/GameSentenceMiner/releases/latest)
   - Download the `.exe` installer for Windows

2. **Run the Installer**
   - Double-click the downloaded `.exe` file
   - Follow the installation wizard
   - GSM will be installed to `C:\Users\{YOUR_USER}\AppData\Local\Programs\GameSentenceMiner\`

3. **First Launch**
   - On first run, GSM will automatically set up a Python virtual environment
   - This process may take a few minutes
   - Once complete, the main GSM window will appear

## OBS Configuration

GSM uses OBS Studio to capture game footage, screenshots, and audio. A lot of these settings should be configured automatically, but please verify/configure the following:

### 1. Enable WebSocket Server

1. In OBS, go to `Tools` → `WebSocket Server Settings`
2. Check **Enable WebSocket Server**
3. Set **Server Port** to `7274` (GSM's default)
4. **Uncheck** "Enable Authentication" (or note the password and enter it in GSM's settings)
5. Click **OK** to save

### 2. Enable Replay Buffer

The Replay Buffer allows GSM to save audio and screenshots retroactively when you create a card.

1. Go to `Settings` → `Output`
2. Go to the **Replay Buffer** section.
3. Check **Enable Replay Buffer**
4. Set **Maximum Replay Time** to at least **300 seconds** (5 minutes recommended)
5. Click **OK** to save

:::tip
GSM can automatically start/stop the replay buffer when it detects game activity. You don't need to start it manually.
:::

### 3. Set Up Your First Game

GSM includes a wizard to help you set up OBS scenes for your games:

1. In the GSM main window, go to the **Home** tab
2. Select your game from the dropdown and click either **Window Capture** or **Game Capture**
    - **Window Capture** is more compatible but may have performance issues with some games
    - **Game Capture** is more efficient but may not work with all games
3. If this is your first scene, say "Yes" to let GSM create auto scene switching.
4. Verify the OBS scene was created and configured correctly.

Alternatively, you can manually create a scene in OBS:
1. Click the **+** button under **Scenes**
2. Add a **Window Capture** or **Game Capture** source
3. Select your game window
4. Ensure audio is being captured in the **Audio Mixer**

## AnkiConnect Configuration

1. Open Anki
2. Go to `Tools` → `Add-ons`
3. Select **AnkiConnect**
4. Click **Config** and verify the settings:

```json
{
    "enabled": true,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765
}
```

5. Restart Anki if you made any changes

## Connecting a Texthooker

GSM can receive text from texthookers via clipboard monitoring or WebSocket connections.

### Method 1: Websocket (Recommended)

GSM is preconfigured to receive text via Websocket on ports `9001` ([Agent](https://github.com/0xDC00/agent)), `6677` ([textractor-websocket](https://github.com/sadolit/textractor-websocket)), and `2333` ([Luna Translator](https://github.com/HIllya51/LunaTranslator)). If you need to change these ports, you can do so in GSM's settings.

1. In GSM, go to `Settings` → `General`
2. Enable **WebSocket**
3. Configure your texthooker to connect to GSM:
   - **Agent**: Enable Websocket, and make sure the WebSocket URL is set to `ws://localhost:9001`
   - **Textractor**: Use the [textractor-websocket plugin](https://github.com/sadolit/textractor-websocket)
   - **LunaTranslator**: `Core Settings` -> `Others` -> `Network Service` -> `Enable` and make sure the port is set to `2333`

### Method 2: Clipboard Monitoring

1. In GSM, go to `Settings` → `General`
2. Enable **Clipboard Monitoring**
3. Configure your texthooker to copy text to clipboard
   - **Agent**: Enable "Auto Copy"
   - **Textractor**: Enable "Auto Copy to Clipboard"
   - **LunaTranslator**: `Core Settings` -> `Clipboard` -> `Auto Output Text`

## Verification

To verify everything is working:

1. **OBS Connection**: Check the Home tab - the OBS status indicator should be green
2. **Anki Connection**: The Anki status indicator should also be green
3. **Text Reception**: Start your texthooker and game - text should appear in GSM's texthooker page (accessible at `localhost:55000/texthooker` by default)

## Next Steps

- Check out the [Guides](/docs/guides) section for help with specific features
- Learn how to use [AI Features](/docs/guides/ai-features) for automatic translations
- Fix [Incomplete Sentences](/docs/guides/incomplete-sentences) in your Anki cards
- Visit [Troubleshooting](/docs/troubleshooting) if you encounter any issues

## Getting Help

If you run into issues:
- Join the [Discord server](https://discord.gg/yP8Qse6bb8)
- Check the [Troubleshooting](/docs/troubleshooting) page
- Open an issue on [GitHub](https://github.com/bpwhelan/GameSentenceMiner/issues)
