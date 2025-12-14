---
title: LinuxにGSMをインストールする
sidebar_label: Linux
sidebar_position: 3
---

# LinuxでのGameSentenceMiner

このガイドでは、LinuxでGameSentenceMinerをセットアップする手順を説明します。LinuxでのGSMは機能しますが、サポートは実験的であることに注意してください。ユーザーエクスペリエンスは、ディストリビューションやデスクトップ環境（X11 vs. Wayland）によって異なる場合があります。

:::note
Linuxのサポートは進行中の作業です。OCRやAnki連携などのコア機能は動作しますが、Windowsで利用可能ないくつかの機能は限定的であるか、手動でのセットアップが必要です。

これらの手順は、さまざまなディストロのユーザーとのテストやチャットから構築されています。Linuxエクスペリエンスの改善に関する問題や提案がある場合は、[GitHubリポジトリ](https://github.com/bpwhelan/GameSentenceMiner/issues)でissueを開くか、ページ下部でこのドキュメントを直接編集してください。
:::

## 1. 前提条件（システムパッケージ）

ディストリビューションのパッケージマネージャーを使用して、いくつかの依存関係をインストールする必要があります。必要なパッケージはディストリビューションによって若干異なります。

#### Debian / Ubuntuベースのディストリビューションの場合：

```sh
sudo apt update
sudo apt install ffmpeg python3-venv python3-pip libfuse2 xclip
```

#### Fedora / Nobara / Archベースのディストリビューションの場合：

パッケージ名は異なる場合があります。これらはFedoraの一般的な名前です。

```sh
sudo dnf install ffmpeg python3-devel gcc libevdev-devel xclip
```
*（注：Archユーザーは、公式リポジトリまたはAURで同等のパッケージを見つける必要がある場合があります。）*

-   `libfuse2`: 多くの最新ディストリビューションでAppImage形式に必要です。
-   `xclip`: クリップボード関連の機能に使用されます。

#### Arch Linuxユーザーの場合：

検証が必要です：

```sh
sudo pacman -S ffmpeg gcc libevdev xclip fuse2
```

## 2. OBS Studioの設定

GSMは、OCR、スクリーンショット、音声録音に不可欠な画面キャプチャにOBS Studioを使用します。

1.  **OBS Studioをインストールする**: ディストリビューションのソフトウェアセンターまたはFlatpakとしてインストールします。Flatpakバージョンは、ほとんどの機能がプリパッケージされているため、しばしば推奨されます。**OBS WebSocket**プラグインが含まれていることを確認してください（最新バージョンのほとんどはデフォルトで含まれています）。

2.  **WebSocketサーバーを設定する**:
    -   OBSで、`ツール` -> `WebSocketサーバー設定`に移動します。
    -   `WebSocketサーバーを有効にする`をチェックします。
    -   **重要**: `認証を有効にする`のチェックを外します。Linux/macOSでのGSMの接続は、認証を無効にすると最適に機能します。
    -   `サーバーポート`をGSMのデフォルトに合わせて`7274`に設定します。

3.  **リプレイバッファを有効にする**: これは、音声とスクリーンショット付きのフラッシュカードを作成するために重要です。
    -   `設定` -> `出力`に移動します。
    -   `出力モード`を`詳細`に設定します。
    -   `リプレイバッファ`タブに移動します。
    -   `リプレイバッファを有効にする`をチェックします。
    -   `最大リプレイ時間`を少なくとも`300`秒に設定します。

:::warning[手動でのシーン設定が必要]
GSMのホームタブにある「新しいゲームをセットアップ」およびゲームキャプチャボタンは**Linuxでは機能しません**。OBSで新しいシーンを手動で作成し、ソース（例：Waylandの場合は「画面キャプチャ」、X11の場合は「ウィンドウキャプチャ」）を追加してゲームをキャプチャする必要があります。
:::

## 3. Ankiの設定

1.  **Ankiをインストールする**: [公式サイト](https://apps.ankiweb.net/)からAnkiをダウンロードします。
2.  **AnkiConnectをインストールする**: Ankiで、`ツール` > `アドオン` > `アドオンを取得...`に移動し、コードを入力します：**`2055492159`**。
3.  **（Waylandユーザー向け）**: AnkiはWaylandで正しく実行するために特定の環境変数を必要とする場合があります。ターミナルから次のように起動する必要があるかもしれません：
    ```sh
    export ANKI_WAYLAND=1 && anki
    ```

## 4. GameSentenceMinerのインストール

Linuxでの推奨方法は、提供されているAppImageを使用することです。

1.  **AppImageをダウンロードする**: [GitHubの最新GSMリリース](https://github.com/bpwhelan/GameSentenceMiner/releases/latest)にアクセスし、`.AppImage`ファイルをダウンロードします。

2.  **実行可能にする**: ファイルをダウンロードしたディレクトリでターミナルを開き、次を実行します：
    ```sh
    chmod +x GameSentenceMiner-*.AppImage
    ```

3.  **GameSentenceMinerを実行する**:
    ```sh
    ./GameSentenceMiner-*.AppImage
    ```
    初回起動時、GSMはPython仮想環境を作成し、すべての依存関係をインストールします。このプロセスには数分かかることがあります。

## トラブルシューティングと特定のディストリビューション

### Fedora 43+ / Python 3.13+を搭載したディストリビューション

一部のディストリビューションには、GSMの依存関係と互換性の問題がある可能性のある非常に新しいPythonバージョンが同梱されています。GSMが正しくインストールまたは実行できない場合は、`uv`を使用して手動で互換性のあるPython環境を作成できます。

まず、まだインストールしていない場合は`uv`をインストールします：`bash <(curl -LsSf https://astral.sh/uv/install.sh)`

次に、ターミナルで次のコマンドを実行して、GSM専用のPython 3.11環境を作成します：

```sh
# 以前の壊れた環境を削除
rm -rf ~/.config/GameSentenceMiner/python_venv

# Python 3.11を使用して新しい環境を作成
uv python install 3.11
uv python pin 3.11
uv venv ~/.config/GameSentenceMiner/python_venv

# セットアップの最終処理
~/.config/GameSentenceMiner/python_venv/bin/python3 -m ensurepip
rm .python-version
```
これらのコマンドを実行した後、GSM AppImageを再度起動します。これで、この互換性のある環境が使用されるはずです。

## 既知の問題と回避策

-   **OCRの推奨事項**: OneOCRはLinuxでは利用できません。安定性のためにMeiki Text Detector、メインOCRとしてGoogle Lensを使用することをお勧めします。

-   **ゲームオーバーレイ**: ゲームオーバーレイ機能は現在Linuxでは機能しません。マイニングにはテキストフッカーページ（`http://localhost:55000/texthooker`）を使用してください。

-   **グローバルホットキー**: LinuxのPythonのキーボードライブラリの制限により、OCRのグローバルホットキーは機能しません。GSMアプリケーション内のボタンを使用してOCRを開始/停止する必要があります。

-   **エリアセレクター**: エリアセレクターのホットキー（例：`S`で保存、`Q`で終了）は機能しません。左上に表示される小さな画面上のUIパネルを使用して、セレクターを保存または閉じる必要があります。

-   **ウィンドウフォーカスの横取り**: Wayland（GNOME）の一部のユーザーは、GSMが別のワークスペースにある場合にキーボードフォーカスを奪うことがあると報告しています。GSMを他のアプリケーションと同じワークスペースに保つことが現在の回避策です。GSMを再起動することでも一時的に問題が解決します。

-   **テキストフッキング（Agent/Textractor）**: WineまたはProtonを介して実行されるゲームでテキストフッカーを使用することは可能ですが、手動でのセットアップが必要です。たとえば、ゲームと同じWineプレフィックス内でTextractorを実行する必要がある場合があり、これはLutrisやBottlesなどのツールで管理できます。Agentは、利用可能なスクリプトがある一部のネイティブLinuxゲームでそのまま動作する場合があります。
