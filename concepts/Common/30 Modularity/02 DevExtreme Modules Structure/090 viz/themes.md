Exposes methods that control [themes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/00%20Themes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes').

Exports:

- *currentTheme* - The [currentTheme(theme)](/api-reference/50%20Common/utils/viz/currentTheme(theme).md '/Documentation/ApiReference/Common/utils/viz/#currentThemetheme') and [currentTheme(platform, colorScheme)](/api-reference/50%20Common/utils/viz/currentTheme(platform_colorScheme).md '/Documentation/ApiReference/Common/utils/viz/#currentThemeplatform_colorScheme') methods

        require("viz/themes").currentTheme;
        // ===== or =====
        import { currentTheme } from "devextreme/viz/themes";

- *refreshTheme* - The [refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/#refreshTheme') method

        require("viz/themes").refreshTheme;
        // ===== or =====
        import { refreshTheme } from "devextreme/viz/themes";

- *registerTheme* - The [registerTheme(customTheme, baseTheme)](/api-reference/50%20Common/utils/viz/registerTheme(customTheme_baseTheme).md '/Documentation/ApiReference/Common/utils/viz/#registerThemecustomTheme_baseTheme') method

        require("viz/themes").registerTheme;
        // ===== or =====
        import { registerTheme } from "devextreme/viz/themes";