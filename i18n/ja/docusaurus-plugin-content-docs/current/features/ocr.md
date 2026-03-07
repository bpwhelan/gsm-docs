---
title: OCR
sidebar_label: OCR
sidebar_position: 1
---

import ImageFrame from '@site/src/components/ImageFrame';

GSMのOCR機能は光学文字認識を使用してゲーム画面から直接テキストをキャプチャし、テキストフッキング（Agent/Textractor）の代替手段として機能します。フックできないゲーム、ハードサブ付きテキストのビジュアルノベル、またはエミュレーターでプレイするコンシューマーゲームに特に有用です。

<figure style={{ textAlign: 'center', margin: '1.5rem 0' }}>
  <video
    src="/img/ocr_example.mp4"
    controls
    autoPlay
    loop
    muted
    playsInline
    style={{
      maxWidth: '100%',
      borderRadius: '8px',
      border: '1px solid var(--ifm-color-emphasis-300)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
    }}
  />
  <figcaption
    style={{
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: 'var(--ifm-color-emphasis-600)',
      fontStyle: 'italic',
    }}
  >
    リアルタイムでゲームテキストを検出・キャプチャするOCR
  </figcaption>
</figure>

## 仕組み

GSMは**2パスOCR**パイプラインをサポートしています：

1. **OCR1（高速エンジン）** — 設定可能な間隔で画面を継続的にスキャンしてテキストの変化を検出します。
2. **OCR2（高精度エンジン）** — 安定したテキストが検出されると、より正確な第2エンジンが結果を精緻化します。

認識されたテキストはフックされたテキストと同様にテキストフッカーページに送信されるため、通常の採掘ワークフローはそのまま使えます。

### サポートエンジン

| エンジン | タイプ | 役割 | 備考 |
|---|---|---|---|
| **OneOCR** | ローカル（Windows） | OCR1 / OCR2 | デフォルトOCR1。高速。オーバーレイ向けの単語レベルのバウンディングボックスを提供。 |
| **Google Lens** | クラウド | OCR2 | デフォルトOCR2。高精度。推奨。 |
| **Bing** | クラウド | OCR2 | 高精度、Google Lensと同程度。 |
| **ScreenAI** | ローカル | OCR1 / OCR2 | Google Lensのローカル代替。オーバーレイ座標をサポート。 |
| **Gemini** | クラウド | OCR2 | 高精度。APIキーが必要。 |
| **MeikiOCR** | ローカル | OCR1 / OCR2 | 実験的。バウンディングボックスの安定性チェック付きテキスト検出。日本語のみ。 |
| **Meiki Text Detector** | ローカル | OCR1 | 実験的、安定性検出向けのMeikiOCRの高速バリアント。 |
| Apple Live Text | ローカル（macOS） | OCR1 / OCR2 | macOSのみ。 |
| Local LLM OCR | ローカル | OCR1 / OCR2 | OCR用のローカルLLMを使用。 |
| MLKit OCR | ローカル | OCR1 / OCR2 | Androidサーバーが必要。 |
| Google Vision / Azure / OCRSpace | クラウド | OCR2 | エンタープライズクラウドOCRサービス。APIキーが必要。 |

## セットアップ

### 1. OCRエリアの選択

OCRを実行するには、スキャンする画面領域を定義する必要があります。エリアセレクターには3種類の選択ボックスがあります：

<ImageFrame src="/img/features/ocr/area-selector.png" alt="色付きボックスのOCRエリアセレクター" caption="緑、オレンジ、紫の選択ボックスが表示されるエリアセレクター" />

| ボックス | 入力 | 目的 |
|---|---|---|
| <span style={{color: 'green'}}>**緑**</span> | 左クリック | **メインエリア** — 自動的にキャプチャされるべき対話やテキスト。 |
| <span style={{color: 'orange'}}>**オレンジ**</span> | Shift + 左クリック | **除外ゾーン** — このエリア内のテキストは完全に無視されます。 |
| <span style={{color: 'purple'}}>**紫**</span> | Ctrl + 左クリック | **メニューエリア** — 手動/メニューOCRホットキー経由でのみキャプチャされるテキスト（自動ではない）。 |

作成できるボックスの数に厳密な制限はありませんが、パフォーマンスのために最小限に抑えてください。

設定方法：

1. ゲームを起動し、OBSがゲームをキャプチャしていることを確認します。
2. ホットキー **Ctrl+Shift+O**（またはメニューオプション）でエリアセレクターを開きます。
3. 適切なクリック修飾キーを使用してテキストエリアの周囲に矩形を描きます。

:::note
OCRを設定するには、有効なOBSシーンを設定する必要があります。エリア設定はOBSシーン（またはウィンドウ）ごとに保存されるため、各ゲームは独自のOCR領域を記憶します。
:::

#### メニューボックスのフィルタリング

自動的にキャプチャされたテキストが**すべて**紫のボックス内にある場合、そのテキストは無視されます。これはゲームのメニューが開いているときにOCRを抑制するのに便利です — メニューからのテキストはテキストフッカーに送信されません。

<ImageFrame src="/img/features/ocr/menu-box-filtering.png" alt="ゲームメニューを覆う紫のボックス" caption="紫のボックスにより自動スキャン中にメニューテキストがキャプチャされません" />

#### ボックスのインポート/エクスポート

ボックスの設定はクリップボード経由でインポート・エクスポートできます。同じゲームをプレイする他の人と設定を共有したり、複雑な設定をバックアップするのに便利です。

<ImageFrame src="/img/features/ocr/import-export.png" alt="エリアセレクターのインポート/エクスポートボタン" caption="クリップボード経由でOCRエリア設定のインポート/エクスポートが可能" />

### 2. 設定の構成

GSMの設定の **OCR** タブでは、ヘッダーの **Advanced Mode** チェックボックスで2つのモードが切り替えられます。

**基本モード**（デフォルト） — ほとんどのユーザーに最適。**Text Appearance Speed** をゲームのテキスト表示速度に合わせて設定するだけで完了です。エンジンはOneOCR + Google Lensにプリセットされています。

**詳細モード** — エンジン選択（OCR1/OCR2）、スキャン間隔、2パス設定などを詳細に設定できます。詳細については以下の[設定](#設定)セクションを参照してください。

### 3. スキャンの開始

OCRはいくつかの方法で開始できます：
- ゲームが検出された時に [AutoLauncher](autolauncher.md) が**自動的に**起動。
- GSMのメニューまたはシステムトレイから**手動で**起動。
- **ホットキー**経由（以下参照）。

## ホットキー

| ホットキー | 機能 |
|---|---|
| `Ctrl+Shift+O` | エリア選択OCR — 領域を選択して1回限りのOCRを実行 |
| `Ctrl+Shift+G` | メニューOCR — セカンダリ（メニュー）矩形でOCRを実行 |
| `Ctrl+Shift+W` | ウィンドウ全体OCR — ウィンドウ全体で1回限りのOCRを実行 |
| `Ctrl+Shift+P` | 一時停止/再開 — 継続的OCRスキャンの切り替え |

## 設定

OCRタブには**基本**と**詳細**の2つのモードがあります。設定ヘッダーの**Advanced Mode**チェックボックスで切り替えます。

<ImageFrame src="/img/features/ocr/ocr-settings-basic.png" alt="OCR基本設定モード" caption="基本モードはほとんどのユーザー向けの簡略化された設定を表示" />

### 基本モード

基本モードはデフォルトで、ほとんどのユーザーに適しています。エンジン選択とスキャン間隔の詳細を1つのドロップダウンで隠します：

| 設定 | 説明 |
|---|---|
| **Text Appearance Speed** | ゲームのテキスト表示速度に基づいてスキャン間隔を制御します。オプション：**Instant**（0.2秒 — 最高速スキャン、CPU使用率高）、**Normal**（0.5秒 — デフォルト）、**Slow**（0.8秒）、**Very Slow**（1.0秒 — CPU使用率低）。 |
| **Language** | OCR言語（デフォルト：日本語）。 |
| **Furigana Filter** | ルビをフィルタリングするスライダー。 |
| **Send to Clipboard** | 認識したテキストをクリップボードにコピー。 |
| **Hotkeys** | エリア選択、手動OCR、ウィンドウ全体OCR、一時停止/再開のホットキー。 |

基本モードでは、エンジンはデフォルトで2パスが有効な **OneOCR**（OCR1）と **Google Lens**（OCR2）になります。

### 詳細モード

詳細モードではOCRパイプラインを完全にコントロールできます：

<ImageFrame src="/img/features/ocr/ocr-settings-advanced.png" alt="OCR詳細設定モード" caption="詳細モードでは完全なエンジンとスキャン間隔のコントロールが可能" />

| 設定 | 説明 | デフォルト |
|---|---|---|
| **Text Stability (OCR1)** | テキストの変化を検出するために継続的にスキャンする高速エンジン。 | OneOCR |
| **Main OCR (OCR2)** | テキストが安定してからトリガーされる高精度エンジン。 | Google Lens |
| **Scan Rate** | 画面キャプチャ間の遅延（秒）。値が低いほど検出が速いがCPU使用率が高い。 | 0.5 |
| **Two-Pass OCR** | 安定性検出にOCR1を使用し、精度確保にOCR2を使用する。推奨。 | 有効 |
| **Optimize 2nd Scan** | OCR2を実行する前に検出されたテキスト領域に画像をトリミングしてパフォーマンスを向上。 | 有効 |
| **Scan Image Quality** | OCR前の画像スケールファクター（50〜100%）。値が低いほど高速だが精度が低下。 | 75% |
| **Language** | OCR言語。 | 日本語 |
| **Furigana Filter** | ルビをフィルタリングするスライダー（0〜100）。 | 0 |
| **Send to Clipboard** | 認識したテキストをクリップボードにコピー。 | — |
| **Keep Newlines** | OCR出力の改行を保持する。 | — |
| **OCR Clipboard Screenshots** | OCRスクリーンショットを撮ってクリップボードに送信する。 | — |
| **Hotkeys** | エリア選択、手動OCR、ウィンドウ全体OCR、一時停止/再開。 | — |

### 追加ツールとデバッグツール

下部の折りたたみセクションに追加オプションがあります：

| 設定 | 説明 |
|---|---|
| **Process Priority** | Windows上のOCRプロセスの優先度を設定（低→高）。デフォルト：標準。 |
| **Default Furigana Sensitivity** | 新しいシーンのデフォルトフリガナフィルター値。 |
| **Optional Dependencies** | オプションのエンジン依存関係（Faster PNG、Google Vision、Azure、OCRSpace）のインストール/アンインストール。 |

## オーバーレイ連携

単語レベルのバウンディングボックスを提供するエンジン（OneOCR、MeikiOCR、ScreenAI）を使用する場合、GSMは **[GSMオーバーレイ](overlay.md)** に座標を送信できます。これにより、認識された単語にカーソルを合わせることでゲーム画面上で直接Yomitan辞書検索が可能になります。

## トラブルシューティング

### テキストの最初の部分しか検出されない

これはゲームのテキストがゆっくり表示される（タイプライター効果）場合に、OCRが行全体が表示される前に画面をキャプチャしてしまった時に発生します。

**解決策**: 可能であればゲームのテキスト表示を**即時**に設定してください。できない場合は、`Scan Delay` 設定を増やしてキャプチャ前に待機する時間を長くしてください。

## 前提条件

- OneOCRには**Windows**が推奨されます。他のエンジンはクロスプラットフォームで動作します。
- **OBS** が接続されている。
- クラウドベースのエンジン（Google Lens、Azureなど）には**インターネット接続**が必要です。
