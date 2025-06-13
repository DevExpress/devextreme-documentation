[note]

For more information about switching themes, refer to the following help topic: [Switch Between Themes at Runtime](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/60%20Switch%20Between%20Themes%20at%20Runtime '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime'). You can also refer the following GitHub example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-project-template-theme-selector"
}

[/note]

You can switch between themes in the DevExtreme React Template. Review theme switcher logic in `src\theme.js`.

The template uses a main theme for view content and an additional theme ([color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/55%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches')) for the navigation menu. The corresponding .JSON files are shown below.

<table class="dx-table">
    <tr>
        <th>Theme</th>
        <th>Base file</th>
        <th>Additional file</th>
    </tr>
    <tr>
        <td><b>Light</b></td>
        <td><code>src\themes\metadata.base.json</code></td>
        <td><code>src\themes\metadata.additional.json</code></td>
    </tr>
    <tr>
        <td><b>Dark</b></td>
        <td><code>src\themes\metadata.base.dark.json</code></td>
        <td><code>src\themes\metadata.additional.dark.json</code></td>
    </tr>
</table>

The default theme is `fluent.blue.light`. To switch to another theme, open the .JSON files mentioned above and assign a new theme to the `baseTheme` field:

    <!-- tab: metadata.base.json -->
    {
        // ...
        "baseTheme": "material.blue.light",
        // ...
    }

    <!-- tab: metadata.additional.json -->
    {
        // ...
        "baseTheme": "material.blue.light",
        // ...
    }

    <!-- tab: metadata.base.dark.json -->
    {
        // ...
        "baseTheme": "material.blue.dark",
        // ...
    }

    <!-- tab: metadata.additional.dark.json -->
    {
        // ...
        "baseTheme": "material.blue.dark",
        // ...
    }

You can find all theme names in the [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') help topic. Use theme names without the `dx` prefix.

[important] If you use a Generic theme, add the `generic.` prefix. For instance, `generic.dark` instead of `dark`.

After making changes in theme .JSON files, run the following command to rebuild themes:

    npm run build-themes
