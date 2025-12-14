> **Task: Sync English Documentation Changes**
>
> Your goal is to identify all recent changes to the English markdown documentation and apply those same changes to all translated languages to ensure they are synchronized.
>
>
> **1. Identify Target Languages:**
> - I will list the subdirectories in the `i18n/` folder (e.g., `ja`, `fr`) to determine which languages need to be updated.
>
> **2. Analyze Changed Files:**
> - I will run `git status --porcelain` to get a list of all markdown files that have been `Added`, `Modified`, or `Deleted`.
> - For modified files, I will compare against the `main` branch using `git diff main -- path/to/file.md`.
>
> **3. Process Changes for Each Language:**
> - For each changed English file, I will perform the following actions for **every target language**:
>     - **If the English file was `Modified`:**
>         a. I will analyze the specific diffs for the English file using `git diff main -- path/to/file.md`.
>         b. I will open the corresponding translated file (e.g., `i18n/ja/.../file.md`).
>         c. I will semantically apply the changes to the translated file. This means if a paragraph was added, I will translate and add the new paragraph. If a command in a code block was changed, I will update it. This requires careful, context-aware modifications, not just copy-pasting.
>     - **If the English file was `Added`:**
>         a. I will perform a full translation of the new English document.
>         b. I will save the translation to the correct path within each language's `i18n` directory, ensuring all asset paths and heading IDs are correctly set for the new file.
>     - **If the English file was `Deleted`:**
>         a. I will ask you for confirmation. Do you want me to delete the corresponding translated files in each language directory?
>

