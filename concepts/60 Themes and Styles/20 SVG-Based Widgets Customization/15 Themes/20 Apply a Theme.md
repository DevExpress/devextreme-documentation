To apply an SVG theme to a single widget, assign the theme's name to the widget's [theme](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/theme.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#theme') option. 

You can also pass the theme's name to the [DevExpress.viz.currentTheme(theme)](/api-reference/50%20Common/utils/viz/currentTheme(theme).md '/Documentation/ApiReference/Common/utils/viz/#currentThemetheme') method to apply the theme to all SVG-based widgets on the page. If the widgets were created before the method call, use the [DevExpress.viz.refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/#refreshTheme') method to refresh the styling settings.

    <!--JavaScript-->
    DevExpress.viz.currentTheme("material.blue.light");
    DevExpress.viz.refreshTheme();
    // ===== or when using modules =====
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("material.blue.light");
    refreshTheme();