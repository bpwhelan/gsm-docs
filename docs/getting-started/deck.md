---
title: Installing GSM on Steam Deck
sidebar_label: Steam Deck
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GameSentenceMiner on Steam Deck

GameSentenceMiner runs natively on the Steam Deck! Because the Steam Deck is essentially a Linux PC, you can run the full GSM experience directly on the handheld. Alternatively, for better battery life and performance, you can stream your desktop PC to the Deck.

:::tip Recommendation
My personal recommendation on Steam Deck is to use streaming for the best experience and feature completion in GSM. This is especially true for playing high-end games or Visual Novels that require Windows-only tools.
:::

<Tabs>
  <TabItem value="native" label="Native Steam Deck" default>

    ## Native Setup

    Running GSM natively allows you to mine sentences anywhere, even without an internet connection. This guide focuses on using the Steam Deck's Desktop Mode to set everything up.

    These instructions are on a completely fresh Steam Deck install, if you run into any issues, please open an issue on the [GitHub repository](https://github.com/bpwhelan/GameSentenceMiner/issues), or join the [GSM Discord](https://discord.gg/yP8Qse6bb8).

    :::note
    Using GSM in Game mode is not currently supported due to system limitations. As long as GSM uses OBS for capture, it will likely not be supported without some major rewrite. If you want to use GSM in Gaming Mode, please consider streaming from a PC instead.
    :::

    ### 1. Prerequisites

    #### Switch to Desktop Mode
    1. Press the **Steam** button.
    2. Go to **Power** > **Switch to Desktop**.

    #### Install FFmpeg

    Install FFmpeg in Desktop Mode using the [Linux instructions](./linux.md). Check that both `ffmpeg` and `ffprobe` are available to GSM.

    #### Install OBS Studio
    GSM needs OBS Studio to capture the game screen for OCR.
    1. Open the **Discover** store (shopping bag icon on the taskbar).
    2. Search for "OBS Studio".
    3. Install the Flatpak version.
    
    ![OBS Flatpak Installation](/img/deck/obs_flatpak.png)
    
    #### Enable OBS WebSocket Server
    
    1. In OBS, go to **Tools** > **WebSocket Server Settings**.
    2. Check **Enable WebSocket Server**.
    3. Keep **Enable Authentication** checked and enter the generated password in GSM's OBS settings.
    4. Set **Server Port** to `7274`.
    

    #### Enable Replay Buffer
    
    1. Go to **Settings** > **Output** > **Replay Buffer**.
    2. Check **Enable Replay Buffer**.
    3. Set **Maximum Replay Time** to `120` (or higher) seconds.
    
    ![OBS Replay Buffer Settings](/img/deck/obs_replay_buffer.png)

    #### Save Resources

    1. Set FPS to `10` in **Settings** > **Video** to save resources.
    
    ![OBS FPS Settings](/img/deck/obs_fps.png) 

    #### Install Anki
    I used the official Linux build.

    1. Go to the [official Anki website](https://apps.ankiweb.net/).
    2. Download the Linux version (Download Anki for Linux -> Download .tar.zst).
    3. Open your file manager (Dolphin), find the downloaded file, right-click it and choose **Extract** > **Extract archive here**.
    4. Open the extracted folder.
    5. Install Anki from that folder as described in [Anki’s Linux installation guide](https://docs.ankiweb.net/manual/platform/linux/installing), then start Anki.

    #### Configure Anki
    1. Open Anki.
    2. Go to **Tools** > **Add-ons** > **Get Add-ons...**.
    3. Enter code `2055492159` to install **AnkiConnect**.
    4. Restart Anki.

    ### 2. Install GameSentenceMiner

    We use the AppImage version for Steam Deck.

    1. Go to the [GSM release for the version you want](https://github.com/bpwhelan/GameSentenceMiner/releases).
    2. Download the `.AppImage` file.
    3. Double Click the downloaded file to run it. If it doesn't run:
       - Right-click the file, go to **Properties** > **Permissions** tab.
       - Check **Is executable**.
       - Close and double-click the file again.

    ### 3. Configure Capture and OCR

    Start OBS and GSM in Desktop Mode, then use **Home → select the game → ⋯ → Run Capture Wizard** to test the game image. Create an OBS scene manually if the capture wizard cannot make one for your setup.

    Choose **OCR** in the wizard or open GSM's **OCR** tab. Select a region around the dialogue, run a sample scan, and save the setup. See [OCR Setup](../features/ocr.md) for the current area selector and scan controls.

    ### 4. Set Up the Overlay and Controller

    Launch the overlay from GSM's Home tab and configure its capture and display options in **Overlay Settings**. Import dictionaries into the overlay's embedded Yomitan; these are separate from browser Yomitan dictionaries.

    Connect a controller and configure navigation in **Overlay Settings → Controller**. A trackpad can also be used as a pointer. See [Overlay](../features/overlay.md) and [Overlay Gamepad Navigation](../features/overlay-gamepad.md).

    ### 5. Play and Mine

    - Start OBS, GSM, and Anki.
    - Use the capture wizard's final step to choose whether OCR should start automatically for the game.
    - Check that dialogue appears in GSM's Text Feed.
    - Look up a word in the overlay and create an Anki card.

    Steam Deck support depends on the Linux desktop and capture source in use. The Game mode environment is more restrictive than Desktop Mode; streaming from a configured PC is often simpler. Continue with [How to Use GSM](../how-to-use-gsm.md) for the full workflow.
  </TabItem>
  <TabItem value="streaming" label="Streaming from PC">

    ## Streaming Setup

    If you have a powerful desktop PC, streaming games to your Steam Deck via **Apollo** (Recommended over Sunshine for virtual display capabilities) -> **Moonlight** is often the best experience. It saves battery life on the Deck and allows you to use your PC's superior processing power for OCR.

    Most of this setup is from memory, as I set it up a long time ago, so please forgive any minor inaccuracies. For the official guide (which I didn't know existed), look here: https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide

    ### How it works
    1. **Run GSM and the Game on your PC**, not the Deck.
    2. **Stream your Desktop** to the Deck.
    3. Use the Steam Deck as a controller/screen.

    ### Setup Steps
    1. **On your PC**: Install GSM and configure it as usual (see [Windows Guide](windows.md)).
       - Install [Apollo](https://github.com/ClassicOldSong/Apollo/releases) and set it up. 
       - **Optional** If you have more than one monitor or want your exact resolution (1280x800): Configuration -> Audio/Video -> Advanced Display device options -> Device Configuration: Deactivate other displays and activate only the specified display.
    2. **On Steam Deck**:
       - Go Into "Desktop Mode" (Steam Button > Power > Switch to Desktop).
       - Install **Moonlight** (from Discover store) for the best performance (requires Apollo on PC).
       - In Steam, add Moonlight as a non-Steam game.
       - Go back to **Gaming Mode** (Steam Button > Power > Switch to Gaming Mode).
       - Launch **Moonlight** from your Library -> Non-Steam.
       - Select your PC running Apollo, and note the PIN displayed.
    3. **Back on your PC**:
       - Enter the PIN on your PC to pair the devices.
       - Allow Permissions for the selected devices to be able to start apps, and control with controller/mouse. (I just allow all).
       
    ### **Controls**:
    You might need to adjust some controls for better usability. I set this up a long time ago, so I don't remember all the details, but here are some tips:
    - Map one of the Back Buttons (L4/L5/R4/R5) to `Right Alt` for quick access to Text Feed.
    - Map another Back Button to `Tab` to switch between windows.
    - I prefer using the right trackpad as a mouse, with the left trackpad for scrolling. Then I map the left trackpad click to left mouse button, and the right trackpad click to right mouse button.
      - With these settings, I can easily interact with the GSM overlay or Anki while gaming.

    And that's it, now you can open moonlight on your steamdeck, launch **Virtual Desktop**, game, and mine!

    #### Optional: Streaming over the internet

    You can also stream away from your home network, for a more detailed guide, see: https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide#streaming-over-the-internet

    I personally Port Foward, but this is not recommended for most users.

  </TabItem>
</Tabs>
