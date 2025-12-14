> **Task: Sync English Documentation Changes**
>
> Your goal is to identify all recent changes to the English markdown documentation and apply those same changes to all translated languages to ensure they are synchronized.
>
> **1. Identify Scope of Changes:**
> - Tell me the starting point for the changes. This must be a specific Git commit hash, tag, or branch name (e.g., `a8b1c2d`, `v1.2.0`, `main`). I will check for all changes between that point and the current `HEAD`.
>
> **2. Identify Target Languages:**
> - I will list the subdirectories in the `i18n/` folder (e.g., `ja`, `fr`) to determine which languages need to be updated.
>
> **3. Analyze Changed Files:**
> - I will run `git diff --name-status <start_commit>..HEAD -- docs/` to get a list of all markdown files that have been `Added`, `Modified`, or `Deleted`.
>
> **4. Process Changes for Each Language:**
> - For each changed English file, I will perform the following actions for **every target language**:
>     - **If the English file was `Modified`:**
>         a. I will analyze the specific diffs for the English file using `git diff <start_commit>..HEAD -- path/to/file.md`.
>         b. I will open the corresponding translated file (e.g., `i18n/ja/.../file.md`).
>         c. I will semantically apply the changes to the translated file. This means if a paragraph was added, I will translate and add the new paragraph. If a command in a code block was changed, I will update it. This requires careful, context-aware modifications, not just copy-pasting.
>     - **If the English file was `Added`:**
>         a. I will perform a full translation of the new English document.
>         b. I will save the translation to the correct path within each language's `i18n` directory, ensuring all asset paths and heading IDs are correctly set for the new file.
>     - **If the English file was `Deleted`:**
>         a. I will ask you for confirmation. Do you want me to delete the corresponding translated files in each language directory?
>
> **5. Final Verification:**
> - After applying all changes across all languages, I will run the command `pnpm run build`.
> - I will check the output for any new errors or warnings to ensure that the synchronization process has not introduced any issues. I will report the results back to you.
