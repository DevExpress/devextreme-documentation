To apply an SVG theme to a single UI component, assign the theme's name to the UI component's [theme](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/theme.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#theme') property. 

You can also pass the theme's name to the [DevExpress.viz.currentTheme(theme)](/api-reference/50%20Common/utils/viz/currentTheme(theme).md '/Documentation/ApiReference/Common/utils/viz/#currentThemetheme') method to apply the theme to all SVG-based UI components on the page. If the UI components were created before the method call, use the [DevExpress.viz.refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/utils/viz/#refreshTheme') method to refresh the styling settings.

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.viz.currentTheme("material.blue.light");
    DevExpress.viz.refreshTheme();
    // ===== or when using modules =====
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("material.blue.light");
    refreshTheme();

##### Angular

    <!-- tab: app.component.ts -->
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("material.blue.light");
    refreshTheme();

##### Vue

    <!-- tab: App.vue -->
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("material.blue.light");
    refreshTheme();

##### React

    <!-- tab: App.js -->
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("material.blue.light");
    refreshTheme();

---