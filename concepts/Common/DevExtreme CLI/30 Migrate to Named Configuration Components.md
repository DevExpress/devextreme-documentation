DevExtreme Angular v24.2 introduced named configuration components. These are strictly typed and specific to each UI component. Strict typing allows code completion and hinting systems to suggest only valid configurations and detect invalid usage.

The following code snippet demonstrates named and generic configuration components:

    <!-- tab: app.component.html -->
    <!-- Named configuration component -->
    <dx-form>
        <dxi-form-item></dxi-form-item>
    </dx-form>

    <!-- Generic configuration component -->
    <dx-form>
        <dxi-item></dxi-item>
    </dx-form>

[note]

- We recommend upgrading to named configuration components to improve your development experience.
- Starting with v25.2, a warning is displayed in the console if you use generic configuration components.

[/note]

To upgrade your Angular application to named configuration components, you can use DevExtreme CLI. The `migrate` command uses our DevExtreme Schematics package to perform the upgrade. DevExtreme CLI installs this package in the NPM cache when you run `migrate`. You can also install the package manually in your project or global `node_modules`:

    // Project install
    npm i devextreme-schematics --save-dev

    // Global install
    npm i -g devextreme-schematics

To perform the migration to named configuration components, run `devextreme migrate angular-config-components` in your project root:

    // If DevExtreme CLI is installed (in your project or global node_modules)
    devextreme migrate angular-config-components

    // If DevExtreme CLI is not installed
    npx devextreme-cli migrate angular-config-components

You can add the `--dry` argument to preview changes before upgrading:

    // If DevExtreme CLI is installed (in your project or global node_modules)
    devextreme migrate angular-config-components --dry
    
    // If DevExtreme CLI is not installed
    npx devextreme-cli migrate angular-config-components --dry

This command can upgrade generic configuration components in both external templates (.html files) and inline templates (defined within `@Component({})` class decorators). To perform inline template migration, DevExtreme CLI requires the TypeScript package. You can install this package in your project folder or in the global `node_modules`:

    // Project install
    npm i typescript --save-dev

    // Global install
    npm i -g typescript

DevExtreme CLI can also install TypeScript temporarily to perform inline template migration. This saves the package in the NPM cache.

If your application does not use inline templates, you can specify an empty `--script-include` value ('' or []) to skip inline template migration:

    npm devextreme migrate angular-config-components --script-include=''
    // ===== or =====
    npx devextreme-cli migrate angular-config-components --script-include=''

[tags] angular