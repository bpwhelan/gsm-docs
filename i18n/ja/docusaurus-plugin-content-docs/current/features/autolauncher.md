---
title: Game Automation
sidebar_label: Game Automation
sidebar_position: 2
---

import ImageFrame from '@site/src/components/ImageFrame';

# Game Automation

Game AutomationはOBSシーンごとにキャプチャ方法を保存し、ゲームを切り替えたときに適切なテキストソースを起動します。新しいゲームではHomeタブの **Add a game** を使い、後から設定を変える場合は **Game Automation** タブを使います。

<ImageFrame src="/img/guides/capture-wizard.png" alt="GSMのキャプチャウィザード" caption="ゲームごとにテキストフックとOCRの起動方法を保存します。" />

## シーンごとに設定できる項目

- 起動するテキストフックエンジンや保存済みフック
- OCRを自動で起動するか、手動スキャンにするか
- Agent、Textractor、LunaTranslatorなどの共有パス
- 起動待ち時間やゲームごとのキャプチャ動作

OBSのアクティブシーンを基準に、設定が適用されます。ゲームごとに異なるフックやOCRを使えます。フック選択は[テキストフックの設定](./text-hook.md)をご覧ください。

## ゲームを設定する

1. ゲームを開き、OBSで対応するシーンを選びます。
2. **Home → ゲームを選択 → ⋯ → Run Capture Wizard**を選び、**Capture → Texthook → OCR → Finalize**に沿って進めます。
3. **Finalize**で、このゲームの自動起動方法を選びます。
4. シーンを切り替えて戻り、選んだソースが起動して台詞を取り込むか確認します。

キャプチャの設定後にパスやシーン設定を変える場合は**Game Automation**タブを開きます。シーンが表示されない場合は、OBSとの接続とシーン一覧を確認します。

自動化を使わず、フックやOCRを手動で起動することもできます。
