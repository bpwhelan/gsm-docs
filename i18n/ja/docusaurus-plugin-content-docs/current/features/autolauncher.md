---
title: AutoLauncher
sidebar_label: AutoLauncher
sidebar_position: 2
---

import ImageFrame from '@site/src/components/ImageFrame';

AutoLauncherは実行中のゲームを自動検出し、そのゲームに適したテキストフッキングツールやOCRを起動します。ゲームを切り替えるたびにテキストフッキングやOCRを手動で起動する手間を省きます。

## ビデオガイド

<iframe width="100%" height="550" src="https://www.youtube.com/embed/ZgRcf6daM3U" title="GSM Longplay Feature Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<ImageFrame src="/img/features/autolauncher/overview.png" alt="AutoLauncherの概要" caption="AutoLauncherはOBS経由でゲームを検出し、適切なツールを自動起動します" />

## 仕組み

1. GSMは現在の **OBSシーン** を監視してアクティブなゲームを特定します。
2. 各シーンに対して、以下を指定する **起動プロファイル** を設定します：
   - 使用するテキストフッカー（Agent、Textractor、LunaTranslator、またはなし）。
   - OCRを自動で開始するかどうか。
3. ゲームが検出されると、GSMはオプションの遅延後に設定したツールを起動します。
4. ゲームが終了すると、GSMがクリーンアップします — OCRを停止してテキストフッカーを閉じます。
5. Agentがクラッシュした場合は自動的に再起動します。

## セットアップ

### 1. ツールパスの設定

GSMの設定の **Game** タブで、インストール済みツールのパスを設定します：

<ImageFrame src="/img/features/autolauncher/tool-paths.png" alt="ツールパスの設定" caption="GameタブでAgent、Textractor、LunaTranslatorのパスを設定" />

| 設定 | 説明 |
|---|---|
| `Agent Path` | Agentの実行ファイルへのパス |
| `Agent Scripts Path` | Agentスクリプトファイルを含むディレクトリ |
| `Textractor Path (64-bit)` | 64ビット版Textractorへのパス |
| `Textractor Path (32-bit)` | 32ビット版Textractorへのパス |
| `LunaTranslator Path` | LunaTranslatorの実行ファイルへのパス |

### 2. シーンプロファイルの設定

**Launcher** タブで、各OBSシーンに独自のプロファイルを設定します：

<ImageFrame src="/img/features/autolauncher/launcher-tab.png" alt="シーンプロファイルのLauncherタブ" caption="OBSシーンごとにテキストフッカーとOCR設定を行います" />

| 設定 | 説明 |
|---|---|
| **Text Hook Mode** | `none`、`agent`、`textractor`、または `luna` |
| **OCR Mode** | `none`、`auto`（継続スキャン）、または `manual`（ホットキーのみ） |
| **Agent Script** | この特定のゲーム用のAgentスクリプトへのパス |
| **Launch Delay** | 起動前の待機秒数（0〜300） |

### 3. 追加オプション

| 設定 | 説明 |
|---|---|
| `Launch Agent Minimized` | Agentを最小化した状態で起動する |
| `Launch Textractor Minimized` | Textractorを最小化して起動する |
| `Launch LunaTranslator Minimized` | LunaTranslatorを最小化して起動する |

## テキストフッカーモード

### Agent

<ImageFrame src="/img/features/autolauncher/agent-launch.png" alt="ゲーム向けにAgentが自動起動" caption="検出されたゲームに対して適切なスクリプトと共にAgentが自動起動" />

- ゲームのプロセス名と（オプションで）スクリプトファイルを指定してAgentを起動します。
- スクリプトディレクトリからスクリプトを自動解決します。
- Agentがクラッシュした場合は自動的に再起動します。
- 重複起動を防ぐためAgentプロセスを追跡します。

### Textractor

- ゲームの実行ファイルアーキテクチャに基づいて32ビットまたは64ビット版Textractorを自動選択します。
- 分離プロセスとして起動されます。

### LunaTranslator

- 設定されたパスで分離プロセスとして起動されます。

## OCRモード

| モード | 動作 |
|---|---|
| **None** | このゲームではOCR自動化なし。 |
| **Auto** | ゲームが検出されるとすぐに、シーンの保存済みエリア設定を使用して継続的OCRを開始します。 |
| **Manual** | OCRをホットキー専用モードで開始 — スキャンはホットキー押下時のみトリガーされます。 |

:::note
OCRを手動で停止した場合、ゲーム/シーンが変更されるまでAutoLauncherは再起動しません。これにより意図した操作を上書きすることを防ぎます。
:::

## 前提条件

- **OBS** が接続されている — シーンはゲーム検出に使用されます。
- Agent、Textractor、またはLunaTranslatorのうち少なくとも1つがインストールされてパスが設定されている。
