---
title: Mining Hard-Subbed Content
sidebar_label: Hard-Subbed Content
sidebar_position: 2
---

import Admonition from '@theme/Admonition';

## Overview

GSM can be used to mine from anime, movies, or any video content with hard-coded subtitles (hard subs). This is particularly useful when:

- You're learning a language with limited gaming content (e.g., Vietnamese, Thai, Indonesian)
- You want to mine from streaming sites with embedded subtitles
- You're watching fansub releases with burned-in subtitles

While not as seamless as mining from games, this workflow allows you to capture both audio and screenshots from video content with hard subs.

:::note
This guide focuses on hard-subbed content. If you're mining from anime with soft subs (external subtitle files), I recommend tools like asbplayer.
:::

## Setup Overview

The basic workflow involves:
1. Setting up a browser window or video player with your content
2. Capturing that window using GSM/OBS
4. Cropping the capture to show only the subtitle area (optional but recommended)


## Step 1: Set Up Your Video Source

Open your video content in a browser or video player. Common options include:

- **Web Browsers**: Chrome, Edge, Brave, Firefox
- **Video Players**: VLC, MPC-HC, mpv

:::tip Browser Compatibility
Some users have reported that Chrome doesn't always appear in GSM's window capture dropdown. If you experience this issue, try using **Edge** or **Brave**, which tend to work more reliably. Alternatively, you can capture Chrome through OBS (see Step 3).
:::

:::tip Install as App
For a cleaner experience, consider installing your video site (e.g., BiliBili, Netflix) as a standalone app using your browser's "[Install as App](https://support.google.com/chrome/answer/9658361)" feature. This creates a dedicated window without browser UI clutter.
:::

:::warning DRM Note
Some streaming services use DRM that may prevent screen capture. If you encounter issues, consider using a different video source or player that allows capturing, or disable Hardware Acceleration in your browser settings.
:::

## Step 2: Capture the Video in OBS

### Option A: GSM Window Capture (Recommended)

If you see the browser or video player window in GSM's dropdown, you can capture it directly by selecting it, and pressing "Window Capture".

### Option B: Direct Window Capture (Recommended #2)

1. Open OBS Studio
2. Create a new scene for your video capture, call it something that makes sense to you, since it will be used to name the files.
2. In the **Sources** panel, click the **+** button
3. Select **Window Capture**
4. Give it a name (e.g., "BiliBili Capture") and click **OK**
5. In the window dropdown, select your browser or video player window.
6. If available, use `Windows 10` Capture Method.
7. Enable "Audio Output Capture" in OBS to capture audio from the video.
8. Disable "Capture Cursor" unless you want the mouse cursor to appear in your screenshots.
9. Click **OK**

![OBS Window Capture Example](/img/guides/obs-window-capture.png)

### Option B: Display Capture

If window capture doesn't work for your setup:

1. In OBS Sources, add a **Display Capture**
2. Select your monitor
3. You can crop it later to show only the video window

:::warning Performance Note
Display capture may use more system resources than window capture. Use window capture when possible.
You will also need to enable Desktop Audio, which is not generally not recommended for a clean experience.
:::

## Step 3: Crop to Subtitle Area (Optional)

To focus on the subtitle area and reduce file sizes:

1. Right click on the Preview area in OBS, select **Transform > Edit Transform**
2. Adjust the crop at the bottom to include just the video area.
3. This will make your screenshots cleaner and your Anki cards more focused

![Cropping the Output](/img/guides/crop-output.png)

:::tip Why Crop?
Cropping to just the subtitle area:
- Makes screenshots cleaner for Anki cards
- Reduces image file sizes
- Helps you focus on the text when reviewing
- Removes distracting UI elements
:::

## Step 4: OCR

Now you can use GSM's OCR feature to capture the subtitles from your video content just as if it was a Game. Make sure to adjust the OCR area to match the subtitle position in the video. 

:::note No crop?
The cropped output and what GSM grabs for OCR is different, so don't be alarmed if the OCR config image doesn't match what you see in OBS.
:::

![GSM OCR Setup](/img/guides/hardsub-ocr-setup.png)

## Step 5: Mine

Just like with games, you can now mine the subtitles as they appear in the video, and they will be captured along with audio and screenshots.

Happy mining! 🎬
