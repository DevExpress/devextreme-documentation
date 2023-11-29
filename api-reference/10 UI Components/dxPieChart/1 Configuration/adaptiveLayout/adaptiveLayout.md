---
id: dxPieChart.Options.adaptiveLayout
type: viz/pie_chart:AdaptiveLayout
inheritsType: viz/pie_chart:AdaptiveLayout
---
---
##### shortDescription
Specifies adaptive layout properties.

---
The adaptive layout enables the UI component to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/title.md '{basewidgetpath}/Configuration/title')
2. [Export menu icon](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
3. [Legend](/api-reference/10%20UI%20Components/dxPieChart/9%20Types/Legend '{basewidgetpath}/Configuration/legend')
4. [Point labels](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/10%20UI%20Components/dxPieChart/9%20Types/AdaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout#keepLabels') property to **true**)

Use the **height** and **width** properties in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/ZEwMXXV"
}

#####See Also#####
- [Adaptive Layout](/concepts/05%20UI%20Components/PieChart/89%20Adaptive%20Layout.md '/Documentation/Guide/UI_Components/PieChart/Adaptive_Layout/')