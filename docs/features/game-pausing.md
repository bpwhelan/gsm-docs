---
title: Game Pausing
sidebar_label: Game Pausing
sidebar_position: 7
---

# Game Pausing

Game Pausing temporarily suspends the game process GSM has matched to the active capture. It is an **experimental Windows and Linux feature** for games that do not pause while you read or use the overlay.

:::caution
Process suspension can make a game unstable. Avoid using it with online games, anti-cheat software, or games where suspending the process could violate the game's rules.
:::

## Turn it on

1. Open **Settings → Features** and find **Game Pausing**.
2. Enable **Game Pausing** and review the executable matching and denylist safeguards.
3. Set the manual pause shortcut and automatic resume timeout.
4. Test on a single-player game before enabling any automatic pause behavior.

GSM targets the process associated with the active OBS capture and checks the executable before suspending it. A timeout resumes the game automatically, and GSM has recovery controls if a tracked process remains suspended.

## Connect it to reading

Game Pausing can request a pause when you enter overlay manual mode, open the overlay text feed, use gamepad navigation, or review an Anki confirmation. These options are independent. Enable only the actions that fit your workflow, then confirm the game resumes when you leave that action.

## If the pause command has no effect

- Confirm **Game Pausing** is enabled and GSM is running on Windows or Linux.
- Check that OBS is capturing the intended game and that the executable matches.
- Check whether the executable is on the denylist.
- Check the auto-resume timeout if the game resumes while you are still reading.
