---
sidebar_position: 1
title: Release Notes
description: A history of updates, features, and fixes for GameSentenceMiner.
slug: /release-notes
---

# Release Notes

:::info
This project is in active development. If you encounter issues, please check the [GitHub Issues](https://github.com/bpwhelan/GameSentenceMiner/issues) or join the Discord.
:::

## Jan 02, 2026 - Profile Switching & Experimental Features

### Profile System Fixes
Fixed critical issues regarding **Profile Switching**:
*   OBS scene selection now updates correctly when switching profiles.
*   Profile titles update immediately in the UI.

:::tip What are Profiles?
Profiles allow you to create specific configurations for different games. For example, you can have a "Visual Novel" profile with animated screenshots disabled, and an "Action Game" profile with them enabled. GSM will automatically switch profiles based on the active OBS Scene.
:::

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1456698415915339967/image.png?ex=69594f9e&is=6957fe1e&hm=3ab86fa606a0eca3218e316723427cc4f818f79b4e9ce3601990ed2b61a08b5f&" alt="Profile Settings" width="600" />

### Black Bar Removal for Animated Screenshots
Added logic to detect and remove black bars from **Animated Screenshots** (AVIF).

<video controls width="100%">
  <source src="https://cdn.discordapp.com/attachments/1286409772383342667/1456681938684481770/animated_before.mp4?ex=69594046&is=6957eec6&hm=2c9cfb8baf745379a82bddbb6d73d5b8ca5593f9d20590dc5ee6ad51d982445f&" />
</video>

### Experimental: Overlay Hotkey to Texthooker
Added a workflow for games with "too much text" (e.g., *Needy Streamer Overload*).
*   **New Option:** `Send Overlay Lines to Texthooker on Hotkey`
*   **Workflow:** Instead of using Auto-OCR, use the manual overlay hotkey to capture specific text, send it to the texthooker, and mine from there.

---

## Dec 31, 2025 - v1.16.0 (Overlay "2.0")

A massive overhaul of the Overlay system logic and stability.

### Core Overlay Improvements
*   **Stricter Target Window:** GSM now tracks the specific window. Moving, resizing, or switching monitors updates the overlay automatically.
*   **Magpie Support:** Automatic detection of Magpie scaling.
*   **Focus Management:** Overlay is much better at returning focus to the game window.
*   **Area Config Sharing:** OCR and Overlay can now share the same area configuration (green/purple boxes).

### New Features
*   **Overlay Translation:** Hotkey to request an AI translation displayed directly over the text (Experimental).
*   **Recycled Line Detection:** Displays an orange indicator if the exact same line has been seen before.
*   **Manual Toggle:** Manual mode can now toggle the overlay on/off instead of requiring a key hold.
*   **Visual Updates:** Removed static furigana background in favor of text shadows/borders.

<video controls width="100%">
  <source src="https://cdn.discordapp.com/attachments/1286409772383342667/1456016944196223119/Translations.mp4?ex=6958cf32&is=69577db2&hm=9da006b0a9cacbbcdcc8f9ccc297e6ce1d8384d7c723aa604eb8eeebe4296062&" />
</video>

---

## Dec 22, 2025 - v1.15.15 & Fixes

*   **Fixed:** Moving/Resizing the floating overlay box no longer breaks on-screen lookups.
*   **Fixed:** Critical bug with the desktop client updater.
*   **Fixed:** "Yesterday's Sessions" visibility logic in stats.

:::warning Updater Issue
If you are on an older version, the auto-updater may fail. Please download the latest installer manually from GitHub.
:::

---

## Dec 21, 2025 - Stats Overhaul & Plugins

### Stats & Goals
*   **Static Goals:** Set goals like "15 cards per day".
*   **Media Specific Goals:** Track specific targets (e.g., "1M chars from Visual Novels").
*   **Time Charts:** Added Average and Total over time charts.
*   **Data Management:** Ability to merge individual lines into different games.

### Plugin System
Introduced a Python plugin system allowing custom code execution every 15 minutes.
*   Examples: Auto-deduplication, sending notifications, integrating with external tracking apps.
*   [Plugin Documentation](https://docs.gamesentenceminer.com/docs/guides/plugins)

### Other Changes
*   **VAD:** Whisper transcription is now flattened to Hiragana for better voice matching.
*   **Texthooker:** Fixed "Translate Multiple Lines" feature.

---

## Dec 16, 2025 - v1.15.13

### Window Management
*   **Active Window Checks:** Fixed logic requiring double clicks to progress game text in overlay.
*   **Background Detection:** Added checks for windows fully covered by other windows.
*   **Reactivation Scan:** Automatically runs a scan if the target window is reactivated (handles alt-tab cases).

---

## Dec 15, 2025 - v1.15.11 (Linux Support & Meiki Fixes)

### Linux Overlay (Alpha)
First attempt at Linux Overlay support.
*   **Forced Manual Mode:** Due to click-through limitations on Linux, the overlay only shows when the hotkey (`Shift+Space`) is pressed.
*   **Text Offset:** Added calibration tools for X11/Wayland offsets.
*   **Tray Icon:** Added tray icon for Linux overlay management.

### Meiki OCR Fixes
*   Fixed a color-shift issue (BGR vs RGB) that caused Meiki OCR to miss kanji occasionally.
*   Fixed issues saving "Target Language" configs containing spaces.

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1450159324516188240/image.png?ex=6959409d&is=6957ef1d&hm=572268b2f482b719e4f61c0c6fbbdbeccd34bbb2d800c670a94bbe8f21b40ab7&" alt="Meiki Fix Comparison" width="600" />

---

## Dec 14, 2025 - Meiki Overlay & Game Titles

### Meiki OCR in Overlay
Added **Meiki OCR** as an option for the overlay. With recent text matching updates, this is highly accurate and fast.
*   **Default Change:** OneOCR is now the forced default for Overlay to save API usage/bandwidth, as local matching is now sufficiently powerful.

### Features
*   **Emulator Title Extraction:** Automatically cleans up window titles for common emulators (removing FPS counters, etc.) for cleaner OBS scene names.
*   **Sentence Furigana:** Now uses the `mecab` algorithm (same as AJT) for generating sentence furigana in Overlay/Multi-mine.

---

## Dec 07, 2025 - Media Handling

*   **Removed:** Animated WebP support (files were too large). AVIF is now the sole animated format.
*   **Improved:** Media uploads to Anki now happen in the background to prevent blocking the mining workflow.

---

## Dec 06, 2025 - Discord Rich Presence

*   **Updated:** Removed `GSM:` prefix from Rich Presence.
*   **Updated:** The RPC text is now a clickable link to the GitHub repository.

---

## Dec 05, 2025 - v1.15.2 (Fixes)

*   **Fixed:** Serious bug in the Desktop Client Updater.
*   **Fixed:** Screen flickering in Home/OCR tabs.
*   **Fixed:** Clipboard listener logic.

---

## Dec 05, 2025 - Rich Presence & Configuration Update

### Discord Rich Presence
Added Rich Presence integration.
*   **Default:** On.
*   **Config:** Options to hide specific scenes, change icons, or disable entirely.

### Overlay Updates
*   **Text Matching:** Overlay now matches text from the hooker to correct OCR mistakes. Makes OneOCR extremely viable for overlay use.
*   **Area Selector:** Added specific area selection for Overlay (independent of OCR).

### OCR
*   **Simplified Setup:** Split into **Basic** and **Advanced** modes.
*   **Scan Speed:** Converted abstract speeds (Instant, Normal, Slow) to concrete scan intervals (0.2s - 1.0s).

### Configuration
*   **Animated Screenshots:** Exposed FPS, Quality, and Extension (AVIF/WEBP) settings.

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1446655705204658348/overlay_selector.png?ex=695907dd&is=6957b65d&hm=f5275d41877a2bc3066d52214bc651263c49211ba4b40094c1f16effbcab493d&" alt="Overlay Area Selector" width="600" />

---

## Dec 04, 2025 - OCR Multi-Box & Stability

### OCR Engine Overhaul
*   **Green Boxes (Include):** Now cropped and applied at original coordinates rather than stacked. Fixes text duplication issues.
*   **Purple Boxes (Menu):** Moved back to a single OCR pass.
*   **Dependency Locking:** Implemented `requirements.lock` to prevent random package breakage.

### Other Changes
*   **AI:** Reduced temperature for expletive filtering.
*   **Fixes:** Animated GIFs use AVIF, temp files delete correctly, Bing OCR fixed.

---

## Dec 02, 2025 - Jiten Integration

*   **Tags & Genres:** GSM now pulls game metadata (Tags/Genres) from Jiten.
*   **Stats:** Added new charts visualizing data based on Jiten tags.
*   **Management:** Added "Repull from Jiten" option in Database Management.

---

## Nov 29, 2025 - v1.15.5 / 2.21.22 (Goals Rework)

### Goals Overhaul
*   **Custom Dates:** Set goals for specific date ranges (e.g., "December Challenge").
*   **New Types:** Goals for Games Completed, Cards Mined, and Generic Checkboxes.
*   **Streaks:** Tracking for daily goal completion.
*   **Easy Days:** Dynamic daily targets based on activity.

### Anki Dialog
*   **Auto Accept:** Timer to automatically accept the card result if no interaction occurs (Default: 10s).
*   **Window Memory:** Dialog remembers its last screen position.

### Other
*   **Manual Overlay Trigger:** Hotkey to force an overlay scan.
*   **Performance:** Fixed crash causes, optimized websocket exports.

:::info December Challenge
A community challenge was started to read 1 million characters in December.
:::

---

## Nov 24, 2025 - Cleanup

*   Removed redundant buttons (CUDA install).
*   General UI cleanup.

---

## Nov 23, 2025 - Fixes

*   **Fixed:** "Out of Bounds" errors when using End/Middle screenshot timing.
*   **Fixed:** Session deletion in Stats Overview.

---

## Nov 22, 2025 - Stats Accuracy

*   **Character Count:** Overall Game Stats now filter out punctuation and whitespace for accuracy.
*   **Repetition Filter:** Added option to reduce repeated characters (e.g., `ああああ` -> `あああ`).
*   **UI:** Updated texthooker scrollbar to match theme.

---

## Nov 20, 2025 - Texthooker UI

*   **Added:** Options to hide specific GSM elements in the texthooker.
*   **Added:** Option to auto-unblur translations after a set delay.
*   **Fixed:** OCR to Clipboard on Linux.
*   **Fixed:** Audio insertion when skipping confirmation dialog.

---

## Nov 19, 2025 - v1.15.2 (Furigana Overlay)

### Overlay Furigana
Experimental feature to display furigana over in-game text.
*   **Toggle:** Hotkey (Default `Alt+F`).
*   **Note:** Uninteractable and ignored by Yomitan. Recommended to use with a minimum character size filter.

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1440811652785242232/gsm_overlay_V0bGbhQoqx.gif?ex=6958dd2b&is=69578bab&hm=4b1924c084941a87b695828460e00b801593cce7f57b749b9ab49d1df3d51d24&" alt="Overlay Furigana" width="600" />

---

## Nov 18, 2025 - v1.15.1 (Updater Fix)

:::danger Critical Update
The desktop client updater was broken in previous versions. Users must manually download and install **v1.15.1** or newer to continue receiving updates.
:::

[Download Release v1.15.1](https://github.com/bpwhelan/GameSentenceMiner/releases/tag/v1.15.1)

---

## Nov 18, 2025 - v2.21.0 / 1.15.0 (The Big QT6 Rewrite)

A massive architectural update moving from Tkinter to QT6 and upgrading the Python environment.

### Core Architecture
*   **Python 3.13:** Updated from 3.11 using `uv` for package management.
*   **QT6 UI:** Replaced all Tkinter windows (Config, Anki Confirmation, Area Selector) with QT6.
    *   Improved stability.
    *   Better cross-platform support.
    *   Modern look and feel.

### New Features
*   **Icon Selection:** Choose custom icons for the desktop app.
*   **Notifications:** Moved to Electron; clicking them opens the note in Anki.
*   **Anki Confirmation:** Added options to force audio and view previous screenshots.
*   **Linux/Mac:** Automated Python package installation and BETA overlay support.

### Optimizations
*   Faster boot/shutdown.
*   Reduced background CPU usage.
*   Screen-select OCR is significantly faster.

---

## Nov 17, 2025 - v2.20.10 (CPU Fix)

*   **Fixed:** High CPU usage caused by aggressive websocket reconnection attempts (Agent/Textractor/Luna).

---

## Nov 16, 2025 - Python Fixes

*   Fixed dependencies.
*   Fixed daily stats rollup.
*   Fixed VAD toggle (sending untrimmed audio).

---

## Nov 11, 2025 - Stats & UI

*   **Black Bars:** Improved detection logic for similar aspect ratios.
*   **UI:** Added options to hide tabs in the Desktop App.
*   **Optimization:** OCR engines now lazy-load (only load when needed).
*   **Stats:** Added "Avg Time (7/30 days)" to heatmap.

---

## Nov 06, 2025 - v1.14.0 / 2.20.0 (Stats & Meiki)

### Stats Expansion
*   **Jiten Linking:** Link games to Jiten entries for metadata.
*   **New Charts:** 11 new charts added.
*   **Performance:** Significantly faster loading.
*   **PDF Export:** Shareable PDF reports of your immersion stats.

### Meiki OCR
Added **Meiki OCR** as a Main OCR option.
*   Fast and accurate for Japanese.
*   CPU only (for now).

### Mac Support
*   Added `.dmg` build for MacOS users.

### Other
*   **OBS Path:** Configurable OBS path (use with caution on Windows).
*   **Game Launcher:** Added delay option for Agent startup.

---

## Oct 31, 2025 - Overlay Fix

*   **Fixed:** Issue where creating a card and immediately progressing text caused incorrect sentence matching in Anki.

---

## Oct 30, 2025 - Black Bar Fixes

*   **Performance:** Improved speed of black bar detection (fixed ffmpeg command).
*   **Trimming:** Smarter trimming logic.

---

## Oct 29, 2025 - v1.13.7 / 2.19.7

### Automatic Black Bar Removal
GSM detects black bars in screenshots (e.g., playing 4:3 content on a 16:9 screen) and crops them automatically.
*   **Setting:** Enabled by default in `Screenshot` tab.

### OCR & Texthooker
*   **Custom Prompt:** Added option for custom AI prompts in Texthooker.
*   **Cleanup:** Removed redundant OCR options.
*   **Meiki:** Added padding to Meiki detection boxes.

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1433190952964587572/Demonbane_HEAe3MDe37.jpg?ex=6958d356&is=695781d6&hm=28ed0048f349b76526beac1156d65646d043aa4dee17aedd651cd8f9e41d4673&" alt="Black Bar Removal" width="600" />

---

## Oct 27, 2025 - OBS Crop

*   **Changed:** OBS auto-fit no longer auto-crops, only auto-fits canvas.

---

## Oct 24, 2025 - Meiki Text Detection

### Experimental: Stability OCR
Added support for **Meiki Text Detect**.
*   **Purpose:** Detects *where* text is to determine stability, rather than reading the text.
*   **Benefit:** Lightweight and fast. Enables efficient two-pass OCR on Linux/Mac.
*   **Setup:** Use Meiki for Stability -> Lens for Main OCR.

---

## Oct 23, 2025 - Dependencies

*   **Security:** Stricter dependency management to prevent upstream package breakage.

---

## Oct 22, 2025 - Overlay Logic

*   **AFK Timer:** Now hides text instead of minimizing, preventing focus stealing.
*   **Tuning:** Added `Periodic Match Ratio` and `Local Scans Per Text Event` for fine-tuning overlay behavior.
*   **Fix:** Matching text now occurs before replay buffer enable to prevent race conditions.

---

## Oct 20, 2025 - v1.13.0 / 2.19.0

### Added
*   **Texthooker:** Indicator for lines outside of Replay Buffer (cannot be mined with audio).
*   **Startup:** Options to run Overlay and Transparent Window Tool on startup.
*   **Safety:** Warning if Replay Buffer is disabled in OBS.

### Changed
*   **Updates:** Restructured update system for better reliability.
*   **Texthooker:** Defaulted max lines to 1000.
*   **Launchers:** Textractor/Luna now open *before* the game.

### Removed
*   "Repair GSM" button.
*   "Backfill Audio" option.

---

## Oct 16, 2025 - Data Management

*   **Stats:** Added ability to delete session lines from Overview.
*   **Fix:** Bug where lines within replay buffer were reported as "not found".

---

## Oct 16, 2025 - Overlay Polish

*   **AFK Timer:** Minimized overlay if inactive (default 5 mins).
*   **Focus:** Option to take focus on Manual Mode hotkey.
*   **Indicator:** Visual "Ready" indicator when text is received.

<img src="https://cdn.discordapp.com/attachments/1286409772383342667/1428434554225688728/GwmXT4OmHc.gif?ex=695951d8&is=69580058&hm=00fe6c25753623db9ea94723d09b31dadeddcf6efaf64517b4a29ab5fffb9f32&" alt="Ready Indicator" width="600" />

---

## Oct 15, 2025 - Stats Update (Bee)

*   **Goals:** Configurable goals added.
*   **Search:** Regex support and line deletion.
*   **Anki:** "Game Field Name" option to auto-fill OBS Scene Name.
*   **Fix:** Filtered out spaces/punctuation from character counts for accuracy.

---

## Oct 14, 2025 - Fixes

*   Fixed scene creation.
*   Fixed util GUI opening issues when settings were minimized.

---

## Oct 13, 2025 - Overlay Filtering

*   **Min Char Size:** Added filter for minimum character size in Overlay (useful for noisy games).
*   **Language Filter:** Filters overlay text based on target language.

---

## Oct 12, 2025 - v1.12.15

*   **Fix:** Overlay now updates correctly for small text changes.
*   **Fix:** OBS corruption with special characters in scene names.
*   **Anki:** Option to use TTS in confirmation dialog if audio is missing.
*   **Logs:** Option to include temp files in log export.

---

## Oct 12, 2025 - Overlay Multi-Monitor

*   **Multi-Monitor:** Overlay now supports secondary monitors.
*   **Visuals:** Option to show bounding boxes around scanned text.
*   **Fix:** Scanning bottom of screen fixed.
*   **Stats:** Added "Today's Sessions" view.
*   **Texthooker:** Added retry for same-word mining and audio controls.

---

## Oct 10, 2025 - Fixes

*   **Stats:** Fixed column issue preventing loading.
*   **OBS:** Dynamic replay buffer check (based on buffer size) instead of hardcoded 5m.

---

## Oct 10, 2025 - v1.12.14

*   **Fix:** Overlay hotkey issue.
*   **Change:** Capture Cursor defaults to OFF for new game captures.

---

## Oct 09, 2025 - v2.18.0 / 1.12.13 (The "Everything" Update)

### Automation & Tools
*   **Auto Replay Buffer:** GSM manages OBS Replay Buffer based on picture presence (Auto ON/OFF).
*   **Anki Confirmation:** New dialog to edit fields, play audio, or select screenshots before card creation.
*   **LongPlay Recording:** Experimental feature to record gameplay and generate an SRT file with captured text.

### Stats (Bee)
*   **Goals:** Date-specific goals.
*   **Kanji:** Lists for all kanji grids.
*   **Game Merge:** Ability to merge game entries in DB.

### Fixes
*   **Whisper:** Reduced hallucinations significantly.
*   **Optimization:** Fixed issue with GSM comparing too many lines over long sessions.

---

## Oct 07, 2025 - OCR Fixes

*   Fixed OCR for text following large spaces.
*   Fixed compatibility with "reasoning" models (GPT-o1, Gemini 2.5 Pro).

---

## Oct 05, 2025 - Texthooker Features

*   **Auto-Translate:** Option to auto-translate lines and **blur-unless-hovered**.
*   **Launcher:** Games now launch from their respective directories.

---

## Oct 03, 2025 - Stats & Network

*   **Stats:** Added Date Range selector.
*   **Network:** Configurable bind address (default `127.0.0.1`). Set to `0.0.0.0` for LAN access.
*   **Overlay:** Added delay option for slow-appearing text.

---

## Sep 27, 2025 - Overlay Manual Mode

*   **Manual Mode:** Overlay only interactable while holding hotkey (Default: `Shift+Space`).
*   **Desktop App:** Start OBS directly from status button.
*   **OCR:** Purple (Menu) boxes are now OCR'd separately to prevent text merging.

---

## Sep 25, 2025 - Magpie & Docs

*   **Documentation:** Added buttons linking to [Wiki](https://github.com/bpwhelan/GameSentenceMiner/wiki).
*   **Magpie:** Overlay now reads scaling info directly from Magpie for perfect alignment.
*   **Fix:** Infinite retry loop when mining multiple words.

---

## Sep 21, 2025 - Overlay Settings

*   Reverted forced settings for "No Scan Modifier" and "Auto-Hide Popup". These are now user-configurable again.

---

## Sep 20, 2025 - v1.12.6 (Overlay Polish)

*   **Scaling:** Fixed OneOCR alignment with Windows Scaling.
*   **Focus:** Overlay no longer steals focus when text arrives.
*   **Return Focus:** Closing Yomitan automatically returns focus to the game window.
*   **Optimization:** Stopped overlay updates if screen hasn't changed.

---

## Sep 17, 2025 - Stats Fixes

*   Fixed hardcoded values in Stats (e.g., AFK timer). Settings are now respected.

---

## Sep 16, 2025 - Overlay Hybrid Scan

*   **Hybrid Mode:** Sends OneOCR results immediately for speed, then updates with Lens results (if enabled) for accuracy. Best of both worlds.

---

## Sep 16, 2025 - Audio & TTS

*   **TTS Fallback:** Option to use TTS (e.g., VoiceVox via Luna) if no voice is detected in the audio clip.
*   **Overlay:** Added "Periodic Scan" mode (scans on timer vs event).

---

## Sep 14, 2025 - VAD Filter

*   **Added:** Option to re-enable VAD filter for Whisper. Useful if high-pitched voices are being ignored.

---

## Sep 12, 2025 - Fixes

*   **Fixed:** exSTATic line import.
*   **Icon:** Updated app icon.

---

## Sep 11, 2025 - Stats & Settings

*   **Stats:** Configurable Goals and Regex Search added.
*   **Stats:** Filtered spaces/punctuation from character counts.
*   **Anki:** "Game Field Name" option to auto-fill OBS Scene Name.
*   **Settings:** Fixed "Reset" button logic.

---

## Sep 10, 2025 - Stats & Overlay

*   **Stats:** exSTATic line import, DB Backups (daily, keeps 5).
*   **Overlay:** Option to use *only* OneOCR (Local) without Lens.
*   **VAD:** Tweak for audio >30s.

---

## Sep 09, 2025 - Texthooker & Stats

*   **Texthooker:** Synced with Renji's fork (character milestones, fonts).
*   **Stats:** Added Stats tab to Electron app with screenshot button.
*   **Sync:** Websocket port now syncs with GSM settings.

---

## Sep 08, 2025 - Texthooker Features

*   **Features:** Open Stats from header, custom fonts, Picture-in-Picture mode.

---

## Sep 08, 2025 - GSM Stats

Introduced the **Stats Page** (default: `localhost:55000/stats`).
*   **Metrics:** Characters read, speed, streaks, kanji encountered.
*   **Search:** Full database search of mined lines.
*   **Management:** Clean up dropped games or bad lines.
*   **Privacy:** All data is stored locally.

---

## Sep 06, 2025 - Faster Whisper & OCR Accuracy

*   **Whisper:** Switched to **Faster-Whisper** backend. Same accuracy, better speed.
*   **OCR Stability:** Added result memory to prevent flickering between similar OCR outputs.
*   **OCR Quality:** Removed compression for Local OCR, using full-res screenshots for better OneOCR accuracy.

---

## Sep 02, 2025 - Admin Rights

*   **Change:** GSM no longer requests Admin rights by default.
    *   *Note:* If you use Game Capture for certain admin-level games, you may need to manually run GSM/OBS as admin.

---

## Aug 27, 2025 - Python v2.15.4

*   **OBS:** Implemented thread-safe connection pool for better stability.
*   **VAD:** Option to force Whisper to CPU even if CUDA is available.

---

## Aug 23, 2025 - Crop Fix

*   **Fix:** Auto-crop logic now checks for aspect ratio changes before applying.
*   **Fix:** Prevents crash on single-monitor setups.

---

## Aug 23, 2025 - OCR & Overlay Improvements

### OCR
*   **Ignore Menu-Only:** If all detected text is within a "Menu" (Purple) box, the result is ignored.
*   **Furigana:** Per-game furigana settings.
*   **Optimization:** Replacements now run *before* other logic.

### Overlay
*   **Scaling:** Switched to percentage-based coordinates for Windows Scaling support.
*   **Yomitan:** Forced settings for better UX (No scan modifier, Auto-hide).
*   **Yomitan Settings:** Hotkey `Alt+Shift+Y`.

---

## Aug 18, 2025 - v1.11.5 / 2.14.21

*   **Furigana Filter:** Fixed to filter based on line dimensions.
*   **Preview:** Visual preview of furigana filter boxes.
*   **UI:** Renamed OCR options for clarity (Main vs 2nd Pass).

---

## Aug 16, 2025 - Features & UV

### Features
*   **Video/Animated:** Option to encode WebM video or Animated AVIF for Anki cards.
*   **OBS:** Auto-scale source to fit canvas.
*   **Texthooker:** Auto-translate option.

### Electron App
*   **UV:** Switched to `uv` for python management. Blazing fast installs.
*   **Python Tab:** Tools to install CUDA, repair install, etc.

---

## Aug 14, 2025 - Stability

*   **Revert:** Reverted "OCR Stability" check due to issues with VNs.
*   **Config:** Option to disable OBS replay buffer check.

---

## Aug 12, 2025 - v1.10.2 / 2.14.5

*   **OCR:** "Use OBS for OCR" is now the forced default.
*   **OCR:** Added gradual slowdown for static images to save CPU.
*   **Overlay:** Improved click-through reliability.
*   **Texthooker:** "Translate Last X Lines" feature.

---

## Aug 09, 2025 - Overlay Magpie Fix

*   **Magpie:** Made compatibility mode optional (toggle in settings).
*   **UX:** Added transparency to OCR instructions on hover.

---

## Aug 08, 2025 - v1.10.0 / 2.14.0

### Official Overlay
Bundled the Overlay tool directly into GSM.
*   **Yomininja-style** on-screen lookups.
*   **Hotkeys:** `Alt+Shift+H` (Hide Box), `Alt+Shift+J` (Minimize).

### AI
*   **OpenAI-Compatible:** Support for local LLMs (LM-Studio).
*   **Auto-Fetch:** Pulls available models from Gemini/Groq dynamically.

### Other
*   **Database:** Started tracking local DB of all game text (preparation for Stats).
*   **OCR:** OBS Source is now the default OCR method.

---

## Aug 05, 2025 - Local LLM OCR

*   **Runtime Config:** Can now adjust OCR areas while OCR is running.
*   **Local LLM:** Support for using Local LLMs (e.g., Qwen2.5-VL via LM-Studio) for OCR.

---

## Aug 03, 2025 - Secondary OCR Areas

Introduced **Secondary (Purple) Areas** (`Ctrl + Left Click`).
*   **Function:** Text in these areas is ignored during Auto-OCR but can be scanned manually via hotkey.
*   **Use Case:** Item descriptions, menus, or dialogue choices that shouldn't trigger constant lookups.

---

## Aug 02, 2025 - v2.8.18 (Path Facelift)

*   **Smart Paths:** files are now saved to a folder named after the **Word** mined.
*   **Unified:** "Remove Audio/SS" options removed; all files route through temp folder.
*   **Trimming:** Ability to trim the OBS replay video itself.
*   **Fix:** Corrupt config.json caused by locale saving issue.

---

## Jul 31, 2025 - Performance

*   **Format:** OBS OCR now uses JPG instead of PNG (0.3s -> 0.05s latency).
*   **WindowsOCR:** Fixed WindowsOCR installation (faster, less accurate alternative to OneOCR).

---

## Jul 29, 2025 - exSTATic Support

*   Added support to send OCR results to exSTATic (Scene name as process).
*   *Note:* Not recommended due to port conflicts with Agent (9001).

---

## Jul 28, 2025 - UI & Fixes

*   **Fix:** OBS OCR scaling on ultrawide monitors.
*   **Fix:** Overlay punctuation issues.

---

## Jul 28, 2025 - Localization

*   **Languages:** Added **Japanese** and **Simplified Chinese** UI options.
*   **Key Settings:** Added a "Key Settings" tab consolidating the most important options for new users.

---

## Jul 25, 2025 - OCR Timing

*   **Fix:** OCR timing now marks the *start* of the image capture as the voiceline start, improving sync with audio.

---

## Jul 24, 2025 - Stability

*   **Error Handling:** Improved error messages.
*   **Linux:** Disabled hotkeys on Linux to prevent crashes.

---

## Jul 23, 2025 - v1.9.3 / 2.12.8

*   **Auto-OCR Trigger:** Start OCR automatically when switching to specific OBS Scenes.
*   **Transparent Tool:** Allow targeting specific window names.
*   **Sequential Merge:** Option to merge sequential text events (useful for OCR/Voice Rec tools like Luna).

---

## Jul 22, 2025 - Optimizations

*   **OBS OCR:** Optimized scan time (~0.08s).
*   **Overlay:** Improved accuracy using 2-pass scan logic.
*   **Fix:** OneOCR installation issues on Linux.

---

## Jul 21, 2025 - Overlay (WIP)

*   **Alpha Release:** Initial release of the external Overlay tool.
*   **Function:** Yomininja-like overlay for on-screen lookups.
*   **Constraint:** Windows only, requires OneOCR.

---

## Jul 19, 2025 - OCR 2.0

*   **Image Comparison:** Checks if the screen has changed before running OCR. Massive CPU/API savings.
*   **OBS Source:** Option to use OBS output directly for OCR (bypasses screen capture).
*   **Auto-Switch:** Automatically switches OCR config based on active OBS Scene.

---

## Jul 18, 2025 - Fixes

*   Fixed "Add Audio on No VAD" logic.
*   Fixed OCR on portrait windows.

---

## Jul 17, 2025 - v1.8.9

*   **Transparency Tool:** Utility to make any window (e.g., browser) transparent and always-on-top.
*   **Quip Filter:** VAD now ignores short sounds (e.g., "Hai", "Un") followed by silence.

---

## Jul 17, 2025 - v1.8.8 (Linux OCR)

*   **Linux Support:** Auto-OCR now available on Linux via "Use OBS as Source" + Google Lens.
*   **Console:** Cleaned up duplicate log messages.

---

## Jul 17, 2025 - Context Window

*   **AI:** Configurable context window size (sentences before/after) for AI translation prompts.

---

## Jul 16, 2025 - v1.8.7 / 2.11.0

*   **Texthooker TL:** Click the Globe icon 🌐 to translate lines directly in the texthooker.
*   **Line Breaks:** Option to preserve line breaks in OCR output (prevents jamming text blocks).
*   **Linux:** Alpha Linux Electron App released.
*   **Removed:** Vosk and Groq VAD (inferior to Whisper/Silero).

---

## Jul 11, 2025 - v2.10.17 (AI Tweaks)

*   **Safety:** Explicitly disabled safety settings on Gemini to prevent blocking valid game dialogue.
*   **Models:** Removed Gemini 2.5 Pro (too slow/limited).

---

## Jul 09, 2025 - v2.10.16

*   Fixed OBS install link during initial setup.

---

## Jul 08, 2025 - v1.8.6 / 2.10.15

*   **Reset:** Added "Reset to Default" buttons for settings.
*   **Backup:** Config is backed up on every change.
*   **Matching:** Improved sentence matching logic to handle gibberish better.

---

## Jun 27, 2025 - v1.8.5

*   Fixed window selection dropdown issue.

---

## Jun 26, 2025 - v1.8.4

*   **Window Binding:** Option to bind OCR configs to **Window Name** instead of Game/Scene name.

---

## Jun 26, 2025 - v1.8.3 (OCR Refined)

*   **Integration:** OCR now runs inside the main OCR tab (no external window).
*   **Language Aware:** 2nd scan optimization now respects target language (e.g., ignores English UI elements).
*   **Fix:** Fixed duplicated results in 2nd pass.

---

## Jun 25, 2025 - v2.8.11

*   **Instructions:** Added overlay instructions for area selector.
*   **Fix:** Right-click to delete box restored.
*   **Fix:** Manual OCR now works with 2-pass enabled.

---

## Jun 24, 2025 - Area Selector

*   **Improved:** Area selector drawing reliability.
*   **Hotkeys:** All selector hotkeys work without initial click focus.

---

## Jun 23, 2025 - v1.8.2

*   **Fix:** Fixed Japanese text being filtered as "Chinese".
*   **Fix:** OneOCR file downloader.
*   **Install:** "Install OwOCR" now handles all dependencies.

---

## Jun 18, 2025 - Tags

*   **Parent Tags:** Added option to nest Game Tags under a parent tag (e.g., `Game::[GameName]`).

---

## Jun 17, 2025 - Texthooker Cleanup

*   **Cleanup:** Hides checkboxes/buttons for lines not in current session.
*   **Copying:** Made button text (`📷`, `🔈`) unselectable for easier copy-pasting.

---

## Jun 16, 2025 - v1.3.0 / 2.5.6 (UI Redesign)

### UI Overhaul
*   **Electron:** Complete CSS overhaul.
*   **Python:** Settings reorganized into tabs; "Advanced" tab added.

### Features
*   **Offset Finder:** Visual tool to find the perfect audio offset.
*   **Furigana Preview:** Visual preview for the OCR Furigana size filter.
*   **Multi-Line:** Added "Multi-line storage field" for Anki.

### Technical
*   **Communication:** Switched to Websocket communication between Python/Electron.
*   **Launchers:** Improved PID detection for Steam games.

---

## Jun 13, 2025 - Splice Update

*   **VAD Splicing:** Doubled padding at start, halved at end to catch first syllables better.
*   **OCR:** Added fallback URL for OneOCR model download.

---

## Jun 10, 2025 - Features

*   **Furigana Filter:** OCR filter to ignore text smaller than a specific pixel size (removes furigana/noise).
*   **Condensed Audio:** VAD option to chop silence and splice audio segments together.
*   **Hotkeys:** Editable Manual OCR hotkey.

---

## Jun 09, 2025 - v1.7.2

*   **Manual OCR:** `Ctrl+Shift+G` to select and OCR an area on the fly.
*   **Texthooker:** Audio button now works without external player.
*   **UI:** Cleanup of Electron app UI.

---

## Jun 06, 2025 - Patreon

*   Launched [Patreon](https://www.patreon.com/GameSentenceMiner). No paywalled features, just support.

---

## Jun 05, 2025 - v1.7.1

*   **Fix:** OBS reconnection logic.
*   **Fix:** Launcher pulling active scene exe.

---

## Jun 03, 2025 - Timing Update

*   **Timing Source:** Now forces **Anki Creation Time** for timing logic (much more accurate than file timestamps).
*   **UI:** Replaced Console tab with a "Live View" dashboard.
*   **Queue:** Real-time card queueing system.

---

## Jun 02, 2025 - PSA

*   **Notice:** Upcoming update will enforce Anki Creation Time for timing. Recommended to enable the setting early to adjust personal offsets.

---

## Jun 01, 2025 - Path Fix

*   **Fix:** Files saving to run directory instead of configured path.
*   **OcenAudio:** Faster opening time.

---

## May 31, 2025 - v1.6.6

*   **VAD:** Whisper is now the default VAD. Added `Turbo` model option.
*   **Config:** Added "Audio Extraction END Offset".
*   **Fix:** Crash when TCL_LIBRARY env var was set.
*   **Fix:** OneOCR failing on small images (&lt;50px).

---

## May 27, 2025 - Screenshot Selector

*   **Expansion:** Screenshot selector now available for "Take Screenshot" hotkey and optional "Every Card" setting.
*   **Selector:** Pick the best frame from 20 candidates.

---

## May 26, 2025 - v1.6.5 / 2.9.5

*   **OCR:** 2nd scan is now queued in background (non-blocking).
*   **Anki:** Auto-navigates away from the card in Browser before updating to prevent lock errors.
*   **Anki:** Option to open Browser to the card after update.
*   **Linux:** Pathlib fixes.

---

## May 24, 2025 - Fixes

*   **Fix:** Texthooker delay.
*   **Anki:** Browser navigation fix.

---

## May 23, 2025 - Stability

*   **Texthooker:** Audio button re-uses previous audio if clicked again.
*   **Launcher:** Unified Game Launcher.
*   **Tray:** Left-click pickaxe to open settings.

---

## May 21, 2025 - v1.6.0 (Unified Update)

*   **Multi-Websocket:** Support for comma-separated websocket URIs (e.g., Agent + Textractor).
*   **Whisper:** Reduced temperature for more factual results.
*   **Console:** Colored logs.
*   **Tray:** Icon hides if app is open.

---

## May 19, 2025 - v2.9.0 (New Texthooker)

*   **New Texthooker:** Replaced internal texthooker with a fork of **Renji's Texthooker**, integrated with GSM features.

---

## May 19, 2025 - Optimization

*   **Smart Crop:** 2nd Pass OCR now crops the image based on OneOCR results before sending to Google Lens. Drastically reduces API size/time.

---

## May 18, 2025 - v1.5.13 / 2.5.51

*   **Optimization:** Smart cropping for 2nd pass OCR (see above).
*   **Feature:** Screenshot-Only OCR mode.
*   **Fix:** Passive fix for audio bleeding into next line.

---

## May 17, 2025 - Stability

*   **OBS:** Improved websocket stability.
*   **OCR:** Re-introduced filtering for 2nd pass to help with scrolling text.

---

## May 13, 2025 - Screenshot Selector

*   **New Feature:** Screenshot Selector workflow. Opens a UI to pick the perfect frame from 20 surrounding frames.
*   **Fix:** Fallback to PNG if WebP encoding fails.

---

## May 09, 2025 - v1.5.10 / 2.5.37

*   **OCR:** Listens to clipboard images for OCR (useful for menus).
*   **Electron:** Auto-update toggle.
*   **Python:** New OBS library, Scene-to-Profile linking.

---

## May 06, 2025 - v1.5.6

*   **Admin:** Trial running GSM as Admin by default.
*   **Fix:** Previous line screenshot VAD timing.

---

## May 04, 2025 - Presets

*   **Audio:** Presets for FFmpeg audio re-encoding (Opus).
*   **Screenshot:** Options for timing (Beginning, Middle, End).

---

## May 02, 2025 - v1.5.3

*   **OCR:** Language selector.
*   **Texthooker:** Checkbox/Button UI improvements.

---

## Apr 29, 2025 - v1.5.2

*   **Launcher:** Unified Game Launcher.
*   **Texthooker:** Historical text events.
*   **AI:** Added Groq support.

---

## Apr 25, 2025 - Fixes

*   **OCR:** Fixed OCRing inactive windows.

---

## Apr 24, 2025 - v1.5.0 (Internal Texthooker)

*   **Texthooker:** GSM now hosts its own texthooker page (`localhost:55000`).
*   **Replacements:** Text replacement rules for clipboard/websocket.
*   **OwOCR:** Configurable text replacement rules for OCR output.

---

## Apr 23, 2025 - OCR Polish

*   **Filtering:** Improved 2-pass filtering logic using full text comparison.
*   **Fix:** Window relativity logic.

---

## Apr 22, 2025 - Area Selector Updates

*   **Window Aware:** Area selector now tracks coordinates relative to the window (percentage based) to handle resizing/moving.
*   **Debug:** Saves last OCR image to temp folder.

---

## Apr 21, 2025 - v1.4.6

*   **Multi-Mine:** Window is now scrollable/infinite.
*   **OwOCR:** Window selector and Package Uninstaller.
*   **Logic:** Help with text remaining on screen.

---

## Apr 21, 2025 - Area Selector

*   **Controls:** Drag (Include), Shift+Drag (Exclude).
*   **Fix:** Windows scaling issues (requires 100% scaling for now).

---

## Apr 17, 2025 - v1.4.0 / 2.7.0 (OwOCR Integration)

### OwOCR Integration
Integrated **OwOCR** directly into GSM.
*   **Two-Pass OCR:** Local OCR (OneOCR) for speed/trigger + Cloud OCR (Google Lens) for accuracy.
*   **Area Selector:** Visual tool to draw OCR zones on screen.
*   **Latency:** Near-hook timing accuracy.

---

## Apr 14, 2025 - UI Update

*   **Electron:** UI overhaul, Settings tab added.

---

## Apr 13, 2025 - v1.3.5 / 2.6.0 (AI Prompting)

*   **AI:** Gemini 2.0 Flash integration for context-aware definitions/translations.
*   **Screenshot:** Improved timing logic (Voice End - Offset).

---

## Apr 01, 2025 - v1.3.4 / 2.5.14 (OBS Helper)

*   **OBS Helper:** Utility to help create Scenes/Sources for games and configure Automatic Scene Switcher.

---

## Mar 30, 2025 - v2.5.13

*   **Config:** Disable Audio/Screenshot processing per profile.
*   **Fix:** `[sound:None]` in Anki cards.

---

## Mar 28, 2025 - v1.3.2 / 2.5.11

*   **Performance:** Startup speed increased by ~10s.
*   **VAD:** Dynamic model loading.

---

## Mar 26, 2025 - v1.3.1 / 2.5.10

*   **Profile Sync:** Paths now sync across profiles on save.
*   **Notifications:** Fixed DND error.
*   **Fix:** Crash when line is outside replay buffer.

---

## Mar 24, 2025 - v1.3.0 / 2.5.6

*   **Advanced:** New settings tab.
*   **Multi-Mine:** Show screenshots, open audio/video from GUI.
*   **Config:** Custom linebreaks, Multi-line storage field.
*   **Tech:** Switched to Websocket communication for internal app.

---

## Mar 19, 2025 - Launchers

*   **Electron:** Added Yuzu, Steam, and VN launchers to the menu.

---

## Mar 17, 2025 - v2.5.0

*   **New:** Auto-open Multi-line window.
*   **New:** Add audio even if no voice found (Config).
*   **New:** VAD Start Offset.
*   **New:** Button to install OcenAudio.
*   **Fix:** Preserve HTML/Cloze tags in multi-mine.

---

## Mar 15, 2025 - Audio Normalization

*   **Tip:** Added recommended ffmpeg settings for Loudness Normalization.
    *   `loudnorm=I=-23:LRA=7:TP=-2`

---

## Mar 14, 2025 - Zero Escape

*   **Community:** Started a community playthrough of *Zero Escape*.

---

## Mar 13, 2025 - Language Tests

*   **Testing:** Confirmed Silero VAD works for Korean and Chinese.

---

## Mar 13, 2025 - Clipboard Logic

*   **Change:** If Websocket is connected, Clipboard monitor now pauses automatically.

---

## Mar 12, 2025 - Electron App 1.2.0

*   **Tech:** Switched to ESM.
*   **Config:** Stores config in AppData.
*   **Feature:** Yuzu Launcher integrated.

---

## Mar 09, 2025 - QoL

*   **Restart:** Button to restart GSM.
*   **Download:** More robust ffmpeg/obs downloading.
*   **Fix:** Negative screenshot offsets.

---

## Mar 07, 2025 - Python Update

*   **Cleanup:** Removed auto-update logic from python app (moved to Electron).

---

## Mar 06, 2025 - Auto-Updater

*   **Electron:** Added auto-updater for the desktop app.

---

## Mar 05, 2025 - v2.4.1

*   **Feature:** "Update GSM" button in tray to update the Python backend.

---

## Mar 04, 2025 - v2.4.0 (Electron App)

### The Desktop App
Released the **Electron App** wrapper / Installer.
*   **Installer:** Handles Python and GSM installation automatically.
*   **Portable:** Installs a portable Python environment in AppData.
*   **Future:** Foundation for auto-updates and GUI configuration.

---

## Feb 27, 2025 - v2.3.8

*   **Fix:** Duplicate text lines causing context/screenshot errors.
*   **Fix:** Multi-mine screenshot selection.

---

## Feb 23, 2025 - v2.3.6

*   **Feature:** "Previous Line Image" field for Anki.

---

## Feb 21, 2025 - Videos

*   **Tutorials:** Posted videos on Multi-Line Mining and History Mining.

---

## Feb 17, 2025 - v2.3.2+

*   **Screenshot:** Option to grab screenshot at *start* of voiceline (Voice Start + Offset).
*   **Queue:** Re-wrote card queueing for better performance.

---

## Feb 16, 2025 - v2.3.0 (Multi-Line Mining)

*   **Feature:** **Multi-Line Mining**. Select multiple lines in the GUI to combine them into one Anki card with merged audio.

---

## Feb 15, 2025 - v2.2.4

*   **Fix:** Previous Sentence field when mining from history.

---

## Feb 05, 2025 - v2.2.1

*   **Fix:** FFprobe pathing.

---

## Feb 04, 2025 - v2.2.0 (Portable OBS/FFmpeg)

*   **Setup:** GSM now automatically downloads portable versions of **OBS** and **FFmpeg**.
*   **Isolation:** Keeps GSM's OBS instance separate from your main install.
*   **Migration:** Option to import settings from existing OBS.

---

## Feb 01, 2025 - PIP Release

*   **Migration:** Moved to PyPI.
    *   Install: `pip install gamesentenceminer`
    *   Run: `gamesentenceminer`
*   **Path:** Config moved to `AppData/Roaming/GameSentenceMiner`.

---

## Jan 30, 2025 - v1.10.0

*   **Profiles:** Added Profile system for config switching.
*   **Sanitization:** Filename sanitization for special characters.
*   **Steam:** Re-designed Steam Launcher.

---

## Jan 17, 2025 - Screenshot Hotkey

*   **Config:** Option to update the last Anki card with the manual screenshot hotkey.

---

## Jan 12, 2025 - v1.9.1

*   **Tray:** Added option to Pause/Resume OBS Replay Buffer from tray.

---

## Jan 06, 2025 - v1.9.0

*   **Feature:** **External Audio Editing**. Open Anki audio in an external editor (e.g., OcenAudio), save, and the card updates automatically.

---

## Jan 04, 2025 - Fixes

*   **Fix:** Mining lines from history now properly trims audio to just that line.
*   **Launcher:** Steam launcher fix.

---

## Dec 25, 2024 - Merry Christmas

*   🎄 Happy Holidays!

---

## Dec 21, 2024 - Empty Replay Check

*   **Feature:** Checks file size of replay. If too small (black screen), skips processing to prevent bad cards.

---

## Dec 19, 2024 - OBS Library

*   **Tech:** Switched OBS websocket library for stability.

---

## Dec 11, 2024 - v1.8.0

*   **Tray Icon:** Added system tray icon.
*   **OBS:** Auto-reconnect to OBS.
*   **Exe:** Initial standalone executable build (Windows).

---

## Dec 08, 2024 - v1.7.1

*   **Fix:** Game tag not refreshing on scene switch.
*   **Fix:** Error handling for card creation loop.

---

## Nov 20, 2024 - Tags & Previous Line

*   **Feature:** **Previous Sentence** field.
*   **Feature:** **Tag Filter** (only mine if card has specific tag).
*   **Feature:** Disable Audio Processing (leave audio field blank).

---

## Nov 18, 2024 - Config Updates

*   **Work:** Started on "Ignore cards with tag" and "Previous Line" features.

---

## Nov 12, 2024 - Fix

*   **Fix:** Re-encoded audio not being sent to Anki.

---

## Nov 04, 2024 - Launchers

*   **Tool:** Added Yuzu/Ryujinx Launchers (auto-hooks Agent).

---

## Oct 29, 2024 - Linux Support

*   **Linux:** Initial compatibility patches for Linux.

---

## Oct 22, 2024 - Config GUI

*   **GUI:** Introduced a Tkinter-based Config GUI (`config_gui.py`).
*   **VAD:** Backup VAD model option.

---

## Oct 21, 2024 - VAD Options

*   **VAD:** Added **Silero VAD** as an option (Faster).
*   **Options:** Vosk (Default), Whisper, Silero.

---

## Oct 16, 2024 - Whisper & Fixes

*   **Feature:** Added **Whisper** VAD support (Experimental).
*   **Fix:** Duplicate Anki monitor threads.
*   **Feature:** Manual Screenshot hotkey.
*   **Feature:** Reset Line Timing hotkey.

---

## Sep 24, 2024 - Screenshot Settings

*   **Feature:** Custom screenshot height/width resizing.
*   **Feature:** Custom FFmpeg encoding settings for screenshots.
*   **Format:** Added AVIF support.

---

## Sep 23, 2024 - FFmpeg Settings

*   **Feature:** Custom FFmpeg encoding options for audio.
*   **Feature:** Granular overwrite options.

---

## Sep 21, 2024 - v1.4.1 (Websocket)

*   **Feature:** **Websocket Support**. GSM can now receive text via websocket (Agent/Textractor), bypassing the clipboard entirely.
*   **Feature:** **Backfill Mode**. Update existing cards without audio by matching sentence.
*   **Feature:** Improved Clipboard Timing logic.

---

## Sep 21, 2024 - v1.3.1

*   **Feature:** Custom values for Anki fields.

---

## Sep 20, 2024 - v1.2.9

*   **Fix:** Vosk initialization.

---

## Sep 19, 2024 - Updates

*   **Feature:** CLI offset adjustment hotkey.
*   **Install:** Requirements.txt included in updater.