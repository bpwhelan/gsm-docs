---
title: Game Automation
sidebar_label: Game Automation
sidebar_position: 2
---

import ImageFrame from '@site/src/components/ImageFrame';

# Game Automation

Game Automation stores capture choices per OBS scene so GSM can start the right text source when you switch games. Use the Home tab's **Add a game** for a new game; use **Game Automation** when you want to adjust the saved scene profile later.

<ImageFrame src="/img/guides/capture-wizard.png" alt="GSM capture setup wizard" caption="The capture wizard saves text hook and OCR startup choices for the selected game." />

## What a scene profile controls

- Which text-hook engine or saved hook profile to use when the scene becomes active.
- Whether OCR should start automatically or wait for a manual scan.
- Shared paths for external tools such as Agent, Textractor, and LunaTranslator.
- Optional launch delay and per-game capture behavior.

GSM watches the active OBS scene and applies its saved choices. The profiles are independent, so you can use a different engine or OCR mode for each game. Text-hook engine selection and output checking are described in [Text Hook Setup](./text-hook.md).

## Configure a game

1. Open the game and make sure OBS is on the scene that captures it.
2. Run **Home → select the game → ⋯ → Run Capture Wizard** and follow **Capture → Texthook → OCR → Finalize**.
3. In **Finalize**, choose which text source should start automatically for this game.
4. Switch away from and back to the scene, then check that the expected source is running and the text appears in GSM.

To change shared tool paths or scene-specific automation afterward, open **Game Automation**. If a scene is not recognized, refresh the scene list and verify OBS is connected to the expected scene collection.

:::note
You can leave automation off and start a hook or OCR manually. Automation is a convenience for switching among games, not a requirement for capture.
:::
