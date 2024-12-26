Theme metadata is a JSON object that describes the theme. It is used to export or import a theme in the [ThemeBuilder UI](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/'). Below is an example of theme metadata.

    {
        "items": [
            {
                "key": "$base-text-color",
                "value": "rgba(94, 33, 33, 0.87)"
            },
            {
                "key": "$base-accent",
                "value": "rgba(64, 156, 199, 1)"
            }
        ],
        "baseTheme": "material.blue.light.compact",
        "outputColorScheme": "custom-scheme",
        "makeSwatch": true,
        "version": "minor_25_1",
        "widgets": ["datagrid","treelist","selectbox"],
        "assetsBasePath": "../../../node_modules/devextreme/dist/css/"
    }

The metadata object contains the following properties:

- `items`       
An array that describes customized theme variables.
    - `key`     
    A theme variable's name.
    - `value`       
    The theme variable's value.

- `baseTheme`       
A [predefined DevExtreme theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') which the custom theme is based on.

- `outputColorScheme`       
The custom theme's color scheme.

- `makeSwatch`      
A flag that indicates whether the theme is a [color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/55%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches').

- `version`     
The target DevExtreme version.

* `widgets`       
A list of UI components whose styles are included in the resulting CSS file.

- `assetsBasePath`            
A path to the folder that contains the DevExtreme `icons` and `fonts` folders. This property is used only if the icons and fonts are not in the same folder as your custom theme.

Run the following command to export the metadata as a `.json` file:

    devextreme export-theme-meta [--base-theme][--input-file][--output-file][--base][--help]
    // ===== or =====
    npx devextreme-cli export-theme-meta [--base-theme][--input-file][--output-file][--base]
