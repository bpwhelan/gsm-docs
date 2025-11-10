---
title: Installing GSM on macOS
sidebar_label: macOS
sidebar_position: 4
---

# GameSentenceMiner on macOS

Welcome, Mac users! Thanks to the dedicated troubleshooting of our community members, we now have a working build of GameSentenceMiner for macOS.

:::note
Mac support is new and considered experimental. While core functionalities like OCR and Anki integration are working, some features available on Windows/Linux are limited or non-functional. Please be aware of the known issues listed at the bottom of this guide.
:::

## 1. Prerequisites

Before you begin, you'll need to install several key pieces of software. We highly recommend using [Homebrew](https://brew.sh/), the package manager for macOS, to install them.

-   **Homebrew**: If you don't have it, open your Terminal and run:
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
-   **Python 3.11**: GSM requires 3.10, 3.11, 3.12, or 3.13 to function. GSM on Windows runs on 3.11 by default, so I recommend using it. Install it and the necessary `tkinter` package with Homebrew:
    ```sh
    brew install python@3.11 python-tk@3.11
    ```
-   **FFmpeg**: This is required for processing audio and video from your game footage.
    ```sh
    brew install ffmpeg
    ```
-   **OBS Studio**: Used for capturing your game screen for OCR. Download and install it from the [official website](https://obsproject.com/).
-   **Anki**: The flashcard application. Download and install it from the [official website](https://apps.ankiweb.net/).
    -   You must also install the **AnkiConnect** add-on within Anki (`Tools` > `Add-ons` > `Get Add-ons...`). Use the code: **`2055492159`**

## 2. OBS Configuration

GSM connects to OBS to capture the screen. You must configure OBS correctly for this to work.

1.  **Enable the WebSocket Server**:
    -   In OBS, go to `Tools` -> `WebSocket Server Settings`.
    -   Check `Enable WebSocket Server`.
    -   **Important**: Uncheck `Enable Authentication`. For now, GSM's connection on macOS works best with authentication turned off.
    -   Change the server port to '7274' (the default GSM port).
    -   Click `OK` to save the settings.

2.  **Enable the Replay Buffer**:
    -   Go to `Settings` -> `Output`.
    -   Go to the `Replay Buffer` Section.
    -   Check `Enable Replay Buffer`.
    -   Set the `Maximum Replay Time` to at least `60` seconds for the best results. (Recommended 300 seconds for more flexibility.)

3.  **Set Up Your Scenes**:
    -   Create a scene in OBS that captures your game window or full screen.
    -   Ensure that the game is visible in the preview window.
    -   Ensure that Audio is being captured so you can get Sentence Audio into your cards.

## 3. GameSentenceMiner Installation

Now you can install the GSM application itself.

1.  **Download the `.dmg` file**:
    -   Go to the [latest GSM release on GitHub](https://github.com/bpwhelan/GameSentenceMiner/releases/latest).
    -   Download the asset ending in `-arm64.dmg` or `.dmg`.

2.  **Install the Application**:
    -   Open the downloaded `.dmg` file.
    -   Drag the `GameSentenceMiner.app` icon into your `Applications` folder.
    - Is this correct?

3.  **Remove the Quarantine Attribute**:
    -   macOS Gatekeeper will likely block the app from running because it's from an "unidentified developer." You must manually remove the quarantine flag.
    -   Open your **Terminal** and run the following command:
    ```sh
    xattr -d com.apple.quarantine /Applications/GameSentenceMiner.app
    ```
    :::warning
    You must perform this step. Otherwise, you will see an error message saying "GameSentenceMiner.app is damaged and can’t be opened." The app is not damaged; this is just standard macOS security. Code Signing costs money, and I am not willing to pay for it at this time.
    :::

4.  **First Launch**:
    -   You can now launch GameSentenceMiner from your Applications folder.
    -   On the first run, it will set up a Python virtual environment and install all necessary dependencies. This may take a few minutes.

## Known Issues & Workarounds

-   **Game Overlay is NOT functional.** Maybe it will be in the future, but currently, the overlay feature does not work on macOS.
    -   **Workaround:** Use the **Texthooker Page** for mining. You can access it from the GSM main window. This provides the same core functionality for viewing OCR'd text and creating cards.

-  **You must setup OBS Scenes Yourself.** The automatic OBS scene setup feature is not functional on macOS.
    -   **Workaround:** Manually create the necessary scenes in OBS. Refer to the [OBS Configuration](#2-obs-configuration) section for guidance.

-   **Global Hotkeys do not work.** The Python `keyboard` library has limitations on macOS that prevent global hotkeys from being registered without special permissions.
    -   **Workaround:** Use the GUI buttons (e.g., "Start AutoOCR," "Manual OCR") inside the GSM app to control OCR.

-   **App Menu Bar & Tray Icon have limited functionality.** The standard macOS menu bar options (File, Edit, etc.) are not fully implemented. The option to check for updates may not be present.
    -   **Workaround:** To update the app, you will likely need to download the latest `.dmg` file from the GitHub releases page and reinstall it.

-   **Auto-Update may not work.** While an auto-update prompt might appear, the update process has not been confirmed to work reliably on macOS. Please update manually by grabbing the latest release from the GitHub releases page for now.

## Feedback & Support
If you encounter any issues or have suggestions for improving the macOS experience, please open an issue on the [GitHub repository](https://github.com/bpwhelan/GameSentenceMiner/issues), or join the [Discord server](https://discord.gg/yP8Qse6bb8) to discuss with other users and the developer.