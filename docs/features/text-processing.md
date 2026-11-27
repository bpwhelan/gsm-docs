---
title: "Clean up captured text"
sidebar_label: Text Processing
sidebar_position: 3
---

# Clean up captured text

Use **Text Processing** when a hook or OCR repeatedly adds the same unwanted text. Paste an actual line into **Live Preview**, or follow the latest game text while you adjust the rules.

- For fixed markup, add a plain **String Replacement** rule. Use a regular expression for a repeating pattern.
- For a hook that emits `AAAABBBBCCCC`, try **Remove Repeated Characters**. For duplicate whole lines, use **Remove Repeated Lines**.
- Drag processors into order. They run from top to bottom, so check how a replacement affects the next rule. Test a line containing a name or number you want to keep before enabling a broad filter.

Changes save automatically. Check which settings profile or game you are editing. **Excluded sentences** is a separate per-game list for exact entries such as a repeated menu label. These exclusions run before the processing rules. They are case-sensitive, ignore surrounding whitespace and preserve internal line breaks.
