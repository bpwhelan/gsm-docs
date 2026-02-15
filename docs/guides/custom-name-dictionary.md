---
title: Custom Name Dictionary
sidebar_label: Custom Name Dictionary
sidebar_position: 2
---

# Custom Name Dictionary

GSM can generate a custom Yomitan character dictionary based on the visual novels, anime, manga, and light novels you're currently consuming. This dictionary is available under **Stats → Database Management**.

## What It Does

The dictionary pulls character data from VNDB and other sources to give you in-context lookups for character names directly in Yomitan.

- **Auto-updates based on your current title** — Characters are added when you start a title and removed when you're done, so you won't see unrelated names from other franchises.
- **More than just names** — Includes descriptions, relationships, age, aliases, and nicknames (e.g. 神様 pointing to the correct character).
- **Spoiler-aware** — You can set spoiler levels or disable descriptions entirely if you prefer.
- **Works across media types** — Visual novels, anime, manga, and light novels are all supported.
- **Useful for returning to dropped titles** — If you come back months later and don't remember who's who, the dictionary helps re-establish context quickly.

## Setup

### 1. Download the Dictionary

1. Open the GSM Stats page.
2. Go to the **Database Management** tab.
3. Download the character dictionary file. It will be saved as a `.zip` file that Yomitan can read.

### 2. Import into Yomitan

:::warning Yomitan Import is Manual
Yomitan does not currently support automatic dictionary imports. You must manually import and update the dictionary yourself each time it changes. There is an open ticket in Yomitan to allow auto-updates, so this may become fully automatic in the future.
:::

1. Open Yomitan's settings in your browser.
2. Go to the **Dictionaries** section.
3. Click **Import** and select the `.zip` file you downloaded from GSM.
4. The dictionary should now appear in your dictionary list and be active for lookups.

### 3. Updating the Dictionary

When your active titles change (you start a new game, finish one, etc.), the dictionary content updates on the GSM side. To get those changes into Yomitan:

1. Go back to **Stats → Database Management** in GSM.
2. Download the updated dictionary file.
3. In Yomitan's settings, **delete the old version** of the GSM dictionary.
4. **Import the new `.zip` file** to replace it.

You will need to repeat this process each time you want to sync the latest character data into Yomitan.

## Spoiler Settings

The dictionary supports configurable spoiler levels so you can control how much information is shown:

- **No descriptions** — Only character names and aliases, no additional detail.
- **Spoiler level filtering** — Choose how much detail to include based on your progress. This lets you avoid accidentally seeing plot details for characters you haven't encountered yet.

Configure these options in **Stats → Database Management** before downloading the dictionary.

## Tips

- If you're starting a new visual novel and want character names available right away, download and import the dictionary after GSM has registered the title.
- Re-import the dictionary whenever you switch to a new title to keep your lookups relevant and avoid stale entries from previous titles.
- If you use multiple media types (VN + anime of the same franchise), character data from all active titles will be merged into a single dictionary.
