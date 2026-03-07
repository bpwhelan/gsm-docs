# YouTube Video Outlines

Two short-form feature showcase videos. Goal: clear, demo-heavy, no fluff.
Suggested length: **3–6 minutes each**.

---

## Video 1 — GSM Overlay: Gamepad Dictionary Lookups

**Elevator pitch (say this at the start):**
> "If you play Japanese games with a controller, you no longer need to grab the mouse every time you want to look up a word. The GSM Overlay lets you navigate kanji and pull up dictionary definitions entirely with your gamepad."

---

### Intro (20–30 sec)

- Show the problem: you're playing a game, a kanji appears, you have to put down the controller, grab the mouse, hover over text.
- Cut to: doing the same thing with a controller. No mouse. No keyboard.
- "Here's how it works."

---

### Demo 1 — Basic navigation (1–2 min)

**Show live, no cuts:**

1. Game is running. Overlay is visible.
2. Hold **LB** → D-pad **left/right** → cursor moves through text. Yomitan popup appears automatically.
3. Move to a word you want to look up. Popup shows definition.
4. Release LB. Cursor disappears. Game resumes normally.
5. Point out: "the game still has focus the whole time."

**Say:**
> "Holding LB activates navigation mode. Left and right on the D-pad move a cursor through the text. Yomitan automatically pops up as you land on each word. Let go of LB and it's all gone — the overlay is click-through again."

---

### Demo 2 — Token mode (30–45 sec)

1. Move cursor character by character — slow.
2. Press **Y** to toggle token mode.
3. Now D-pad jumps by whole words.
4. Show it hitting a compound and looking it up cleanly.

**Say:**
> "By default the cursor moves one character at a time. Press Y to switch to token mode and now it jumps by whole words — much faster for compound kanji."

---

### Demo 3 — Text block switching (20–30 sec)

1. Multiple lines of text detected on screen.
2. Hold LB, D-pad **Up/Down** to switch between different text blocks.
3. Briefly show the green highlight box around the active block.

---

### Demo 4 — Mining a word (30 sec)

1. Navigate to a word, popup is open.
2. Press **A** once to confirm the lookup.
3. Press **A** again to mine to Anki.
4. Card appears in Anki — cut to Anki briefly.

**Say:**
> "When you find a word you want to add to Anki — press A once to confirm the lookup, press A again to mine it. Same two-step flow as clicking in the browser."

---

### Setup overview (45–60 sec)

*Briefly show the settings screen — don't go deep.*

1. Open overlay settings: **Alt+Shift+S → Controller tab**.
2. Point to: Enable Gamepad Navigation, Server Status (show "Connected").
3. Show the toggle between Modifier and Toggle activation modes.
4. Show tokenizer backend option. "MeCab is the default, no setup needed."
5. "You can also remap every button here."

**Say:**
> "Two activation modes: Modifier — hold a button to navigate, release to stop. Or: Toggle mode — press once to enter, press again to exit. Great for reading-heavy games. Everything is remappable."

---

### Outro (15 sec)

- "The overlay itself isn't new, but gamepad support is. If you're a controller player, this is the biggest QoL upgrade yet."
- Link to full documentation in description / screen.

---

---

## Video 2 — GSM AutoLauncher: Auto Setup Per Game

**Elevator pitch:**
> "Every time you open a new game you have to manually start your text hooker and OCR. AutoLauncher does that for you — it detects your game via OBS and launches the right tools automatically."

---

### Intro (20–30 sec)

- Show the tedious flow: open game → open Agent → find the right script → enable OCR → adjust settings.
- "AutoLauncher cuts all of that to zero clicks."

---

### Demo — Full automatic launch (1–1.5 min)

**Show live:**

1. OBS is open, game scene selected.
2. Switch OBS scene to the game → within a few seconds, Agent launches with the correct script.
3. OCR enables automatically.
4. Text from the game starts appearing in GSM immediately.
5. Switch away from that scene → Agent closes, OCR stops.

**Say:**
> "GSM watches your active OBS scene. When it matches a configured game, it launches Agent with the right script and starts OCR. No manual steps. Switch away and it cleans up."

---

### Setup walkthrough (2 min)

*Walk through this once, calmly.*

**Step 1 — Tool paths (30 sec)**

1. GSM Settings → **Game tab**.
2. Show the path fields: Agent Path, Agent Scripts Path.
3. Set them live if not already set.

**Step 2 — Scene profile (1 min)**

1. GSM Settings → **Launcher tab**.
2. Find the row for the game's OBS scene name.
3. Set:
   - Text Hook Mode: `agent`
   - OCR Mode: `auto`
   - Agent Script: select the game's script from the dropdown.
4. Optional: set a Launch Delay (e.g., 5 seconds, for games that take time to load).

**Step 3 — Test it (30 sec)**

1. Close settings.
2. Switch OBS to the game scene.
3. Watch Agent open automatically, OCR starts.

---

### Agent crash recovery (20 sec)

- "If Agent crashes, GSM will re-launch it automatically. You don't have to babysit it."

---

### OCR modes (20–30 sec)

| Mode | When to use |
|---|---|
| `auto` | Game always shows text — OCR runs continuously |
| `manual` | OCR only scans on hotkey — for games where continuous scan causes FPS drops |
| `none` | Game hooks only, no OCR |

---

### LunaTranslator / Textractor (15 sec)

- "If you use Textractor or LunaTranslator instead of Agent, same setup — just pick the right mode and path."
- "Textractor auto-selects 32-bit or 64-bit depending on the game."

---

### Outro (15 sec)

- "Per-game, fully automatic, zero clicks after initial setup."
- "Link to full config docs in the description."

---

## General Tips for Both Videos

- **Keep the camera off (or minimal)** — this content is screen-capture-first.
- **Cut to Anki/result immediately** after mining to show the payoff.
- **Don't show settings for longer than needed** — say what matters, move on.
- **Thumbnail idea — Gamepad video**: controller with a Yomitan popup visible on a game screenshot.
- **Thumbnail idea — AutoLauncher video**: split screen: manual steps crossed out on the left, "0 clicks" on the right.
