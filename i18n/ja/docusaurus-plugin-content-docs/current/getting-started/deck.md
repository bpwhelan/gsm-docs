---
title: Steam DeckにGSMをインストールする
sidebar_label: Steam Deck
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Steam DeckでのGameSentenceMiner

GameSentenceMinerはSteam Deckでネイティブに動作します！Steam Deckは本質的にLinux PCであるため、ハンドヘルドで直接完全なGSM体験を実行できます。あるいは、バッテリー寿命とパフォーマンスを向上させるために、デスクトップPCをDeckにストリーミングすることもできます。

:::tip 推奨
Steam Deckで最高の体験とGSMの全機能を利用するには、ストリーミングを使用するのがおすすめです。特に、Windows専用ツールが必要なハイエンドゲームやビジュアルノベルをプレイする場合に最適です。
:::

<Tabs>
  <TabItem value="native" label="Steam Deckネイティブ" default>

    ## ネイティブセットアップ

    GSMをネイティブで実行すると、インターネット接続がなくてもどこでも文章をマイニングできます。このガイドでは、Steam Deckのデスクトップモードを使用してすべてをセットアップすることに焦点を当てています。

    ### 1. 前提条件

    #### デスクトップモードへの切り替え
    1. **Steam**ボタンを押します。
    2. **電源** > **デスクトップに切り替え**に移動します。

    #### FFmpegをインストール

    デスクトップモードで[Linux版の手順](./linux.md)に沿ってFFmpegを用意し、`ffmpeg` と `ffprobe` がGSMから使えることを確認します。

    #### OBS Studioをインストール
    GSMは、OCR用にゲーム画面をキャプチャするためにOBS Studioを必要とします。
    1. **Discover**ストア（タスクバーのショッピングバッグアイコン）を開きます。
    2. "OBS Studio"を検索します。
    3. Flatpakバージョンをインストールします。
    
    ![OBS Flatpak Installation](/img/deck/obs_flatpak.png)
    
    4. **重要**: **OBS WebSocket**プラグインが有効になっていることを確認してください（最近のバージョンではデフォルトで含まれています）。
    5. OBSで、**ツール** > **WebSocketサーバー設定**に移動します。
    6. **WebSocketサーバーを有効にする**をチェックします。
    7. **認証を有効にする**をオンのままにし、生成されたパスワードをGSMのOBS設定に入力します。
    9. **サーバーポート**を`7274`に設定します。
    
    
    10. **リプレイバッファの設定**:
       - **設定** > **出力** > **リプレイバッファ**に移動します。
       - **リプレイバッファを有効にする**をチェックします。
       - **最大リプレイ時間**を`120`（またはそれ以上）秒に設定します。
    
    ![OBS Replay Buffer Settings](/img/deck/obs_replay_buffer.png)
    
    11. リソースを節約するために、**設定** > **映像**でFPSを`10`に設定します。
    
    ![OBS FPS Settings](/img/deck/obs_fps.png) 

    #### Ankiをインストール
    ここでは公式のLinuxビルドを使います。

    1. [Anki公式サイト](https://apps.ankiweb.net/)にアクセスします。
    2. Linuxバージョンをダウンロードします（Download Anki for Linux -> Download .tar.zst）。
    3. ファイルマネージャー（Dolphin）を開き、ダウンロードしたファイルを見つけ、右クリックして**Extract** > **Extract archive here**（ここでアーカイブを展開）を選択します。
    4. 展開されたフォルダを開きます。
    5. [AnkiのLinux版インストールガイド](https://docs.ankiweb.net/manual/platform/linux/installing)に沿って、そのフォルダーからインストールしてAnkiを起動します。

    #### Ankiの設定
    1. Ankiを開きます。
    2. **ツール** > **アドオン** > **アドオンを取得...**に移動します。
    3. コード`2055492159`を入力して**AnkiConnect**をインストールします。
    4. Ankiを再起動します。

    ### 2. GameSentenceMinerのインストール

    Steam DeckにはAppImageバージョンを使用します。

    1. [GSMのリリース一覧](https://github.com/bpwhelan/GameSentenceMiner/releases)にアクセスします。
    2. `.AppImage`ファイルをダウンロードします。
    3. ダウンロードしたファイルをダブルクリックして実行します。実行されない場合：
       - ファイルを右クリックし、**プロパティ** > **既定のアクセス権**（Permissions）タブに移動します。
       - **実行可能にする**（Is executable）をチェックします。
       - 閉じて、ファイルを再度ダブルクリックします。

    ### 3. キャプチャとOCRを設定する

    OBSとGSMをデスクトップモードで起動し、GSMの**Home → ゲームを選択 → ⋯ → Run Capture Wizard**を実行します。ゲーム画面を確認し、シーンを自動作成できない場合はOBSで手動作成してください。

    ウィザードで**OCR**を選ぶか、GSMの**OCR**タブを開きます。台詞の範囲を選択し、サンプルスキャンで認識を確認してから設定を保存します。範囲の種類やスキャン操作は[OCRガイド](../features/ocr.md)を参照してください。

    ### 4. オーバーレイとコントローラーを設定する

    GSMのHomeタブからオーバーレイを起動し、**Overlay Settings**でキャプチャと表示方法を調整します。オーバーレイ内のYomitan辞書は、ブラウザー版Yomitanの辞書とは別にインポートしてください。

    コントローラーを接続したら、**Overlay Settings → Controller**で操作を設定します。トラックパッドをポインターとして使うこともできます。[Overlayガイド](../features/overlay.md)と[ゲームパッド操作](../features/overlay-gamepad.md)も参照してください。

    ### 5. 起動してマイニングする

    - OBS、GSM、Ankiを起動します。
    - ウィザードの最後に、このゲームでOCRを自動起動するか選択します。
    - 台詞がGSMのText Feedに表示されることを確認します。
    - オーバーレイで単語を検索し、Ankiカードを作成します。

    Steam Deckの動作はLinuxデスクトップとキャプチャソースに左右されます。Gaming ModeはDesktop Modeより制約が多いため、設定済みPCからのストリーミングが簡単な場合があります。全体の流れは[How to Use GSM](../how-to-use-gsm.md)を参照してください。

  </TabItem>
  <TabItem value="streaming" label="PCからのストリーミング">

    ## ストリーミングセットアップ

    強力なデスクトップPCをお持ちの場合は、**Apollo**（仮想ディスプレイ機能のためにSunshineよりも推奨）-> **Moonlight**を介してSteam Deckにゲームをストリーミングするのが、多くの場合最高のエクスペリエンスです。これにより、Deckのバッテリー寿命が節約され、OCRにPCの優れた処理能力を使用できます。

    ### 仕組み
    1. Deckではなく、**PCでGSMとゲームを実行**します。
    2. **デスクトップをDeckにストリーミング**します。
    3. Steam Deckをコントローラー/画面として使用します。

    ### セットアップ手順
    1. **PC側**: GSMをインストールし、通常どおり設定します（[Windowsガイド](windows.md)を参照）。
       - [Apollo](https://github.com/ClassicOldSong/Apollo/releases)をインストールしてセットアップします。
    3. **Steam Deck側**:
       - "デスクトップモード"に入ります（Steamボタン > 電源 > デスクトップに切り替え）。
       - 最高のパフォーマンスを得るために**Moonlight**（Discoverストアから）をインストールします（PCにApolloが必要です）。
       - Steamで、Moonlightを非Steamゲームとして追加します。
       - **ゲーミングモード**に戻ります（Steamボタン > 電源 > ゲーミングモードに切り替え）。
       - ライブラリ -> 非Steamから**Moonlight**を起動します。
       - Apolloを実行しているPCを選択し、表示されたPINをメモします。
    4. **PCに戻る**:
       - PCでPINを入力してデバイスをペアリングします。
       - 選択したデバイスがアプリを起動し、コントローラー/マウスで制御できるように権限を許可します（私はすべて許可しています）。

       
    ### **操作**:
    使いやすくするために、いくつかのコントロールを調整する必要があるかもしれません。私はかなり前に設定したので詳細をすべて覚えているわけではありませんが、いくつかのヒントを紹介します：
    - 背面ボタン（L4/L5/R4/R5）の1つを`右Alt`にマッピングして、Text Feedにすばやくアクセスできるようにします。
    - 別の背面ボタンを`Tab`にマッピングして、ウィンドウを切り替えます。
    - 私は右のトラックパッドをマウスとして、左のトラックパッドをスクロールに使用するのが好きです。そして、左トラックパッドのクリックを左マウスボタン、右トラックパッドのクリックを右マウスボタンにマッピングします。
      - これらの設定により、ゲーム中にGSMオーバーレイやAnkiと簡単に対話できます。

  </TabItem>
</Tabs>
