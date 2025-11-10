DevExtreme Angular v24.2 introduced named configuration components. These are strictly typed and specific to each UI component. Strict typing allows code completion and hinting systems to suggest only valid configurations and detect invalid usage. We recommend upgrading to named configuration components to improve your development experience.

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

[note] Starting with v25.2, a warning is displayed in the console if you use generic configuration components.

To upgrade your Angular application from older generic configuration components, you can use DevExtreme CLI. The `migrate angular-config-components` command uses our `devextreme-schematics` package to perform the upgrade. Run the command in your project root:

    npm devextreme migrate angular-config-components
    // ===== or =====
    npx devextreme-cli migrate angular-config-components

You can add the `--dry` argument to preview changes before upgrading:

    npm devextreme migrate angular-config-components --dry
    // ===== or =====
    npx devextreme-cli migrate angular-config-components --dry

This command can upgrade generic configuration components in both external and inline templates. To perform inline template migration, DevExtreme CLI requires the TypeScript package. You can install this package in your project folder or in the global `node_modules`:

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