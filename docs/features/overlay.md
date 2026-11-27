---
title: Overlay
sidebar_label: Overlay
sidebar_position: 4
---

import ImageFrame from '@site/src/components/ImageFrame';

# GSM Overlay

The overlay places dictionary lookup targets over the game so you can look up dialogue without switching to another window. GSM's embedded Yomitan opens a definition when you hover or click a recognized word. The overlay can also show the full line, translations, and other line actions.

## Start the overlay

1. Connect OBS and configure a game capture.
2. From GSM's **Home** tab, open **Overlay Settings** and check the capture and interaction options.
3. Launch the overlay from Home. You can also choose to open and close it with the active game.
4. Start a new text line and hover or click one of its words in the game.

<ImageFrame src="/img/desktop/overlay-overview.png" alt="Current GSM Overlay Settings overview" caption="The current settings window organizes overlay capture, reading, interaction, and gamepad options." />

## Set up Yomitan in the overlay

The overlay includes its own Yomitan instance for in-game lookups. Its dictionaries and settings are separate from browser Yomitan, so importing a dictionary in your browser does not add it to the overlay.

1. Open the overlay and open **Yomitan settings** from its toolbar.
2. Import the dictionary archives you want to use in the overlay. Enable them and adjust their order in Yomitan if you use multiple dictionaries.
3. Open a new game line and hover or click a word to check that the expected definitions appear.
4. If you want to add cards from overlay Yomitan, configure its AnkiConnect integration and note type in that Yomitan instance as well.

Use [Anki and Yomitan setup](../getting-started/yomitan-anki.md) for recommended note types and field mappings. Those browser-Yomitan settings do not automatically transfer to the overlay; repeat the relevant setup in the overlay's Yomitan settings if you mine cards there.

## How text gets positioned

The overlay needs both the dialogue and its position on the game image:

- A **text hook** supplies the dialogue. GSM then uses an OCR scan to find the words on screen and position lookup targets.
- **OCR capture** supplies both the text and word positions. See [OCR Setup](./ocr.md) to configure its regions and recognition settings.

If the overlay shows text but no lookup target, confirm that GSM is capturing the same game window shown in OBS. Some full-screen modes make overlay positioning unreliable; borderless window or windowed mode is usually easier to capture.

<ImageFrame src="/img/desktop/overlay-capture.png" alt="Current overlay OCR capture settings" caption="Overlay capture settings include the OCR engine and scan behavior used to locate words." />

## Look up and work with a line

- **Hover or click** a word to open its Yomitan definition.
- Use the **overlay toolbar** for translation, explanation, and other actions on a line. Translations are placed with their matching text blocks.
- Show the **floating text box** when you want to read the full captured line separately from the game text.
- Open **Yomitan settings** from the overlay to manage dictionaries and popup behavior.
- Choose **Hachidori** as an alternate Japanese dictionary reader in **Settings → Desktop → Dictionary → Lookup reader**. See [Hachidori](./hachidori.md).
- Use [Gamepad Navigation](./overlay-gamepad.md) to move between words and trigger lookups with a controller.

Shortcuts and display preferences are configurable in **Overlay Settings**. Look there for manual activation, visibility, scan, font, and interaction controls rather than relying on a fixed shortcut list from an older release.

## Useful settings

- **Open and close with active game** starts the overlay when GSM detects a game session and closes it when the session ends. This is available from the Home tab's Overlay card.
- **Adaptive OCR Retries** can retry local OCR while dialogue is still appearing. It is experimental, off by default, and increases local OCR work.
- **Hide When Text Overlaps** temporarily hides the live statistics widget when overlay text covers it.
- **Controller** settings select the input method and controller bindings. Extended controller support is opt-in on Windows.

## Troubleshooting

### No definition appears

Import dictionaries into the overlay's embedded Yomitan, then test with a new line of readable text. Browser Yomitan's dictionaries do not automatically appear in the overlay.

### Lookup targets are missing or misplaced

Check that the right game is selected in OBS, the overlay is using the intended capture, and the dialogue is visible when the hook event arrives. Try borderless or windowed mode if the game uses exclusive fullscreen.

### The overlay is not visible

Check the Home tab's Overlay card and the active game's open/close option. If the overlay is running but hidden, check its visibility and manual activation settings.

For the full first-use path, see [How to Use GSM](../how-to-use-gsm.md).
