> **Task: Add a New Language to the Docusaurus Site**
>
> Your goal is to add full translation support for a new language to this Docusaurus project.
>
> **1. Identify the Language:**
> Tell me the new language and its ISO 639-1 code (e.g., "French", `fr`).
>
> **2. Update Docusaurus Configuration:**
> - Read the `docusaurus.config.ts` file.
> - Locate the `i18n` configuration object.
> - Add the new language code to the `locales` array.
>
> **3. Scaffold Translation Files:**
> - Run the command `pnpm run write-translations -- --locale <new_locale_code>`.
> - This will generate the necessary JSON files for UI elements (navbar, footer, etc.) inside the `i18n/<new_locale_code>/` directory.
>
> **4. Translate UI JSON Files:**
> - List all the newly created `.json` files in the `i18n/<new_locale_code>/` directory.
> - For each JSON file, read its content.
> - Translate the `"message"` or value strings from English to the new language, keeping the keys and structure intact.
> - Write the translated content back to the respective JSON files.
>
> **5. Translate All Markdown Documents:**
> - Systematically go through every `.md` and `.mdx` file in the `docs/` directory and its subdirectories.
> - For each English document:
>     a. Read the content.
>     b. Translate the entire content (including frontmatter like `title` and `sidebar_label`) into the new language.
>     c. Create the corresponding subdirectory structure inside `i18n/<new_locale_code>/docusaurus-plugin-content-docs/current/`.
>     d. Save the translated markdown file to its corresponding new path.
>
> **6. Correct Asset Paths and Heading IDs:**
> - As you translate each markdown file, meticulously correct all relative image and asset paths. The paths must be relative from the new file's location in the `i18n` folder to the original asset's location in the `docs/assets` folder (e.g., `/img/image.png`).
> - For document navigation, add explicit heading IDs to all major section headers in the translated markdown files (e.g., `## 新しいセクション {#new-section}`). This is crucial for non-Latin character sets to prevent broken anchor links.
>
> **7. Final Verification:**
> - Once all files are translated and saved, run the command `pnpm run build` to build the entire site for all languages.
> - Carefully inspect the build output for any errors or warnings related to the new language, such as unresolved links, broken asset paths, or malformed content.
> - If errors are found, fix them and re-run the build until it succeeds for all languages.
