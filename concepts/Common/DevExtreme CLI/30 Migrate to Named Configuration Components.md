DevExtreme Angular v24.2 introduced named configuration components. They are strictly typed and specific to their parent UI component. Strict typing allows code completion and hinting systems to suggest only valid configurations and detect invalid usage.

The following code snippet demonstrates named and generic configuration components:

    <!-- tab: app.component.html -->
    <!-- Named configuration component -->
    <dx-form>
        <dxi-form-item></dxi-form-item>
    </dx-form>

    <!-- Generic configuration component -->
    <dx-form>
        <dxi-form-item></dxi-form-item>
    </dx-form>

[note]

- We recommend upgrading to named configuration components to improve your development experience.
- DevExtreme v25.2+ displays warnings in the console if you use generic configuration components.

[/note]

To upgrade your Angular application to named configuration components, use the following DevExtreme CLI command: `devextreme migrate`. Note that this command requires our DevExtreme Schematics package. DevExtreme CLI installs this package in the NPM cache when you run `migrate`. You can also install the package to your project or global `node_modules`:

    // Project install
    npm i devextreme-schematics --save-dev

    // Global install
    npm i -g devextreme-schematics

To upgrade your application to named configuration components, run the command in your project root:

    // If DevExtreme CLI is installed (in your project or global node_modules)
    devextreme migrate angular-config-components

    // If DevExtreme CLI is not installed
    npx devextreme-cli migrate angular-config-components

<img src="/images/DevExtremeCLI/devextreme-cli-migrate-terminal.png" alt="A terminal window that displays the output of two commands, including a DevExtreme CLI command."></img>

You can add the `--dry` argument to preview changes before upgrading:

    // If DevExtreme CLI is installed (in your project or global node_modules)
    devextreme migrate angular-config-components --dry
    
    // If DevExtreme CLI is not installed
    npx devextreme-cli migrate angular-config-components --dry

This command can upgrade generic configuration components in both external templates (.html files) and inline templates (defined within `@Component({})` class decorators). Inline template migration requires the TypeScript package. You can install this package to your project folder or the global `node_modules`:

    // Project install
    npm i typescript --save-dev

    // Global install
    npm i -g typescript

DevExtreme CLI can also install TypeScript temporarily (to the NPM cache).

If your application does not use inline templates, you can instruct the command to skip script files to speed up migration. Specify an empty `--script-include` value ('' or []):

    npm devextreme migrate angular-config-components --script-include=''
    // ===== or =====
    npx devextreme-cli migrate angular-config-components --script-include=''

[tags] angular