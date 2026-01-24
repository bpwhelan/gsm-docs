---
title: GSMプラグインシステム
sidebar_label: プラグイン
sidebar_position: 3
---

import Admonition from '@theme/Admonition';

# ユーザープラグインシステム

ユーザープラグインシステムを使用すると、15分ごとに自動的に実行されるPythonコードを書くことでGameSentenceMinerの動作をカスタマイズできます。

**警告** 上級ユーザーのみ。データが危険にさらされます。

GSMには使用できる内部APIがあり、GSMが実行されている場合、[http://localhost:55000/api/docs#](http://localhost:55000/api/docs#)にドキュメントがあります。
これはGSMのtexthookerページがポート55000で実行されていることを前提としています。
APIは主に内部使用のために作られているので、少し粗雑ですが、ほとんどのものはうまく動作します。

## クイックスタート

## 1. プラグインファイルを編集

`%APPDATA%\GameSentenceMiner\plugins.py`にある`plugins.py`ファイルを開く（Windows）

またはGSMアイコンを右クリックしてトレイで、フォルダを開くをクリックしてplugins.pyを見つける

このフォルダにいる間、これをいじる前に**gsm.dbを別のフォルダにコピーしてバックアップ**してください。

`main()`によって呼び出される関数を書いてGSMに何かさせる。

```python
def main():
    hello_world()

def hello_world():
    print("Hello, World!")
```

### 2. 保存して完了！

プラグインは15分ごとに自動的に実行されます。再起動は必要ありません。

## サンプルプラグイン関数

これらのすぐに使用できるサンプルを`plugins.py`ファイルにコピーしてください：

### 1. ゲームから重複を削除

**重要**: コード例を読んでください。この例には特に理解を助けるために多くのコメントを追加しました。

**重要**: 例を実行する前にAPIドキュメントを読む必要があります。これは本当に危険です。

選択したゲームから重複した文を削除します：

```python
def delete_duplicates_from_games(games=None, case_sensitive=False, preserve_newest=False):
    """
    GSM APIを使用してゲームから重複した文を削除します。
    
    Args:
        games: チェックするゲーム名のリスト、または["all"]ですべてのゲーム（デフォルト: ["all"]）
        case_sensitive: テキストを大文字小文字を区別して比較するかどうか（デフォルト: False）
        preserve_newest: 最も古いものではなく最も新しい重複を保持するかどうか（デフォルト: False）
    """
    # GSMにはrequestsが組み込まれています、他のライブラリについてはgithubのpyproject.tomlを参照
    # またはpythonタブでパッケージをインストールできますが、将来上書きされる可能性があります
    import requests
    # gsmはログにこれを使用します
    from GameSentenceMiner.util.configuration import logger
    
    try:
        if not games:
            # これには非常に注意してください
            # これによりグローバルにすべての重複が削除されます
            # 時間ウィンドウを設定せずgames == allにした場合、とても悪いことが起こります
            # たとえば、すべてのゲームから"arigatou"が削除されます
            # "all"を使用したい場合は時間ウィンドウを設定してください。
            # 時間ウィンドウが不要な場合は特定のゲームを設定してください。
            games = [all]
            # gamesはgames_tableからのGameIDである必要があります
            # これを取得するAPIがあります

        # APIリクエストを準備
        payload = {
            "games": games,
            "case_sensitive": case_sensitive,
            "preserve_newest": preserve_newest,
            "time_window_minutes": 1,
            # おそらく時間ウィンドウが必要です
            # たとえば、誰かがarigatouと言ってから50分後にこれを言った場合、時間ウィンドウが設定されていないと削除されます
            # 時間ウィンドウは「5分以内に重複している場合、削除する」と言います
            # たとえば、texthookerのスパムなど
            # ところで、私のテストでは1分で十分ですが、あなたが決めてください:)
            "ignore_time_window": True  # ゲーム全体で重複を検索
        }

        # 重複除去APIプレビューを呼び出し
        resp = requests.post(
            # 重要: 最初にプレビューするために/api/preview-deduplicationを使用してください
            "http://localhost:55000/api/preview-deduplication",
            # 多くのAPIにプレビューがあります、ない場合は検索機能を使用してテストしてください（/searchにAPIがあります:)
            json=payload,
            timeout=300
        )

        # 不満がある場合は失敗
        if resp.status_code != 200:
            return

        resp_json = resp.json()
        resp
        affected_games = resp_json["duplicates_count"]
        count = resp_json["duplicates_count"]
        if count <= 0:
            return 

        # 多すぎる場合は失敗。これはフェイルセーフです。
        # これを初めて実行する場合、多くの重複を期待してください
        if count > 100:
            logger.error("重複除去が100項目以上削除しようとしました...変ですか？")
            return
        
        logger.info(f"[Plugin] {count}個の重複文を削除予定")
        logger.info(f"[Plugin] {affected_games}ゲームから削除予定")
        
        # 重複除去APIを呼び出し
        response = requests.post(
            # 重要: 最初にプレビューするために/api/preview-deduplicationを使用してください
            "http://localhost:5000/api/deduplicate",
            # 多くのAPIにプレビューがあります、ない場合は検索機能を使用してテストしてください
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            # loggerを使用するとgsmコンソールに表示されます
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] {deleted_count}個の重複文を削除しました")
            else:
                logger.info("[Plugin] 重複が見つかりませんでした")
        else:
            logger.error(f"[Plugin] APIエラー: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] GSM APIへの接続に失敗しました: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] delete_duplicates_from_gamesでエラー: {e}", exc_info=True)


def main():
    # このように呼び出します:
    delete_duplicates_from_games(games=["all"])
    # 保存をクリック
    # 次の15分で呼び出されます、コンソールを確認
```

### 2. 正規表現に一致する行を削除

パターンに一致する行全体を削除します：

```python
 # この関数では私の正規表現パターンが100文字以上のすべての行を削除します
def delete_lines_matching_regex(pattern=r".{100,}", case_sensitive=False):
    """
    GSM APIを使用して正規表現パターンに一致するすべての行を削除します。
    
    Args:
        pattern: 一致させる正規表現パターン
        case_sensitive: パターン一致が大文字小文字を区別するかどうか（デフォルト: False）
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    try:
        # APIリクエストを準備
        payload = {
            # あなたの正規表現はここに入ります
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive,
            "use_regex": True
        }

        # テキスト行削除APIを呼び出し
        resp = requests.post(
             # 正規表現を実行する前にgsmの統計で検索を使用してテストしてください
             # 100%確信していない場合、すべてのデータを削除する可能性があります:)
            "http://localhost:55000/api/preview-delete-text-lines",
            json=payload,
            timeout=300
        )

        if resp.status_code != 200:
            return

        resp_json = resp.json()
        count = resp_json["count"]

        if count > 100:
            logger.error("正規表現削除が100項目以上削除しようとしました...変ですか？")
            return
        
        logger.info(f"[Plugin] {count}個の重複文を削除予定")

        # テキスト行削除APIを呼び出し
        response = requests.post(
            "http://localhost:55000/api/delete-text-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] パターンに一致する{deleted_count}行を削除しました: {pattern}")
                send_notification(f"[Plugin] パターンに一致する{deleted_count}行を削除しました: {pattern}")
            else:
                logger.info(f"[Plugin] パターンに一致する行がありませんでした: {pattern}")
        else:
            logger.error(f"[Plugin] APIエラー: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] GSM APIへの接続に失敗しました: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] delete_lines_matching_regexでエラー: {e}", exc_info=True)
```

正規表現を作成するにはhttps://regex101.com/を使用してください。

またはここで検索: http://localhost:55000/search

そして私たちの事前構築された正規表現の一つを選択してコピーしてください。

正規表現をテストするにはここへ:
http://localhost:55000/search
詳細オプションで"use regex"を有効化。

検索で見るすべての行が削除されます。

### 3. 行から正規表現をクリーンアップ

行内からパターンを削除します（行は削除しません）：

```python
def cleanup_regex_from_lines(pattern=r"【.*?】", case_sensitive=False):
    """
    GSM APIを使用して行内から正規表現パターンを削除します（行は削除せず、クリーンアップします）。
    
    Args:
        pattern: 行から削除する正規表現パターン
        case_sensitive: パターン一致が大文字小文字を区別するかどうか（デフォルト: False）
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    # また、プレビューと検索を使用して100%確実に望むことを行っていることを確認してください
    try:
        # APIリクエストを準備
        payload = {
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive
        }
        
        # 正規表現クリーンアップAPIを呼び出し
        response = requests.post(
            "http://localhost:5000/api/delete-regex-in-game-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            updated_count = result.get("updated_count", 0)
            if updated_count > 0:
                logger.info(f"[Plugin] {updated_count}行をクリーンアップしました（パターンを削除: {pattern}）")
            else:
                logger.info(f"[Plugin] パターンのクリーンアップが必要な行がありませんでした: {pattern}")
        else:
            logger.error(f"[Plugin] APIエラー: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] GSM APIへの接続に失敗しました: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] cleanup_regex_from_linesでエラー: {e}", exc_info=True)


def main():
    # このように呼び出します:
    cleanup_regex_from_lines(pattern=r"【.*?】")
```

## 使用可能なGSM APIエンドポイント

GSMを起動してこのURLにアクセスすると、使用できるすべてのAPIエンドポイントを確認できます：

http://localhost:55000/api/docs

これらを呼び出すにはRequestsを使用してください。注意してください。これを間違えるとデータが削除される可能性があります。多くのバックアップを作成してください。

## ヒントとベストプラクティス

**重要** プラグインを書く前にデータベースを手動でバックアップしてください。
プラグインコードを徹底的にテストして安全であることを確認してください。

データが削除されてバックアップがない場合、復元する方法はありません。

1. **小さく始める**: 一度に一つのプラグインを有効にしてテスト
2. **ログを使用**: 実行を追跡するために`logger.info("[Plugin] ...")`を追加
3. **パターンをテスト**: 正規表現パターンを使用する前にテスト
4. **バックアップ**: データベースは`%APPDATA%\GameSentenceMiner\gsm.db`にあります
5. **コメントアウト**: コードを削除せずにプラグインを無効にするには`#`を使用
6. **エラーハンドリング**: プラグインは自動的にエラーをキャッチします、ログを確認
7. **APIタイムアウト**: 長時間実行される操作には適切なタイムアウト値を使用
8. **レスポンスを確認**: 結果を処理する前に常に`response.status_code`を確認

## トラブルシューティング

### プラグインが実行されない

1. 15分待ってください、プラグインは15分ごとに実行されます。
2. コンソールでログを確認。

### 待たずにテストする方法

プラグインを手動で実行できます：

```bash
python -c "from GameSentenceMiner.util.cron.user_plugins import execute_user_plugins; execute_user_plugins()"
```

しかし、GSMコンソール内でどのように動作するかを見るために待つのがおそらく最善です。

# アイデア
* ntfyを使用して完了していない場合にデイリーを完了させるリマインダーを電話/コンピュータに送信
* デイリーが完了したら、統計を生成して説明責任のためにDiscordチャンネルに投稿
* 独自の統計ダッシュボード/グラフプログラムを構築
* アプリ（Toggl、Anki、Bunpro、Wanikani）を統合して「今週の私の活動」プログラムを作成
* 統計をExcelにエクスポート
* 別のサービスからデータをダウンロードし、ExStatic形式に変換して自動的にGSMにインポート

クールなプラグインを作ったら、Discordの#resource-sharingで共有してください！

# 実世界の例

これは**私の**プラグインファイルです。

エラーが含まれているかもしれません、壊れたコードが含まれているでしょう、そしてあなたはそれをコピーして貼り付けるべきではありません。

しかし、本物のアプリケーションがどのようなものか見たい場合は、これがそれです。

```python
"""
User Plugins - GSM cronシステム経由で15分ごとに実行
GSMの動作をカスタマイズするにはこのファイルを編集してください。完全なドキュメントについてはUSER_PLUGINS_README.mdを参照。
https://github.com/YOUR_REPO/blob/main/GameSentenceMiner/util/cron/USER_PLUGINS_README.md
有効にすると15分ごとに自動的にコードが実行されます。
"""
import requests
import time
import asyncio
from GameSentenceMiner.util.configuration import logger


def main():
    """
    GSM cronシステムによって15分ごとに呼び出されるメインエントリーポイント。
    ここにカスタムコードを追加してください。
    """

    # デイリーを送信する前にクリーンアップ
    delete_duplicates_from_games()
    delete_lines_matching_regex()

    try:
        message = dailies()
        send_notification(message)
    except ValueError as e:
        logger.info("デイリーはまだ完了していません。")
    
def dailies():
    import random
    # HTTPリクエストを作成せずに直接関数をインポート
    # これは誰かがAPIを持っていない場合に直接呼び出せることを示すだけです
    from GameSentenceMiner.web.goals_api import get_todays_goals
    """
    {'date': '2025-12-11', 'goals': [{'goal_name': 'Read 1m chars 2026', 'progress_today': 9775, 'progress_needed': 980, 'metric_type': 'characters', 'goal_icon': '📖'}, {'goal_name': 'Make 2k Anki cards', 'progress_today': 23, 'progress_needed': 18, 'metric_type': 'cards', 'goal_icon': '🎴'}, {'goal_name': 'read 300k dec challenge', 'progress_today': 9775, 'progress_needed': 9505, 'metric_type': 'characters', 'goal_icon': '❄️'}, {'goal_name': '1500 hours by 2027', 'progress_today': 2.23, 'progress_needed': 2.37, 'metric_type': 'hours', 'goal_icon': '⏱️'}]}
    """
    
    completed = True
    message = []
    try:
        data = get_todays_goals()
        logger.info(data)
        print(data)
        for g in data.get("goals"):
            print(g)
            logger.info(g)
            name = g.get("goal_name")
            today = g.get("progress_today")
            needed = g.get("progress_needed")
            # 完了していない目標の進捗更新のみ送信
            if today < needed:
                completed = False
            icon = g.get("goal_icon", "🎯")
            message.append(f"{icon} {name}: {today}/{needed}")
        output = "\n".join(message)
        
    except Exception as e:
        send_notification(f"目標取得エラー: {e}")
    if not completed:
        return output 
    else:
        raise ValueError
    
def send_notification(message):
    # https://ntfy.sh/を使用して電話に通知を送信
    requests.post("https://ntfy.sh/XXXXXXXXXX",data=message.encode(encoding='utf-8'))

def delete_duplicates_from_games(games=None, case_sensitive=False, preserve_newest=False):
    """
    GSM APIを使用してゲームから重複した文を削除します。
    
    Args:
        games: チェックするゲーム名のリスト、または["all"]ですべてのゲーム（デフォルト: ["all"]）
        case_sensitive: テキストを大文字小文字を区別して比較するかどうか（デフォルト: False）
        preserve_newest: 最も古いものではなく最も新しい重複を保持するかどうか（デフォルト: False）
    """
    # GSMにはrequestsが組み込まれています、他のライブラリについてはgithubのpyproject.tomlを参照
    # またはpythonタブでパッケージをインストールできますが、将来上書きされる可能性があります
    import requests
    # gsmはログにこれを使用します
    from GameSentenceMiner.util.configuration import logger
    
    try:
        if not games:
            games = ["all"]
   
        # APIリクエストを準備
        payload = {
            "games": games,
            "case_sensitive": case_sensitive,
            "preserve_newest": preserve_newest,
            "time_window_minutes": 1,
            "ignore_time_window": False  # ゲーム全体で重複を検索
        }

        # 重複除去APIを呼び出し
        resp = requests.post(
            # 重要: 最初にプレビューするために/api/preview-deduplicationを使用してください
            "http://localhost:55000/api/preview-deduplication",
            # 多くのAPIにプレビューがあります、ない場合は検索機能を使用してテストしてください
            json=payload,
            timeout=300
        )

        if resp.status_code != 200:
            return

        resp_json = resp.json()
        resp
        affected_games = resp_json["duplicates_count"]
        count = resp_json["duplicates_count"]
        if count <= 0:
            return 

        if count > 100:
            send_notification("重複除去が100項目以上削除しようとしました...変ですか？")
            return
        
        logger.info(f"[Plugin] {count}個の重複文を削除予定")
        logger.info(f"[Plugin] {affected_games}ゲームから削除予定")
        
        # 重複除去APIを呼び出し
        response = requests.post(
            # 重要: 最初にプレビューするために/api/preview-deduplicationを使用してください
            "http://localhost:55000/api/deduplicate",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            # loggerを使用するとgsmコンソールに表示されます
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] {deleted_count}個の重複文を削除しました")
                send_notification(f"[Plugin] {deleted_count}個の重複文を削除しました")
            else:
                logger.info("[Plugin] 重複が見つかりませんでした")
        else:
            logger.error(f"[Plugin] APIエラー: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] GSM APIへの接続に失敗しました: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] delete_duplicates_from_gamesでエラー: {e}", exc_info=True)

def delete_lines_matching_regex(pattern=r".{100,}", case_sensitive=False):
    """
    GSM APIを使用して正規表現パターンに一致するすべての行を削除します。
    
    Args:
        pattern: 一致させる正規表現パターン
        case_sensitive: パターン一致が大文字小文字を区別するかどうか（デフォルト: False）
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    try:
        # APIリクエストを準備
        payload = {
            # あなたの正規表現はここに入ります
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive,
            "use_regex": True
        }

        # テキスト行削除APIを呼び出し
        resp = requests.post(
            "http://localhost:55000/api/preview-delete-text-lines",
            json=payload,
            timeout=300
        )

        if resp.status_code != 200:
            return

        resp_json = resp.json()
        count = resp_json["count"]

        if count > 100:
            send_notification("正規表現削除が100項目以上削除しようとしました...変ですか？")
            return
        
        logger.info(f"[Plugin] {count}個の重複文を削除予定")

        # テキスト行削除APIを呼び出し
        response = requests.post(
            "http://localhost:55000/api/delete-text-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] パターンに一致する{deleted_count}行を削除しました: {pattern}")
                send_notification(f"[Plugin] パターンに一致する{deleted_count}行を削除しました: {pattern}")
            else:
                logger.info(f"[Plugin] パターンに一致する行がありませんでした: {pattern}")
        else:
            logger.error(f"[Plugin] APIエラー: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] GSM APIへの接続に失敗しました: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] delete_lines_matching_regexでエラー: {e}", exc_info=True)


# 警告: 以下のコードは私が遊んでいたものです
# 動作せず、壊れる可能性があります
# しかし、アイデアを与えたり、基盤として遊ぶためのものです:)
"""
# 欠けているAI翻訳ですべてのAnkiカードを更新
def update_anki_cards_with_ai_translation():
    # SentenceTranslation#を持たない各Ankiカードに対して
    # GSMデータベースで文を検索（すべての文を保存しています）
    # 10個の前の文を見つける
    # ゲーム名を見つける
    # AIに文を翻訳するよう依頼し、10個の前の文+ゲーム名を与える
    # これによりAI翻訳者に多くの文脈が与えられ、翻訳が本当に良くなります
    # すべての読んだ文をローカルに保存しているので、これは可能:) <3 

    deck_name = "例文マイニング"
    # SentenceTranslationが空のカードを見つける
    response = requests.post('http://localhost:8765', json={
        "action": "findCards",
        "version": 6,
        "params": {
            "query": f"deck:{deck_name} 'SentenceTranslation: '"
        }
    })
    card_ids = response.json().get('result', [])

    if not card_ids:
        print("SentenceTranslationが空のカードが見つかりませんでした。")
        return

    # ノートを取得してフィールドを更新
    for card_id in card_ids:
        # カードに関連するノートを取得
        note_response = requests.post('http://localhost:8765', json={
            "action": "getNote", 
            "version": 6, 
            "params": {"note": card_id}
        }).json()

        note_id = note_response['result']['noteId']
        fields = note_response['result']['fields']

        # kikuは文を使用します
        sentence_text = fields['Sentence']['value']
        # AIを使用して翻訳
        translation = find_line_and_previous(sentence_text)

        # SentenceTranslationフィールドを更新
        update_response = requests.post('http://localhost:8765', json={
            "action": "updateNoteFields",
            "version": 6,
            "params": {
                "note": {
                    "id": note_id,
                    "fields": {
                        "SentenceTranslation": translation
                    }
                }
            }
        })

        if update_response.json().get("error"):
            print(f"カード{card_id}の更新に失敗しました")


def translate(line: str, conext: list):
    # 文と文字列を使用して翻訳


def find_line_and_previous(q: str, lines_before: int = 10):
    API_BASE = "https://your.api.host"
    SEARCH_ENDPOINT = f"{API_BASE}/api/search-sentences"

    # ステップ1: 欲しい行を検索
    resp = requests.get(SEARCH_ENDPOINT, params={
        "q": q,
        "page_size": 1,
        "sort": "relevance"
    })
    # これによりエラーが発生します、これを呼び出す関数でキャッチする必要があります
    resp.raise_for_status()
    data = resp.json()

    if not data["results"]:
        print("一致する行が見つかりませんでした。") # todo gsm loggerに置き換え？ またはノイズが多すぎる？
        return None

    # 一致する行
    match = data["results"][0]
    target_timestamp = match["timestamp"]
    game_name = match["game_name"]
    if match["translation"]:
        return translation # todo 修正

    # 文の前の10行を取得
    # 日付範囲で検索、一致タイムスタンプより前のもの
    resp2 = requests.get(SEARCH_ENDPOINT, params={
        "q": "",                     # すべての行を取得
        "to_date": datetime.utcfromtimestamp(target_timestamp).strftime("%Y-%m-%d"), # 行からのタイムスタンプ
        "sort": "date_desc",        # 新しいものから
        "page_size": lines_before + 50, 
    })
    resp2.raise_for_status()
    all_before = resp2.json()["results"]

    # タイムスタンプでフィルタリングしてリストに入れる
    before_filtered = [
        r for r in all_before 
        if r["timestamp"] < target_timestamp
    ]

    # 古い行から新しい行へ
    before_filtered = sorted(before_filtered, key=lambda x: x["timestamp"])

    return before_filtered[-lines_before:]  # 最後のN行のみ


def run_daily_update_friendos(message):
    # 毎日午後8時にwebhookを使用してdiscordにメッセージを送信
    # 私の友達が私と祝うための私のデイリー統計
    # TODO: これができる友達を作る.... :(
    # discord botがこのデータを保存してリーダーボードを作ることもできるかも
    from datetime import datetime, time
    import os
    now = datetime.now()
    LAST_RUN_FILE = "last_run.txt"
    API_URL = "http://localhost:5050/api/daily-activity"
       # 午後8時以降のみ実行
    if now.time() < time(20, 0):
        return

    # 最終実行日を確認
    if os.path.exists(LAST_RUN_FILE):
        try:
            with open(LAST_RUN_FILE, "r") as f:
                last_run_str = f.read().strip()
                if last_run_str:
                    last_run = datetime.fromisoformat(last_run_str)
                    if now.date() == last_run.date():
                        return  # 今日は既に実行済み
        except ValueError:
            pass  # 無効なタイムスタンプ、実行を続行

    try:
        # APIからデータを取得
        response = requests.get(API_URL)
        response.raise_for_status()
        data = response.json()

        # webhookに送信
        requests.post(
        WEBHOOK_URL,
        json={ "content": message }
        )

        # 最終実行タイムスタンプを更新
        with open(LAST_RUN_FILE, "w") as f:
            f.write(now.isoformat())

    except Exception as e:
        print("エラー:", e)
"""
```