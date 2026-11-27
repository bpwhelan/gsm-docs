---
title: Fixing Incomplete Sentences in Anki
sidebar_label: Incomplete Sentences
sidebar_position: 2
---

import Admonition from '@theme/Admonition';

## The Problem

You may notice that when you create an Anki card, the `Sentence` field is sometimes cut short. This is not caused by GSM, but by how Yomitan determines the end of a sentence. By default, it uses punctuation like `。`, `！`, and `？`.

For example, if the full line in your game is:
`ゲーマーＣ「対戦ありがとうございました。やっぱりさや猫さんにはまだまだ敵わないみたいですね」`

Depending on where you look up a word, Yomitan might only capture one of the following parts as the sentence:
- `対戦ありがとうございました。`
- `やっぱりさや猫さんにはまだまだ敵わないみたいですね`

GSM will still capture the audio and screenshot for the *entire* line, but the text in your card will be incomplete.

## The Solution: Yomitan Profiles

The best way to solve this is to create a dedicated Yomitan profile that only activates on GSM's Text Feed and uses a different rule for splitting sentences.

### 1. Create a New Profile

In Yomitan settings, go to the `Profiles` section and create a new profile. You can name it "GSM" or "Text Feed".

![Creating a new Yomitan profile](https://github.com/user-attachments/assets/09770ed6-fdec-4791-af20-0df0aaebecd5)

### 2. Configure the Profile Condition

Set up a condition to automatically switch to this new profile when you are on the Text Feed.

-   **Type**: `URL` → `Matches RegExp`
-   **Pattern**: `^http://localhost:7275/texthooker(?:[/?#]|$)`

:::tip
The default port for GSM's Text Feed and API is `7275`. If you have changed this in GSM's settings, make sure to update the port number in the URL pattern here as well.
:::

### 3. Set the Sentence Termination Method

While your new "GSM" profile is active, go to `Settings -> Text Parsing`. Change the **Sentence termination characters** option to **Newlines only**.

![Setting sentence termination to Newlines only](https://github.com/user-attachments/assets/b96a3a83-f09b-4513-ab9a-0fb2a258e78d)

Now, Yomitan will treat the entire line sent by GSM as a single sentence, ensuring your Anki cards have the full context.

### Optional: Clean Up in Text Feed

To ensure consistent behavior, you can use the Text Feed's built-in regex replacement to replace newline characters (`\n`) with nothing. This keeps each game line in a single paragraph, which works well with the "Newlines only" setting.

![Using regex to remove newlines in the GSM Text Feed](https://github.com/user-attachments/assets/50537106-c98a-4205-a4c2-09be06ad36be)
