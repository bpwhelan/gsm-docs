---
title: Longplay
sidebar_label: Longplay
sidebar_position: 6
---

# Longplay

LongplayはOBS録画に合わせて、ゲーム中の台詞をタイミング付きのSRT字幕ファイルに保存します。録画を後から見直したり、字幕付きで再生したりできます。

## 有効にする

1. GSMの **Settings → Features** を開きます。
2. **Generate Longplay**を有効にします。
3. テキスト取り込みが動作する状態で、OBSの録画を開始します。
4. 録画を停止すると、動画の隣に同名のSRTファイルが保存されます。

```text
MyGame.mp4
MyGame.srt
```

LongplayはOBSの通常録画に合わせて動作します。Ankiカード用のReplay Bufferの代替ではありません。
