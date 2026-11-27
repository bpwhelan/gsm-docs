---
title: Troubleshooting GSM
sidebar_label: Common Problems
sidebar_position: 9
---

# Common Problems

Start with the **Home** tab's connection indicators. They help separate an OBS or Anki connection problem from text capture or card matching.

## GSM does not finish starting

If startup stops, reopen GSM and check **Logs** for the first error. If GSM still fails to start, see [installation help](./getting-started/index.md) or export anonymized logs before asking for support.

## OBS is disconnected or shows a black image

- Open OBS first, then confirm the OBS status on GSM's Home tab.
- Check the OBS WebSocket connection in **Settings → OBS**.
- In OBS, confirm the active scene contains the expected game, window, or monitor capture source.
- Use **Home → select the game → ⋯ → Run Capture Wizard** to test the capture image. If the image is black, try a different capture type or a borderless/windowed game mode.

## No text appears in GSM

- For a hook, open **Texthook / Agent**, start the engine, select a hook, and confirm its preview contains the dialogue. See [Text Hook Setup](./features/text-hook.md).
- For OCR, check **Capture** in the OCR tab, select an OCR area, run a manual scan, and review the result before enabling automatic scanning. See [OCR Setup](./features/ocr.md).
- Open the [Text Feed](http://localhost:7275/texthooker) to see incoming lines. If the feed is empty, check the source status and active OBS scene first.
- If you use an external hook, check its GSM WebSocket or clipboard settings in GSM and the matching connection setting in the external tool.

## OCR gives incomplete text

Check that the area covers the full line and that the text language is correct. For typewriter-style dialogue, turn off **Text Appears Instantly** and let the final scan wait for the line to finish. If menus are captured as dialogue, add an exclusion or secondary area.

## The overlay does not appear or has no lookup targets

- Launch it from the Home tab and check **Overlay Settings** for display, capture, and interaction options.
- Import dictionaries into the overlay's embedded Yomitan; browser Yomitan dictionaries are separate.
- Confirm that the game capture matches the visible game. Exclusive fullscreen can interfere with positioning; try borderless or windowed mode.
- If lookup targets are absent after a hook event, make sure the game text is still visible when the overlay scans it.

See [Overlay](./features/overlay.md) for the full setup path.

## Anki cards are missing media or have the wrong sentence

- Keep Anki open and confirm GSM reports Anki connected.
- In **Settings → Mining → Anki**, refresh the note fields and check that the selected note type and field mappings are correct.
- Confirm the sentence in Anki matches a line in the Text Feed. Use Yomitan's Newlines-only sentence termination when you need the full dialogue line; see [Fixing Incomplete Sentences](./guides/incomplete-sentences.md).
- For missing audio or screenshots, confirm OBS captures the game audio and image, and that the replay buffer contains the time when the line appeared.
- If GSM updates cards from another source, review the note type and tag filters.

## AI translation or explanation fails

Open **Settings → Mining → AI and translation**, check the provider and model, then try **Translate** on a captured line. Confirm the requested Anki field is mapped if the request works but no AI output appears on the card.

If the issue persists, ask in the [GSM Discord](https://discord.gg/yP8Qse6bb8) or [open a GitHub issue](https://github.com/bpwhelan/GameSentenceMiner/issues). Review anonymized logs before sharing them.
