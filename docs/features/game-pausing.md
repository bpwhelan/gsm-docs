---
title: "Pause the game while reading"
sidebar_label: Game Pausing
sidebar_position: 7
---

# Pause the game while reading

On Windows and Linux, Game Pausing suspends the process associated with the active OBS capture. Use it with a single-player game that can safely be suspended. Online games and games with anti-cheat may react to process suspension.

1. In the main GSM settings, find **Features → Game Pausing** and enable it. Assign the pause hotkey and check the auto-resume timeout.
2. Select the game scene in OBS. Keep executable matching enabled and check the denylist. On Linux, use the target process for the captured game or its scene. A display capture without an identified game process cannot supply a pause target.
3. Try the hotkey once to pause and again to resume. After that works, choose which overlay or Anki actions should request a pause.

Manual overlay activation, the overlay text feed, controller navigation and Anki confirmation can each request a pause. Closing one of these releases its request. The game can remain paused while another request is active.
