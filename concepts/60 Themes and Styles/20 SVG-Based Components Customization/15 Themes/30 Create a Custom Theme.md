You can define several custom SVG themes and switch between them. The following code declares a custom theme called `myTheme`:

    <!--JavaScript-->
    var customTheme = {
        name: 'myTheme',
        barGauge: { /* BarGauge configuration */ },
        bullet: { /* Bullet configuration */ },
        chart: { /* Chart configuration */ },
        funnel: { /* Funnel configuration */ },
        gauge: { /* CircularGauge and LinearGauge configuration */ },
        map: { /* VectorMap configuration */ },
        pie: { /* PieChart configuration */ },
        polar: { /* PolarChart configuration */ },
        rangeSelector: { /* RangeSelector configuration */ },
        sankey: { /* Sankey configuration */ },
        sparkline: { /* Sparkline configuration */ },
        treeMap: { /* TreeMap configuration */ }
    };

[note]

- Particular properties cannot be used in themes. Such properties have a corresponding note in their description, for example, [dataSource](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource').

- If you declare **commonSeriesSettings** properties, specify the name of the series. For instance, PieChart settings should be configured inside the `pie` object:

        <!--JavaScript-->
        var customTheme = {
            name: 'myTheme',
            pie: { 
                // ...
                commonSeriesSettings: {
                    pie: {
                        // ...
                    }
                }
            }
        };

[/note]

You should use the [DevExpress.viz.registerTheme(customTheme, baseTheme)](/api-reference/50%20Common/utils/viz/registerTheme(customTheme_baseTheme).md '/Documentation/ApiReference/Common/utils/viz/#registerThemecustomTheme_baseTheme') method to register the custom theme. Pass the name of a [predefined theme](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/theme.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#theme') as the `baseTheme` argument. This theme complements the custom theme if specific properties are absent in the latter. In the following code, Generic Light is used as the base theme:

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.viz.registerTheme(customTheme, "generic.light");
    // ===== or when using modules =====
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

##### Angular

    <!-- tab: app.component.ts -->
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

##### Vue

    <!-- tab: App.vue -->
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

##### React

    <!-- tab: App.js -->
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

---

Next, use the theme's name (`myTheme`) to [apply the theme](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/15%20Themes/20%20Apply%20a%20Theme.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Themes/Apply_a_Theme').