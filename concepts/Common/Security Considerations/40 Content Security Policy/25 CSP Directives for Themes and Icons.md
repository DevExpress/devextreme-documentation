Material and Fluent (all trademarks or registered trademarks are property of their respective owners) [themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') do not support the `default-src 'self'` directive out of the box. To enable this directive, export such themes from [DevExtreme ThemeBuilder](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/') and [remove links to external fonts](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/40%20Export%20the%20Resulting%20Theme.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Export_the_Resulting_Theme').

You can also use [ThemeBuilder CLI](/concepts/Common/DevExtreme%20CLI/50%20ThemeBuilder/00%20ThemeBuilder.md '/Documentation/Guide/Common/DevExtreme_CLI/#ThemeBuilder') to export the theme:

    // Fluent theme
    npx devextreme-cli build-theme --base-theme="fluent.blue.light" --remove-external-resources

    // Material theme
    npx devextreme-cli build-theme --base-theme="material.blue.light" --remove-external-resources

[note] The `img-src data:` attribute is required to display custom SVG-based icons in certain components.