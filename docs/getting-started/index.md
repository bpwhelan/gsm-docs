---
title: Getting Started with GSM
sidebar_label: Overview
sidebar_position: 1
---

# Getting Started with GSM

Welcome to GameSentenceMiner (GSM)! This guide will help you get up and running quickly.

## Quick Start Video

If you prefer video tutorials, check out this installation guide:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sVL9omRbGc4" title="GSM Installation Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What You'll Need

Regardless of your platform, you'll need:

1. **A game** to play and learn from.
2. **Yomitan (Browser Extension)** for creating cards from text. Take a look here for installation instructions: [Yomitan Getting Started](https://yomitan.wiki/getting-started/)
3. **[Anki](https://apps.ankiweb.net/)** for creating and reviewing flashcards. Take a look here for some Templates and how to set them up in Yomitan: [Yomitan Anki Templates](./yomitan-anki.md)
4. **A way to get text into GSM**
   - [Agent](https://github.com/0xDC00/agent) - [Video Tutorial](https://www.youtube.com/watch?v=fMWJYr_PcRE)
   - [LunaTranslator](https://github.com/HIllya51/LunaTranslator) - [Video Tutorial](https://www.youtube.com/watch?v=ysZBI2tcxMc)
   - [Textractor](https://github.com/Artikash/Textractor) - [Video Tutorial](https://www.youtube.com/watch?v=sEIYGTEuciA)
   - GSM's built-in OCR


## Installing GSM

GSM is available for multiple operating systems. Select your platform below for specific installation instructions:

- **[Windows](/docs/getting-started/windows)** - Full feature support, recommended platform
- **[macOS](/docs/getting-started/macos)** - Experimental support
- **[Linux](/docs/getting-started/linux)** - Experimental support

## How GSM Works

Understanding the workflow will help you troubleshoot issues:

1. **Text Event** - A texthooker (Agent, Textractor, OCR) detects text from your game
2. **Audio Capture** - GSM marks this as the start of a voice line.
3. **Card Creation** - You look up a word in the text using Yomitan, and create an Anki card.
4. **Enhancement** - GSM automatically adds the audio, screenshot, and optional AI translation to your card

## Basic Workflow

Once you're set up, here's your typical mining session:

1. Start GSM
2. Launch OBS if it isn't already running.
3. Launch your texthooker (if using one)
4. Start your game
5. Play normally - when you encounter unknown words:
   - Look them up using Yomitan on GSM's texthooker page, or the Overlay.
   - Create an Anki card
   - GSM automatically enhances it with audio and screenshots

## What's Next?

After installation:

- Set up [AI Features](/docs/guides/ai-features) for automatic translations
- Check [Troubleshooting](/docs/troubleshooting) if you run into issues

## Community & Support

- **Discord**: [Join our community](https://discord.gg/yP8Qse6bb8)
- **GitHub**: [Report issues or contribute](https://github.com/bpwhelan/GameSentenceMiner)
- **Videos**: [Watch demos and tutorials](https://www.youtube.com/watch?v=FeFBL7py6HY)
