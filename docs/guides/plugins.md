---
title: GSM Plugin System
sidebar_label: Plugins
sidebar_position: 3
---

import Admonition from '@theme/Admonition';

# User Plugins System

The User Plugins system allows you to customise GameSentenceMiner's behavior by writing Python code that runs automatically every 15 minutes.

**WARNING** Advanced Users only. Your data is at risk.

GSM has an internal API you can use, with docs located at [http://localhost:55000/api/docs#](http://localhost:55000/api/docs#) once GSM is running.
This presumes your GSM texthooker page runs on port 55000.
The API is made primarily for internal use, so it's a bit scuffed but most things do work well.

## Quick Start

## 1. Edit Your Plugins File

Open the `plugins.py` file at: `%APPDATA%\GameSentenceMiner\plugins.py` (Windows)

Or right clck the GSM icon in the tray, click open folder and find plugins.py

While you are in this folder, **copy gsm.db** to another folder to back it up before messing with this.

Write functions called by `main()` to make GSM do stuff.

```python
def main():
    hello_world()

def hello_world():
    print("Hello, World!")
```

### 2. Save and Done!

The plugins will run automatically every 15 minutes. No restart needed.

## Example Plugin Functions

Copy these ready to use examples into your `plugins.py` file:

### 1. Delete Duplicates from Games

**IMPORTANT**: Read the code example. I added a lot of comments to this one specifically to help you understand how this works.

**IMPORtANT**: You must read the API docs before running any examples. This is really dangerous.

Removes duplicate sentences from selected games:

```python
def delete_duplicates_from_games(games=None, case_sensitive=False, preserve_newest=False):
    """
    Delete duplicate sentences from games using GSM API.
    
    Args:
        games: List of game names to check, or ["all"] for all games (default: ["all"])
        case_sensitive: Whether to compare text case-sensitively (default: False)
        preserve_newest: Whether to keep the newest duplicate instead of oldest (default: False)
    """
    # GSM comes with requests built in, see pyproject.toml in github for other libraries u can use for free
    # alternatively in python tab install a package u want, but it may get overwritten in the future
    import requests
    # gsm uses this for logging
    from GameSentenceMiner.util.configuration import logger
    
    try:
        if not games:
            # be very careful with this
            # this will delete all duplicates globally
            # if you do not set a time window and have games == all, very bad things will happen
            # for example, it will delete "arigatou" from EVERY game ever
            # If you want to use "all", set a time window.
            # If you do not want a time window, set a specific game.
            games = [all]
            # I believe games needs to be GameID from games_table
            # there is an API to get this

        # Prepare API request
        payload = {
            "games": games,
            "case_sensitive": case_sensitive,
            "preserve_newest": preserve_newest,
            "time_window_minutes": 1,
            # you probably want a time window
            # for example if someone says arigatou and then 50 mins later they say this it will be deleted if no time window is set
            # time window says "if its a duplicate within 5 mins, delete"
            # for example, texthooker spam or something
            # BTW from my tests 1 minute is fine, but you decide :)
            "ignore_time_window": True  # Find all duplicates in entire game
        }

        # Call the deduplication API preview
        resp = requests.post(
            # IMPORTANT you should use /api/preview-deduplication first to preview
            "http://localhost:55000/api/preview-deduplication",
            # A lot of APIs have previews, if it doesn't have a preview use the search functionality to test (like /search, theres an api for it :) )
            json=payload,
            timeout=300
        )

        # if unhappy fail
        if resp.status_code != 200:
            return

        resp_json = resp.json()
        resp
        affected_games = resp_json["duplicates_count"]
        count = resp_json["duplicates_count"]
        if count <= 0:
            return 

        # if too many, fail. this is a failsafe.
        # if u have never ran this before, expect lots of duplicates
        if count > 100:
            logger.error("Deduplication tried to delete over 100 items... weirdge?")
            return
        
        logger.info(f"[Plugin] Will Deleted {count} duplicate sentences")
        logger.info(f"[Plugin] Will Deleted {affected_games} from games")
        
        # Call the deduplication API
        response = requests.post(
            # IMPORTANT you should use /api/preview-deduplication first to preview
            "http://localhost:5000/api/deduplicate",
            # A lot of APIs have previews, if it doesn't have a preview use the search functionality to test
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            # this will appear in gsm console as you use logger
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] Deleted {deleted_count} duplicate sentences")
            else:
                logger.info("[Plugin] No duplicates found")
        else:
            logger.error(f"[Plugin] API error: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] Failed to connect to GSM API: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] Error in delete_duplicates_from_games: {e}", exc_info=True)


def main():
    # Call it like this:
    delete_duplicates_from_games(games=["all"])
    # click save
    # in next 15 mins it will be called, check console
```

### 2. Delete Lines Matching Regex

Deletes entire lines that match a pattern:

```python
 # my regex pattern in this function deletes all lines over 100 chars
def delete_lines_matching_regex(pattern=r".{100,}", case_sensitive=False):
    """
    Delete all lines that match a regex pattern using GSM API.
    
    Args:
        pattern: Regex pattern to match
        case_sensitive: Whether pattern matching is case-sensitive (default: False)
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    try:
        # Prepare API request
        payload = {
            # ur regex goes here
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive,
            "use_regex": True
        }

        # Call the delete text lines API
        resp = requests.post(
             # pls use gsm search in stats to test ur regex before u run it
             # this has potential to delete all ur data if ur not 100% sure :) 
            "http://localhost:55000/api/preview-delete-text-lines",
            json=payload,
            timeout=300
        )

        if resp.status_code != 200:
            return

        resp_json = resp.json()
        count = resp_json["count"]

        if count > 100:
            logger.error("Regex deletion tried to delete over 100 items... weirdge?")
            return
        
        logger.info(f"[Plugin] Will Deleted {count} duplicate sentences")

        # Call the delete text lines API
        response = requests.post(
            "http://localhost:55000/api/delete-text-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] Deleted {deleted_count} lines matching pattern: {pattern}")
                send_notification(f"[Plugin] Deleted {deleted_count} lines matching pattern: {pattern}")
            else:
                logger.info(f"[Plugin] No lines matched pattern: {pattern}")
        else:
            logger.error(f"[Plugin] API error: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] Failed to connect to GSM API: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] Error in delete_lines_matching_regex: {e}", exc_info=True)
```

Use https://regex101.com/ to build your regex.

Or go to search here http://localhost:55000/search

And select one of our prebuilt regex, and copy that to use.

Test your regex by going here:
http://localhost:55000/search
Enabling "use regex" in advanced options.

Every single line you see in search will be deleted.

### 3. Cleanup Regex from Lines

Removes patterns from within lines (doesn't delete the line):

```python
def cleanup_regex_from_lines(pattern=r"【.*?】", case_sensitive=False):
    """
    Remove regex pattern from within lines using GSM API (doesn't delete the line, just cleans it).
    
    Args:
        pattern: Regex pattern to remove from lines
        case_sensitive: Whether pattern matching is case-sensitive (default: False)
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    # again, please use previews and search to 100% make sure it is doing what you want it to do
    try:
        # Prepare API request
        payload = {
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive
        }
        
        # Call the regex cleanup API
        response = requests.post(
            "http://localhost:5000/api/delete-regex-in-game-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            updated_count = result.get("updated_count", 0)
            if updated_count > 0:
                logger.info(f"[Plugin] Cleaned {updated_count} lines (removed pattern: {pattern})")
            else:
                logger.info(f"[Plugin] No lines needed cleaning for pattern: {pattern}")
        else:
            logger.error(f"[Plugin] API error: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] Failed to connect to GSM API: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] Error in cleanup_regex_from_lines: {e}", exc_info=True)


def main():
    # Call it like this:
    cleanup_regex_from_lines(pattern=r"【.*?】")
```

## Available GSM API Endpoints

Start GSM and go to this URL to see all available API endpoints you can use:

http://localhost:55000/api/docs

Use Requests to call these. Be careful. Your data could be deleted if you do this wrong. Make many backups.

## Tips and Best Practices

**IMPORTANT** Back up your database manually before writing a plugin.
Extensively test your plugin code to make sure it is safe for you.

If your data is deleted and you want it back, and there's no backups, there is no way to get it back.

1. **Start Small**: Enable one plugin at a time to test
2. **Use Logging**: Add `logger.info("[Plugin] ...")` to track execution
3. **Test Patterns**: Test regex patterns before using them
4. **Backup**: The database is at `%APPDATA%\GameSentenceMiner\gsm.db`
5. **Comment Out**: Use `#` to disable plugins instead of deleting code
6. **Error Handling**: Plugins catch errors automatically, check logs
7. **API Timeouts**: Use appropriate timeout values for long operations
8. **Check Responses**: Always check `response.status_code` before processing results

## Troubleshooting

### My plugin isn't running

1. Wait 15 minutes, plugins run every 15 minutes.
2. Check logs in console.

### How do I test without waiting

You can run plugins manually:

```bash
python -c "from GameSentenceMiner.util.cron.user_plugins import execute_user_plugins; execute_user_plugins()"
```

But probably best to wait to see how it works and looks inside GSM Console.

# Ideas
* Use ntfy to ping your phone / computer with a reminder to complete your dailies if not done.
* Once your dailies are done, generate statistics and post them to a Discord channel for accountability.
* Build your own stats dashboard / graphing program
* Integrate your apps (Toggl, Anki, Bunpro, Wanikani) into a unified "this is what I did this week" program
* Export stats to Excel
* Download your data from another service, convert to ExStatic format and automatically import that into GSM

If you make a cool plugin, please share it in #resource-sharing in the Discord!

# Real world example

This is **my** plugin file.

It might have errors, it will have broken code, and I you should not copy and paste it.

But if you want to see what a real application looks like, this is it.

```python
"""
User Plugins - Runs every 15 mins via GSM cron system
Edit this file to customize GSM behavior. See USER_PLUGINS_README.md for full documentation.
https://github.com/YOUR_REPO/blob/main/GameSentenceMiner/util/cron/USER_PLUGINS_README.md
Your code runs automatically every 15 mins when enabled.
"""
import requests
import time
import asyncio
from GameSentenceMiner.util.configuration import logger


def main():
    """
    Main entry point - called every 15 mins by GSM cron system.
    Add your custom code here.
    """

    # cleanup before sending me my dailies
    delete_duplicates_from_games()
    delete_lines_matching_regex()

    try:
        message = dailies()
        send_notification(message)
    except ValueError as e:
        logger.info("Dailies not completed yet.")
    
def dailies():
    import random
    # Import the function directly instead of making HTTP request
    # This is just to show that if someone doesn't have an API you can just call it directly
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
            # only send progress updates of goals if its not completed
            if today < needed:
                completed = False
            icon = g.get("goal_icon", "🎯")
            message.append(f"{icon} {name}: {today}/{needed}")
        output = "\n".join(message)
        
    except Exception as e:
        send_notification(f"Error getting goals: {e}")
    if not completed:
        return output 
    else:
        raise ValueError
    
def send_notification(message):
    # uses https://ntfy.sh/ to send notifications to me phone
    requests.post("https://ntfy.sh/XXXXXXXXXX",data=message.encode(encoding='utf-8'))

def delete_duplicates_from_games(games=None, case_sensitive=False, preserve_newest=False):
    """
    Delete duplicate sentences from games using GSM API.
    
    Args:
        games: List of game names to check, or ["all"] for all games (default: ["all"])
        case_sensitive: Whether to compare text case-sensitively (default: False)
        preserve_newest: Whether to keep the newest duplicate instead of oldest (default: False)
    """
    # GSM comes with requests built in, see pyproject.toml in github for other libraries u can use for free
    # alternatively in python tab install a package u want
    import requests
    # gsm uses this for logging
    from GameSentenceMiner.util.configuration import logger
    
    try:
        if not games:
            games = ["all"]
   
        # Prepare API request
        payload = {
            "games": games,
            "case_sensitive": case_sensitive,
            "preserve_newest": preserve_newest,
            "time_window_minutes": 1,
            "ignore_time_window": False  # Find all duplicates in entire game
        }

        # Call the deduplication API
        resp = requests.post(
            # IMPORTANT you should use /api/preview-deduplication first to preview
            "http://localhost:55000/api/preview-deduplication",
            # A lot of APIs have previews, if it doesn't have a preview use the search functionality to test
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
            send_notification("Deduplication tried to delete over 100 items... weirdge?")
            return
        
        logger.info(f"[Plugin] Will Deleted {count} duplicate sentences")
        logger.info(f"[Plugin] Will Deleted {affected_games} from games")
        
        # Call the deduplication API
        response = requests.post(
            # IMPORTANT you should use /api/preview-deduplication first to preview
            "http://localhost:55000/api/deduplicate",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            # this will appear in gsm console as you use logger
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] Deleted {deleted_count} duplicate sentences")
                send_notification(f"[Plugin] Deleted {deleted_count} duplicate sentences")
            else:
                logger.info("[Plugin] No duplicates found")
        else:
            logger.error(f"[Plugin] API error: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] Failed to connect to GSM API: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] Error in delete_duplicates_from_games: {e}", exc_info=True)

def delete_lines_matching_regex(pattern=r".{100,}", case_sensitive=False):
    """
    Delete all lines that match a regex pattern using GSM API.
    
    Args:
        pattern: Regex pattern to match
        case_sensitive: Whether pattern matching is case-sensitive (default: False)
    """
    import requests
    from GameSentenceMiner.util.configuration import logger
    
    try:
        # Prepare API request
        payload = {
            # ur regex goes here
            "regex_pattern": pattern,
            "case_sensitive": case_sensitive,
            "use_regex": True
        }

        # Call the delete text lines API
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
            send_notification("Regex deletion tried to delete over 100 items... weirdge?")
            return
        
        logger.info(f"[Plugin] Will Deleted {count} duplicate sentences")

        # Call the delete text lines API
        response = requests.post(
            "http://localhost:55000/api/delete-text-lines",
            json=payload,
            timeout=300
        )
        
        if response.status_code == 200:
            result = response.json()
            deleted_count = result.get("deleted_count", 0)
            if deleted_count > 0:
                logger.info(f"[Plugin] Deleted {deleted_count} lines matching pattern: {pattern}")
                send_notification(f"[Plugin] Deleted {deleted_count} lines matching pattern: {pattern}")
            else:
                logger.info(f"[Plugin] No lines matched pattern: {pattern}")
        else:
            logger.error(f"[Plugin] API error: {response.status_code} - {response.text}")
        
    except requests.exceptions.RequestException as e:
        logger.error(f"[Plugin] Failed to connect to GSM API: {e}", exc_info=True)
    except Exception as e:
        logger.error(f"[Plugin] Error in delete_lines_matching_regex: {e}", exc_info=True)


# WARNING: Below code is stuff I was playing with
# Doesn't work and may break
# But should give you some ideas / a base to play with if you want :)
"""
# Update all Anki cards with AI translation is missing
def update_anki_cards_with_ai_translation():
    # for each anki card that does not have SentenceTranslation#
    # Find the sentence in GSM database (we store every sentence)
    # Find 10 previous sentences
    # Find game name
    # Ask AI to translate sentence, giving it 10 previous sentence + game name
    # this gives the AI translator a lot of context, so the translation will be really good
    # Becuase we store all sentences you read locally, this is possible :) <3 

    deck_name = "例文マイニング"
    # find cards with empty sentencetranslation
    response = requests.post('http://localhost:8765', json={
        "action": "findCards",
        "version": 6,
        "params": {
            "query": f"deck:{deck_name} 'SentenceTranslation: '"
        }
    })
    card_ids = response.json().get('result', [])

    if not card_ids:
        print("No cards found with empty SentenceTranslation.")
        return

    # get the notes and update the field
    for card_id in card_ids:
        # Get the note associated with the card
        note_response = requests.post('http://localhost:8765', json={
            "action": "getNote", 
            "version": 6, 
            "params": {"note": card_id}
        }).json()

        note_id = note_response['result']['noteId']
        fields = note_response['result']['fields']

        # kiku uses sentence
        sentence_text = fields['Sentence']['value']
        # use AI to translate
        translation = find_line_and_previous(sentence_text)

        # Uupdate pdate the SentenceTranslation field
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
            print(f"Failed to update card {card_id}")


def translate(line: str, conext: list):
    # using the line and string, translate


def find_line_and_previous(q: str, lines_before: int = 10):
    API_BASE = "https://your.api.host"
    SEARCH_ENDPOINT = f"{API_BASE}/api/search-sentences"

    # Step 1: search for the line we want
    resp = requests.get(SEARCH_ENDPOINT, params={
        "q": q,
        "page_size": 1,
        "sort": "relevance"
    })
    # this raises an error, we need to catch it in whatever func calls this
    resp.raise_for_status()
    data = resp.json()

    if not data["results"]:
        print("No matching line found.") # todo replace with gsm logger? or maybe too noisy?
        return None

    # the matching line
    match = data["results"][0]
    target_timestamp = match["timestamp"]
    game_name = match["game_name"]
    if match["translation"]:
        return translation # todo fix this

    # get 10 lines before our sentence
    # search by date range, anything earlier than match timestamp
    resp2 = requests.get(SEARCH_ENDPOINT, params={
        "q": "",                     # get a;ll lines
        "to_date": datetime.utcfromtimestamp(target_timestamp).strftime("%Y-%m-%d"), # timestamp from our line
        "sort": "date_desc",        # newest first
        "page_size": lines_before + 50, 
    })
    resp2.raise_for_status()
    all_before = resp2.json()["results"]

    # # filter by timestamp and put it into a list
    before_filtered = [
        r for r in all_before 
        if r["timestamp"] < target_timestamp
    ]

    # oldest line to newest line
    before_filtered = sorted(before_filtered, key=lambda x: x["timestamp"])

    return before_filtered[-lines_before:]  # last N lines only


def run_daily_update_friendos(message):
    # everyday at 8pm send a message to discord using a webhook 
    # of my daily stats, for my friends to celebrate with me
    # TODO: Make friends that I can do this with.... :(
    # You could also make a discord bot that stores this data and make leaderboards too I guess
    from datetime import datetime, time
    import os
    now = datetime.now()
    LAST_RUN_FILE = "last_run.txt"
    API_URL = "http://localhost:5050/api/daily-activity"
       # Only run after 8 PM
    if now.time() < time(20, 0):
        return

    # Check last run date
    if os.path.exists(LAST_RUN_FILE):
        try:
            with open(LAST_RUN_FILE, "r") as f:
                last_run_str = f.read().strip()
                if last_run_str:
                    last_run = datetime.fromisoformat(last_run_str)
                    if now.date() == last_run.date():
                        return  # Already ran today
        except ValueError:
            pass  # Invalid timestamp, proceed to run

    try:
        # Fetch data from API
        response = requests.get(API_URL)
        response.raise_for_status()
        data = response.json()

        # Send to webhook
        requests.post(
        WEBHOOK_URL,
        json={ "content": message }
        )

        # Update last run timestamp
        with open(LAST_RUN_FILE, "w") as f:
            f.write(now.isoformat())

    except Exception as e:
        print("Error:", e)
"""
```