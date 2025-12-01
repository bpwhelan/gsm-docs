---
title: Installing GSM on Linux
sidebar_label: Linux
sidebar_position: 3
---

# GameSentenceMiner on Linux

This guide provides instructions for setting up GameSentenceMiner on Linux. Please note that while GSM is functional on Linux, support is considered experimental. The user experience may vary depending on your distribution and desktop environment (X11 vs. Wayland).

:::note
Linux support is a work in progress. Core features like OCR and Anki integration are operational, but some functionalities available on Windows are limited or require manual setup.

These Instructions are built from testing and chatting with users on various distros. If you encounter issues or have suggestions for improving the Linux experience, please open an issue on the [GitHub repository](https://github.com/bpwhelan/GameSentenceMiner/issues) or edit this document directly at the bottom of the page.
:::

## 1. Prerequisites (System Packages)

You must install several dependencies using your distribution's package manager. The required packages differ slightly between distributions.

#### For Debian / Ubuntu-based Distributions:

```sh
sudo apt update
sudo apt install ffmpeg python3-venv python3-pip libfuse2 xclip
```

#### For Fedora / Nobara / Arch-based Distributions:

Package names may vary. These are common names for Fedora.

```sh
sudo dnf install ffmpeg python3-devel gcc libevdev-devel xclip
```
*(Note: Arch users may need to find equivalent packages in the official repositories or the AUR.)*

-   `libfuse2`: Required by the AppImage format on many modern distributions.
-   `xclip`: Used for clipboard-related functionality.

#### For Arch Linux Users:

NEEDS VERIFICATION:

```sh
sudo pacman -S ffmpeg gcc libevdev xclip fuse2
```

## 2. OBS Studio Configuration

GSM uses OBS Studio for screen capture, which is essential for OCR, screenshots, and audio recording.

1.  **Install OBS Studio**: Install it from your distribution's software center or as a Flatpak. The Flatpak version is often recommended as it comes with most features pre-packaged. Ensure it includes the **OBS WebSocket** plugin (most recent versions do by default).

2.  **Configure WebSocket Server**:
    -   In OBS, go to `Tools` -> `WebSocket Server Settings`.
    -   Check `Enable WebSocket Server`.
    -   **Important**: Uncheck `Enable Authentication`. GSM's connection on Linux/macOS works best with authentication disabled.
    -   Set the `Server Port` to `7274` to match GSM's default.

3.  **Enable Replay Buffer**: This is crucial for creating flashcards with audio and screenshots.
    -   Go to `Settings` -> `Output`.
    -   Set `Output Mode` to `Advanced`.
    -   Navigate to the `Replay Buffer` tab.
    -   Check `Enable Replay Buffer`.
    -   Set `Maximum Replay Time` to at least `300` seconds.

:::warning[Manual Scene Setup Required]
The "Setup New Game" and game capture buttons on GSM's Home tab **do not work on Linux**. You must manually create a new Scene in OBS and add a source (e.g., "Screen Capture" for Wayland, or "Window Capture" for X11) to capture your game.
:::

## 3. Anki Configuration

1.  **Install Anki**: Download Anki from the [official website](https://apps.ankiweb.net/).
2.  **Install AnkiConnect**: In Anki, go to `Tools` > `Add-ons` > `Get Add-ons...` and enter the code: **`2055492159`**.
3.  **(For Wayland Users)**: Anki may require a specific environment variable to run correctly on Wayland. You may need to launch it from the terminal with:
    ```sh
    export ANKI_WAYLAND=1 && anki
    ```

## 4. GameSentenceMiner Installation

The recommended method for Linux is using the provided AppImage.

1.  **Download the AppImage**: Go to the [latest GSM release on GitHub](https://github.com/bpwhelan/GameSentenceMiner/releases/latest) and download the `.AppImage` file.

2.  **Make it Executable**: Open a terminal in the directory where you downloaded the file and run:
    ```sh
    chmod +x GameSentenceMiner-*.AppImage
    ```

3.  **Run GameSentenceMiner**:
    ```sh
    ./GameSentenceMiner-*.AppImage
    ```
    On the first launch, GSM will create a Python virtual environment and install all of its dependencies. This process can take several minutes.

## Troubleshooting & Specific Distributions

### For Fedora 43+ / Distros with Python 3.13+

Some distributions ship with very new Python versions that may have compatibility issues with GSM's dependencies. If GSM fails to install or run correctly, you can manually create a compatible Python environment for it using `uv`.

First, install `uv` if you haven't already: `bash <(curl -LsSf https://astral.sh/uv/install.sh)`

Then, run the following commands in your terminal to create a dedicated Python 3.11 environment for GSM:

```sh
# Remove any previous broken environment
rm -rf ~/.config/GameSentenceMiner/python_venv

# Create a new environment using Python 3.11
uv python install 3.11
uv python pin 3.11
uv venv ~/.config/GameSentenceMiner/python_venv

# Finalize setup
~/.config/GameSentenceMiner/python_venv/bin/python3 -m ensurepip
rm .python-version
```
After running these commands, start the GSM AppImage again. It should now use this compatible environment.

## Known Issues & Workarounds

-   **OCR Recommendations**: OneOCR is not available on Linux. I recommend using Meiki Text Detector for Stability, and Google Lens as the Main OCR.

-   **Game Overlay**: The game overlay feature is not functional on Linux at this time. Use the Texthooker page (`http://localhost:55000/texthooker`) for mining.

-   **Global Hotkeys**: Global hotkeys for OCR do not work due to limitations in Python's keyboard libraries on Linux. You must use the buttons within the GSM application to start/stop OCR.

-   **Area Selector**: The hotkeys (e.g., `S` to save, `Q` to quit) do not work in the Area Selector. You must use the small on-screen UI panel that appears in the top-left to save or close the selector.

-   **Window Focus Stealing**: Some users on Wayland (with GNOME) have reported that if GSM is on a different workspace, it may steal keyboard focus. Keeping GSM on the same workspace as your other applications is the current workaround. A restart of GSM also resolves the issue temporarily.

-   **Text Hooking (Agent/Textractor)**: Using text hookers for games running through Wine or Proton is possible but requires manual setup. For example, you may need to run Textractor within the same Wine prefix as your game, which can be managed with tools like Lutris or Bottles. Agent may work out-of-the-box for some native Linux games with available scripts.
