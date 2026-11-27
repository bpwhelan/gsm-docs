---
title: Custom Name Dictionary
sidebar_label: Custom Name Dictionary
sidebar_position: 2
---

# Custom Name Dictionary

GSM can generate a custom Yomitan character dictionary using character data for your recently played games. This dictionary is available under **Stats → Tools**.

## What It Does

The dictionary pulls character data from VNDB and other sources to give you in-context lookups for character names directly in Yomitan.

- **Choose which games to include** — The dictionary uses your most recently played games. You can set the game count before downloading.
- **More than just names** — Includes descriptions, relationships, age, aliases, and nicknames (e.g. 神様 pointing to the correct character).
- **Spoiler-aware** — You can set spoiler levels or disable descriptions entirely if you prefer.
- **Useful for returning to dropped titles** — If you come back months later and don't remember who's who, the dictionary helps re-establish context quickly.

## Setup

### 1. Download the Dictionary

1. Open the GSM Stats page.
2. Go to **Tools → Download Special GSM Yomitan Dictionary** and choose the number of recent games to include.
3. Download the character dictionary file. It will be saved as a `.zip` file that Yomitan can read.

### 2. Import into Yomitan

1. Open Yomitan's settings in your browser.
2. Go to the **Dictionaries** section.
3. Click **Import** and select the `.zip` file you downloaded from GSM.
4. The dictionary should now appear in your dictionary list and be active for lookups.

### 3. Updating the Dictionary

Keep GSM running. In Yomitan’s dictionary settings, select **Check for updates**, then **Update all**. To change the game count or spoiler level, download a new ZIP with those settings.

## Spoiler Settings

The dictionary supports configurable spoiler levels so you can control how much information is shown:

- **No Spoilers** — Shows the character’s name, photo and game.
- **Spoiler level filtering** — Choose how much detail to include based on your progress. This lets you avoid accidentally seeing plot details for characters you haven't encountered yet.

Configure these options in **Stats → Tools** before downloading the dictionary.

## Tips

- If you're starting a new visual novel and want character names available right away, download and import the dictionary after GSM has registered the title.
- Check for updates in Yomitan when you switch to a new title to keep your lookups relevant and avoid stale entries from previous titles.
