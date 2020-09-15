The DevExtreme React Template uses a main theme for the view content and an additional theme ([color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/70%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches')) for the navigation menu. To switch to another theme, open the `src\themes\metadata.base.json` or `src\themes\metadata.additional.json` file and assign a theme name to the `baseTheme` field:

    <!-- tab: metadata.base.json -->
    {
        // ...
        "baseTheme": "material.blue.light",
        // ...
    }

You can find all theme names in the [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') help topic.

Run the following command to rebuild themes:

    npm run build-themes