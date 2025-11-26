# GitHub Copilot Instructions

These instructions summarize the DevExpress/devextreme-documentation repository so you can make efficient, correct suggestions with minimal exploratory searching. Trust these instructions first; search only if certain information is missing or proves inaccurate.

This repository contains source Markdown files, embedded sample applications, images, and reusable include fragments for the public DevExtreme documentation site: https://js.devexpress.com/Documentation/.

This repository is a content + light tooling project (not a compiled application). Your typical changes will involve:
- Reviewing style consistency and grammar of documentation content. The documentation content is straightforward technical writing targeting a software developer audience.
- Reviewing link/reference consistency and accuracy in documentation content.
- Reviewing style consistency of code samples (JavaScript/HTML/CSS/TypeScript).
- Reviewing technical accuracy of code samples (JavaScript/HTML/CSS/TypeScript).

What you need to do:
- You will review Pull Requests (PRs) submitted by contributors.
- You will leave comments on PRs when you spot issues.
What you will not do:
- YOU WILL NOT SUBMIT PRS YOURSELF.
- YOU WILL NOT WRITE NEW DOCUMENTATION CONTENT YOURSELF.

When reviewing PRs, please follow these guidelines:

When reviewing documentation content:
1. Follow American English spelling and grammar.
2. Use active voice and present tense. Prefer active sentences with clear subject, object, and verb.
3. Use consistent terminology (refer to existing documentation).
4. Do not use contractions and elisions; prefer full/complete wording versions.
5. All the headings should use Title Case. Do not use end punctuation (periods) at the end of headings.
6. Remember to write alt text for images.
7. Use the Oxford comma.
8. Avoid introductory dependent clauses followed by commas (e.g., prefer "The function returns true" over "When called, the function returns true").

When reviewing code samples:
1. Follow the existing code style in the file.
2. Ensure code samples follow best practices for the relevant technology. For example, Vue samples should use the Composition API + TS. React samples should use functional components + hooks + TS.