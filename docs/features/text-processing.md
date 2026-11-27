---
title: Text Processing
sidebar_label: Text Processing
sidebar_position: 3
---

# Text Processing

The **Text Processing** tab lets you clean up text captured from games before GSM uses it for lookup, matching, and card creation. It is useful when a game adds control codes, repeats characters, splits lines, or includes speaker and script markup.

## Build a processing pipeline

1. Open **Text Processing** from GSM's tab bar.
2. Enable only the processors you need. Available processors include string replacement (plain text or regular expression), repeated character or line cleanup, control-character removal, newline handling, character filtering, extracting bracketed dialogue, limiting lines, and Unicode normalization.
3. Drag processors to set the order. They run from top to bottom, so a replacement can prepare text for a later cleanup step.
4. Paste a sample into **Live Preview** and compare the output with the original.
5. Changes save automatically. Check that the preview keeps the dialogue you want to mine.

Start with one rule at a time. Removing English, numbers, newlines, or non-Japanese characters can discard useful text in mixed-language games, names, or subtitles.

## Keep rules specific to the problem

- Use a **plain text** rule for a fixed unwanted string; use **regex** only when the unwanted text has a repeatable pattern.
- Use repeated-character cleanup for hooks that emit the same character several times, and repeated-line cleanup for duplicated full lines.
- Use line extraction only when the hook includes extra surrounding text. Check that it retains the full sentence and speaker context you want.
- If the hook itself is noisy, first choose a better hook in [Text Hook Setup](./text-hook.md). Processing rules are best for small, consistent cleanup tasks.

Check the selected profile before changing its processing rules.
