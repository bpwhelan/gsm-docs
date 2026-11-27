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

Install **FFmpeg** from your distribution. On Debian or Ubuntu, run `sudo apt install ffmpeg`. For other distributions, see the [FFmpeg download page](https://ffmpeg.org/download.html). Check that `ffmpeg -version` and `ffprobe -version` both print a version.

If GSM cannot find the tools on its `PATH`, place both executables in the `ffmpeg` subfolder of GSM’s data folder.

## 2. OBS Studio Configuration

GSM uses OBS Studio for screen capture, which is essential for OCR, screenshots, and audio recording.

1.  **Install OBS Studio**: Install it from your distribution's software center or as a Flatpak. The Flatpak version is often recommended as it comes with most features pre-packaged. Ensure it includes the **OBS WebSocket** plugin (most recent versions do by default).

2.  **Configure WebSocket Server**:
    -   In OBS, go to `Tools` -> `WebSocket Server Settings`.
    -   Check `Enable WebSocket Server`.
    -   Leave `Enable Authentication` checked and enter the same password in GSM's OBS settings.
    -   Set the `Server Port` to `7274` to match GSM's default.

3.  **Enable Replay Buffer**: This is crucial for creating flashcards with audio and screenshots.
    -   Go to `Settings` -> `Output`.
    -   Set `Output Mode` to `Advanced`.
    -   Navigate to the `Replay Buffer` tab.
    -   Check `Enable Replay Buffer`.
    -   Set `Maximum Replay Time` to at least `300` seconds.

:::note[Linux capture setup]
Capture options depend on your distribution, display server, and OBS source. Create an OBS scene and source manually if the capture wizard cannot configure your game or monitor. On Wayland, use an OBS capture source supported by your compositor; PipeWire may be required. The Home tab's capture wizard can still help you test the image and choose text capture.
:::

## 3. Anki Configuration

1.  **Install Anki**: Download Anki from the [official website](https://apps.ankiweb.net/).
2.  **Install AnkiConnect**: In Anki, go to `Tools` > `Add-ons` > `Get Add-ons...` and enter the code: **`2055492159`**.

## 4. GameSentenceMiner Installation

The recommended method for Linux is using the provided AppImage.

If your system cannot mount the AppImage because FUSE is unavailable, run it with `APPIMAGE_EXTRACT_AND_RUN=1` set.

1.  **Download the AppImage**: Go to the [GSM release on GitHub](https://github.com/bpwhelan/GameSentenceMiner/releases) and download the `.AppImage` file.

2.  **Make it Executable**: Open a terminal in the directory where you downloaded the file and run:
    ```sh
    chmod +x GameSentenceMiner-*.AppImage
    ```

3.  **Run GameSentenceMiner**:
    ```sh
    ./GameSentenceMiner-*.AppImage
    ```

After installation, use [Text Hook Setup](../features/text-hook.md) to connect a supported hook under Wine or Proton, or choose [OCR](../features/ocr.md) for a game without a hook.

## Platform notes

- **OCR engines vary by platform.** OneOCR is Windows-only; use the engine choices available in the current OCR tab and install any requested components there.
- **Wayland capture depends on the compositor.** GSM and OBS support Wayland capture paths, but some setups may need PipeWire permissions or a manually created OBS source. See [OCR Setup](../features/ocr.md) and [Overlay](../features/overlay.md).
- **Text hooks are available for compatible Linux, Wine, and Proton games.** Engine and game support vary; see [Text Hook Setup](../features/text-hook.md).
- **Hotkeys and focus behavior can vary.** If a global shortcut does not fire, use the relevant control in GSM's OCR or Text Hook tab. Some Wayland desktop environments may move focus when switching workspaces.
