---
title: "コントローラーでオーバーレイを操作する"
sidebar_label: ゲームパッド操作
sidebar_position: 5
---

# コントローラーでオーバーレイを操作する

まずポインターで単語を引けることを確認し、**Overlay Settings → Controller** を開きます。初期設定、ボタン割り当て、移動、詳細設定、デバイステストを切り替えられます。

![起動モードと各設定ページを表示するController画面](/img/desktop/overlay-gamepad.png)

1. **Setup**でゲームパッド操作を有効にします。ボタンを押している間だけ操作する場合は **Modifier**、ボタンで開始と終了を切り替える場合は **Toggle** を選びます。
2. **Devices & testing**でボタンを押して入力を確認します。Windowsでは追加のデバイス向けにDirectInput / SDLの拡張サポートも選べます。
3. **Button bindings**で起動、決定、キャンセルを割り当てます。**Navigation**で文字単位か単語単位の移動を選びます。日本語の単語選択には[初期設定](../getting-started/index.md)で案内されるSudachi辞書を使います。
4. 台詞が見えているときに操作モードに入り、単語を選びます。決定で辞書を開くか、自動決定で移動に合わせて項目を開きます。設定した操作でカードに追加し、キャンセルでポップアップを閉じます。

[YomitanとHachidori](./overlay.md)のどちらでも操作できます。辞書やAnkiデッキは各リーダーの設定で選びます。
