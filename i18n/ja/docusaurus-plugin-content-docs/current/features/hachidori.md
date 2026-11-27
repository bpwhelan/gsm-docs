---
title: Hachidori辞書リーダー
sidebar_label: Hachidori
sidebar_position: 5
---

import ImageFrame from '@site/src/components/ImageFrame';

# Hachidori辞書リーダー

GSMオーバーレイでは、組み込みYomitanの代わりに**Hachidori**を日本語辞書リーダーとして使用できます。初期設定はYomitanです。切り替えてもYomitanの辞書や設定は保持されます。

## Hachidoriに切り替える

1. **Settings → Desktop → Dictionary**を開きます。
2. **Lookup reader**から**Hachidori**を選びます。オーバーレイが選択したリーダーで再読み込みされます。
3. **Open Hachidori Settings**から辞書や表示を設定します。
4. ゲームに戻って単語を調べます。

<ImageFrame src="/img/features/hachidori/dictionary-import.png" alt="GSMオーバーレイ内のHachidori辞書インポート画面" caption="ローカルの辞書ファイルをHachidoriにインポートします。" />

Yomitan形式のZIP辞書をインポートできます。辞書グループ、個人辞書、ポップアップボタン、ピッチ表示などはHachidori側の設定で調整します。

<ImageFrame src="/img/features/hachidori/dictionary-lookup.png" alt="GSMオーバーレイで開いたHachidori検索結果" caption="ゲーム画面上に検索結果が表示され、辞書項目の移動やマイニングができます。" />

GSMの[ゲームパッド操作](./overlay-gamepad.md)もHachidoriで利用できます。Yomitanに戻るには**Settings → Desktop → Dictionary → Lookup reader → Yomitan**を選びます。
