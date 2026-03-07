---
title: AutoLauncher
sidebar_label: AutoLauncher
sidebar_position: 2
---

import ImageFrame from '@site/src/components/ImageFrame';

The AutoLauncher automatically detects which game is running and launches the appropriate text hooking tool and/or OCR for that game. It eliminates the need to manually start text hooking and OCR each time you switch games.

## Video Guide

<iframe width="100%" height="550" src="https://www.youtube.com/embed/ZgRcf6daM3U" title="GSM Longplay Feature Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<ImageFrame src="/img/features/autolauncher/overview.png" alt="AutoLauncher overview" caption="AutoLauncher detects your game via OBS and launches the right tools automatically" />

## How It Works

1. GSM monitors the current **OBS scene** to determine which game is active.
2. For each scene, you configure a **launch profile** that specifies:
   - Which text hooker to use (Agent, Textractor, LunaTranslator, or none).
   - Whether to start OCR automatically.
3. When a game is detected, GSM waits an optional delay, then launches the configured tools.
4. When the game exits, GSM cleans up — stopping OCR and closing the text hooker.
5. If Agent crashes, it relaunches automatically.

## Setup

### 1. Configure Tool Paths

In GSM's settings under the **Game** tab, set the paths to your installed tools:

<ImageFrame src="/img/features/autolauncher/tool-paths.png" alt="Tool path configuration" caption="Configure paths to Agent, Textractor, and LunaTranslator in the Game tab" />

| Setting | Description |
|---|---|
| `Agent Path` | Path to the Agent executable |
| `Agent Scripts Path` | Directory containing Agent script files |
| `Textractor Path (64-bit)` | Path to 64-bit Textractor |
| `Textractor Path (32-bit)` | Path to 32-bit Textractor |
| `LunaTranslator Path` | Path to LunaTranslator executable |

### 2. Configure Scene Profiles

In the **Launcher** tab, each OBS scene gets its own profile:

<ImageFrame src="/img/features/autolauncher/launcher-tab.png" alt="Launcher tab with scene profiles" caption="Configure text hooker and OCR settings per OBS scene" />

| Setting | Description |
|---|---|
| **Text Hook Mode** | `none`, `agent`, `textractor`, or `luna` |
| **OCR Mode** | `none`, `auto` (continuous), or `manual` (hotkey-only) |
| **Agent Script** | Path to the Agent script for this specific game |
| **Launch Delay** | Seconds to wait before launching (0–300) |

### 3. Additional Options

| Setting | Description |
|---|---|
| `Launch Agent Minimized` | Start Agent in a minimized window |
| `Launch Textractor Minimized` | Start Textractor minimized |
| `Launch LunaTranslator Minimized` | Start LunaTranslator minimized |

## Text Hooker Modes

### Agent

<ImageFrame src="/img/features/autolauncher/agent-launch.png" alt="Agent auto-launching for a game" caption="Agent launching automatically with the correct script for the detected game" />

- Spawns Agent with the game's process name and (optionally) a script file.
- Automatically resolves scripts from your scripts directory.
- If Agent crashes, it relaunches automatically.
- Tracks the Agent process to avoid duplicate launches.

### Textractor

- Automatically selects 32-bit or 64-bit Textractor based on the game's executable architecture.
- Launched as a detached process.

### LunaTranslator

- Launched as a detached process with the configured path.

## OCR Modes

| Mode | Behavior |
|---|---|
| **None** | No OCR automation for this game. |
| **Auto** | Starts continuous OCR using the scene's saved area config as soon as the game is detected. |
| **Manual** | Starts OCR in hotkey-only mode — scanning only triggers on hotkey press. |

:::note
If you manually stop OCR, the AutoLauncher won't restart it until the game/scene changes. This prevents it from overriding your intent.
:::

## Prerequisites

- **OBS** must be connected — scenes are used for game detection.
- At least one text hooker (Agent, Textractor, or LunaTranslator) installed and its path configured.
