---
title: Hachidori Dictionary Reader
sidebar_label: Hachidori
sidebar_position: 5
---

import ImageFrame from '@site/src/components/ImageFrame';

# Hachidori Dictionary Reader

The GSM overlay can use either its embedded Yomitan reader or **Hachidori**, a Japanese dictionary reader with its own import and popup settings. Yomitan remains the default. Switching readers keeps your Yomitan dictionaries and settings intact.

## Switch to Hachidori

1. Open **Settings → Desktop → Dictionary**.
2. Set **Lookup reader** to **Hachidori**. GSM reloads the overlay with the selected reader.
3. Choose **Open Hachidori Settings** to import dictionaries and adjust Hachidori's reading, design, and Anki options.
4. Return to the game and test a lookup. Use the same overlay controls for navigation and mining.

<ImageFrame src="/img/features/hachidori/dictionary-import.png" alt="Hachidori dictionary import page inside the GSM overlay" caption="Hachidori imports dictionaries from local files and shows the import result." />

Hachidori can import Yomitan ZIP dictionaries. Its dictionary groups, personal dictionary, custom popup buttons, pitch display, and design preview are configured inside Hachidori. Overlay shortcuts and controller navigation remain configured in GSM's Overlay Settings.

<ImageFrame src="/img/features/hachidori/dictionary-lookup.png" alt="Hachidori lookup popup in the GSM overlay" caption="Hachidori lookup results appear in the game overlay and support entry navigation and mining." />

## Use a controller

GSM's [Overlay Gamepad Navigation](./overlay-gamepad.md) works with Hachidori. You can navigate entries, play dictionary audio, and mine through Hachidori's native controls. GSM also retains its Jiten grading integration when enabled.

To return to Yomitan, choose **Settings → Desktop → Dictionary → Lookup reader → Yomitan**. The overlay reloads with your existing Yomitan data.
