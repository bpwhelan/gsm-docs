---
title: Overlay Gamepad Navigation
sidebar_label: Overlay Gamepad
sidebar_position: 5
---

# Overlay Gamepad Navigation

Use a controller to move through recognized game text and open Yomitan lookups without taking your hands off the gamepad. Controller navigation is an overlay feature; first finish [Overlay setup](./overlay.md) and import dictionaries into embedded Yomitan.

## Quick setup

1. Open **Overlay Settings → Controller**.
2. Enable gamepad navigation and check the connection status.
3. Connect a controller and use the binding controls to confirm its buttons are recognized.
4. Choose an activation mode and set the actions you want to use.

On Windows, start with the default input listener. Extended controller support for DirectInput or SDL devices is opt-in and requires a GSM restart after you change a listener. Windows supports Xbox, PlayStation, Switch, and generic controllers; support and available backends vary by operating system.

## Navigate and mine

- Use the direction controls to move between recognized text blocks and across a line.
- Choose **Modifier** activation to navigate while holding a button, or **Toggle** to enter and leave navigation mode with a button.
- Use character navigation for precise movement or token navigation to jump by words. A tokenizer backend is needed for token navigation; the default bundled option is suitable for most users.
- Auto-confirm can open Yomitan as the cursor moves. If you turn it off, use the configured confirm button to open the lookup.
- With a Yomitan popup open, use the configured confirm action to mine to Anki. The configured cancel action exits navigation or dismisses the popup.
- The left thumbstick can act as a pointer, and the right thumbstick can scroll an open popup when those controls are enabled.

All button bindings and timing controls are visible in **Overlay Settings → Controller**. Check that screen for the current defaults, since bindings and supported listeners can change between releases.

## Troubleshooting

- If no controller is listed, reconnect it and check which input listener is enabled.
- If navigation works but no definition appears, confirm the overlay is running and dictionaries are imported in its embedded Yomitan.
- If movement repeats too quickly or slowly, adjust repeat timing in Gamepad settings.
- If a controller does not work on Windows, test the default listener before enabling extended support.
