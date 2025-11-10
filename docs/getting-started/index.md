---
title: Getting Started with GSM
sidebar_label: Overview
sidebar_position: 1
---

# Getting Started with GSM

Welcome to GameSentenceMiner (GSM)! This guide will help you get up and running quickly.

## Choose Your Platform

GSM is available for multiple operating systems. Select your platform below for specific installation instructions:

- **[Windows](/docs/getting-started/windows)** - Full feature support, recommended platform
- **[macOS](/docs/getting-started/macos)** - Experimental support, core features working
- **[Linux](/docs/getting-started/linux)** - Experimental support, community-maintained

## What You'll Need

Regardless of your platform, you'll need:

1. **A game** to play and learn from
2. **Anki** for creating and reviewing flashcards
3. **OBS Studio** for capturing game footage and audio
4. **Yomitan** (browser extension) for creating cards from text
5. **A texthooker** (optional but recommended)
   - [Agent](https://github.com/0xDC00/agent)
   - [Textractor](https://github.com/Artikash/Textractor)
   - [LunaTranslator](https://github.com/HIllya51/LunaTranslator)
   - Or use GSM's built-in OCR

## Quick Start Video

Watch this installation tutorial to see the setup process in action:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sVL9omRbGc4" title="GSM Installation Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How GSM Works

Understanding the workflow will help you troubleshoot issues:

1. **Text Event** - A texthooker (Agent, Textractor, OCR) detects text from your game
2. **Audio Capture** - GSM marks this as the start of a voice line and begins monitoring
3. **Voice Detection** - When speech ends (detected by VAD), GSM saves the audio clip
4. **Screenshot** - A screenshot from OBS is captured at the moment of the text event
5. **Card Creation** - You look up a word in the text using Yomitan, which creates an Anki card
6. **Enhancement** - GSM automatically adds the audio, screenshot, and optional AI translation to your card

## Basic Workflow

Once you're set up, here's your typical mining session:

1. Launch OBS and set up your game capture scene
2. Start GSM
3. Launch your texthooker (if using one)
4. Start your game
5. Play normally - when you encounter unknown words:
   - Look them up using Yomitan on GSM's texthooker page
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
