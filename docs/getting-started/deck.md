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

    #### Install OBS Studio
    GSM needs OBS Studio to capture the game screen for OCR.
    1. Open the **Discover** store (shopping bag icon on the taskbar).
    2. Search for "OBS Studio".
    3. Install the Flatpak version.
    
    ![OBS Flatpak Installation](/img/deck/obs_flatpak.png)
    
    #### Enable OBS WebSocket Server
    
    1. In OBS, go to **Tools** > **WebSocket Server Settings**.
    2. Check **Enable WebSocket Server**.
    3. Uncheck **Enable Authentication** (GSM works best without it on Deck).
       - OR copy the password generated for you, and paste it in OBS Settings in GSM Later.
    4. Set **Server Port** to `7274`.
    
    ![OBS WebSocket Settings](/img/deck/websocket_setting.png)

    #### Enable Replay Buffer
    
    1. Go to **Settings** > **Output** > **Replay Buffer**.
    2. Check **Enable Replay Buffer**.
    3. Set **Maximum Replay Time** to `120` (or higher) seconds.
    
    ![OBS Replay Buffer Settings](/img/deck/obs_replay_buffer.png)

    #### Save Resources

    1. Set FPS to `10` in **Settings** > **Video** to save resources.
    
    ![OBS FPS Settings](/img/deck/obs_fps.png) 

    #### Install Anki
    The Flatpak version of Anki on the Discover store can sometimes have issues with add-ons or permissions (I'm not sure if this is true tbh). I just used the official Linux build.

    1. Go to the [official Anki website](https://apps.ankiweb.net/).
    2. Download the Linux version (Download Anki for Linux -> Download .tar.zst).
    3. Open your file manager (Dolphin), find the downloaded file, right-click it and choose **Extract** > **Extract archive here**.
    4. Open the extracted folder.
    5. Double click "Anki.sh" to install and run Anki.

    #### Configure Anki
    1. Open Anki.
    2. Go to **Tools** > **Add-ons** > **Get Add-ons...**.
    3. Enter code `2055492159` to install **AnkiConnect**.
    4. Restart Anki.

    ### 2. Install GameSentenceMiner

    We use the AppImage version for Steam Deck.

    1. Go to the [latest GSM release](https://github.com/bpwhelan/GameSentenceMiner/releases/latest).
    2. Download the `.AppImage` file.
    3. Double Click the downloaded file to run it. If it doesn't run:
       - Right-click the file, go to **Properties** > **Permissions** tab.
       - Check **Is executable**.
       - Close and double-click the file again.

    :::info First Run
    On the first launch, GSM will set up its internal environment. This might take a few minutes, depending on internet speed, this can probably be improved in future releases.
    :::

    ### 3. Setup OCR

    With an OBS Scene and active capture setup, OCR should be as simple as it is on other platforms. Just set an area, start auto OCR, and you should be good to go.

    In order to save the area, there is a right click menu on the area selection box with a "Save Area" option. The other types of area (exclusion, menu) can't be set up yet (silly mistake), but will be fixed in future releases.

    ### 4. Controller Configuration

    To make mining comfortable in Desktop Mode, you should map the necessary keys to your Steam Deck buttons.

    **Recommended Bindings:**
    -   **Back Buttons (L4/L5/R4/R5):** Map one to `Right Alt` (**VERY IMPORTANT THAT IT IS RIGHT ALT**) and another to `Tab`. This allows you to quickly switch between your game and Texthooker.
    -   **Trackpad:** Set one trackpad as a Mouse so you can interact with the GSM overlay (if it works) or window.

    You can configure these in **Desktop Mode** by pressing the **Steam** button > **Controller Settings** while the game is running.

    ### 5. Recommended Settings

    In GSM, go to **Settings** and adjust the following for better performance on the Deck, to open GSM Settings, there is a button in the `Home` tab.
    - VAD Settings:
      - `Whisper Model`: `tiny` 
      - OR `Select VAD Model`: `Silero`.
    - General Settings:
      - `Clipboard Enabled`: `OFF` - Saves resources. Linux Clipboard compatibility is not great compared to Windows, and I recommend using websocket anyway.
    - Features Settings:
        - `Open Anki Note in Edit View`: `OFF` - It's pretty distracting on Deck.

    ### 6. Put it all together

    - Start GSM, OBS, Anki
    - Launch your Game
    - Launch OCR/Texthooker
    - Play normally, alt tab between game and texthooker as needed for lookups and mining.
    - Overlay support is experimental on Deck, so may not work correctly.

    <details>
      <summary>📸 Complete Installation Screenshots (Click to expand)</summary>

    Below is a complete dump of screenshots taken during the installation process on Steam Deck for reference. These map help, but are not step-by-step instructions.

    ![Screenshot 1](/img/deck/dump/Screenshot_20260106_094724.png)
    
    ---

    ![Screenshot 2](/img/deck/dump/Screenshot_20260106_094806.png)

    ---

    ![Screenshot 3](/img/deck/dump/Screenshot_20260106_094808.png)

    ---

    ![Screenshot 4](/img/deck/dump/Screenshot_20260106_094815.png)

    ---

    ![Screenshot 5](/img/deck/dump/Screenshot_20260106_094916.png)

    ---

    ![Screenshot 6](/img/deck/dump/Screenshot_20260106_094933.png)

    ---

    ![Screenshot 7](/img/deck/dump/Screenshot_20260106_095010.png)

    ---

    ![Screenshot 8](/img/deck/dump/Screenshot_20260106_095217.png)

    ---

    ![Screenshot 9](/img/deck/dump/Screenshot_20260106_095325.png)

    ---

    ![Screenshot 10](/img/deck/dump/Screenshot_20260106_095342.png)

    ---

    ![Screenshot 11](/img/deck/dump/Screenshot_20260106_095349.png)

    ---

    ![Screenshot 12](/img/deck/dump/Screenshot_20260106_095449.png)

    ---

    ![Screenshot 13](/img/deck/dump/Screenshot_20260106_095509.png)

    ---

    ![Screenshot 14](/img/deck/dump/Screenshot_20260106_095512.png)

    ---

    ![Screenshot 15](/img/deck/dump/Screenshot_20260106_095639.png)

    ---

    ![Screenshot 16](/img/deck/dump/Screenshot_20260106_095938.png)

    ---

    ![Screenshot 17](/img/deck/dump/Screenshot_20260106_095950.png)

    ---

    ![Screenshot 18](/img/deck/dump/Screenshot_20260106_100429.png)

    ---

    ![Screenshot 19](/img/deck/dump/Screenshot_20260106_100435.png)

    ---

    ![Screenshot 20](/img/deck/dump/Screenshot_20260106_100913.png)

    ---

    ![Screenshot 21](/img/deck/dump/Screenshot_20260106_101107.png)

    ---

    ![Screenshot 22](/img/deck/dump/Screenshot_20260106_101127.png)

    ---

    ![Screenshot 23](/img/deck/dump/Screenshot_20260106_101206.png)

    ---

    ![Screenshot 24](/img/deck/dump/Screenshot_20260106_101238.png)

    ---

    ![Screenshot 25](/img/deck/dump/Screenshot_20260106_101241.png)

    ---

    ![Screenshot 26](/img/deck/dump/Screenshot_20260106_101253.png)

    ---

    ![Screenshot 27](/img/deck/dump/Screenshot_20260106_101319.png)

    ---

    ![Screenshot 28](/img/deck/dump/Screenshot_20260106_101326.png)

    ---

    ![Screenshot 29](/img/deck/dump/Screenshot_20260106_101331.png)

    ---

    ![Screenshot 30](/img/deck/dump/Screenshot_20260106_101521.png)

    ---

    ![Screenshot 31](/img/deck/dump/Screenshot_20260106_101554.png)

    ---

    ![Screenshot 32](/img/deck/dump/Screenshot_20260106_101609.png)

    ---

    ![Screenshot 33](/img/deck/dump/Screenshot_20260106_101708.png)

    ---

    ![Screenshot 34](/img/deck/dump/Screenshot_20260106_101955.png)

    ---

    ![Screenshot 35](/img/deck/dump/Screenshot_20260106_102044.png)

    ---

    ![Screenshot 36](/img/deck/dump/Screenshot_20260106_102104.png)

    ---

    ![Screenshot 37](/img/deck/dump/Screenshot_20260106_102120.png)

    ---

    ![Screenshot 38](/img/deck/dump/Screenshot_20260106_103050.png)

    ---

    ![Screenshot 39](/img/deck/dump/Screenshot_20260106_103114.png)

    ---

    ![Screenshot 40](/img/deck/dump/Screenshot_20260106_103551.png)

    ---

    ![Screenshot 41](/img/deck/dump/Screenshot_20260106_103559.png)

    ---

    ![Screenshot 42](/img/deck/dump/Screenshot_20260106_104315.png)

    ---

    ![Screenshot 43](/img/deck/dump/Screenshot_20260106_104504.png)

    ---

    ![Screenshot 44](/img/deck/dump/Screenshot_20260106_104511.png)

    ---

    ![Screenshot 45](/img/deck/dump/Screenshot_20260106_104516.png)

    ---

    ![Screenshot 46](/img/deck/dump/Screenshot_20260106_104720.png)

    ---

    ![Screenshot 47](/img/deck/dump/Screenshot_20260106_112227.png)


    </details>

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
    - Map one of the Back Buttons (L4/L5/R4/R5) to `Right Alt` for quick access to Texthooker.
    - Map another Back Button to `Tab` to switch between windows.
    - I prefer using the right trackpad as a mouse, with the left trackpad for scrolling. Then I map the left trackpad click to left mouse button, and the right trackpad click to right mouse button.
      - With these settings, I can easily interact with the GSM overlay or Anki while gaming.

    And that's it, now you can open moonlight on your steamdeck, launch **Virtual Desktop**, game, and mine!

    #### Optional: Streaming over the internet

    You can also stream away from your home network, for a more detailed guide, see: https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide#streaming-over-the-internet

    I personally Port Foward, but this is not recommended for most users.

  </TabItem>
</Tabs>