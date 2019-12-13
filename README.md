# DevExtreme Documentation

This is a working repo with the source content for DevExtreme documentation at [js.devexpress.com](https://js.devexpress.com/Documentation/).

## Content

The content is mainly Markdown files with images and occasional JavaScript, HTML, and CSS files. It is structured as follows:

- `api-reference` - Descriptions of DevExtreme API members.
- `applications` - Working applications embedded straight into articles.
- `concepts` - Articles that cover DevExtreme usage in detail.
- `images` - Images used in the docs.
- `includes` - Reusable pieces of text.

We recommend that you use [our site](https://js.devexpress.com/Documentation/) to peruse and search the docs.

## GitHub-Friendly Links

Each link in the documentation is stored in two formats: a URL for navigation within the website and a link for navigation between .md files on GitHub. Use URL links when you edit articles. Pre-commit npm scripts generate GitHub-friendly links.

Install npm packages to activate the scripts:

    npm install

After the installation, you can run the following scripts:

- `npm run update-links` - Adds or updates GitHub-friendly links in the staged articles.
- `npm run update-all-links` - Adds or updates GitHub-friendly links in all articles in the repo.
- `npm run update-links-fail-on-change` - Adds or updates GitHub-friendly links in the staged articles and fails if the articles are changed. **This script is run automatically before the commit.**

## Contribution

There are two ways you can contribute to the docs:

- **Create an issue**       
If you spot an error in the docs, you can [create an issue](https://github.com/DevExpress/devextreme-docs/issues/new) in the repo. Include a link to the flawed document and as many details about the error as possible. Make sure that the title reflects the error.
- **Submit a pull request**     
If you spot an error, and you would like to solve it, fork the repo and submit a pull request. You can find the details in the [Fork a repo](https://help.github.com/articles/fork-a-repo/) and [About pull requests](https://help.github.com/articles/about-pull-requests/) guides.

> Create only one issue or pull request per error or fix. Entries that do not meet this requirement are usually closed.
