---
id: dxPolarChartCommonAxisSettings.discreteAxisDivisionMode
acceptValues: 'betweenLabels' | 'crossLabels'
type: String
default: 'betweenLabels'
---
---
##### shortDescription
Specifies whether ticks/grid lines of a discrete axis are located between labels or cross the labels.

---
When a discrete axis is divided, its ticks/grid lines are located between labels by default. If this is not appropriate, use the **discreteAxisDivisionMode** property to set the required mode for positioning ticks and grid lines on a discrete axis.

[note]This option is not designed to work in the [spider web](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/useSpiderWeb.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb') mode.

#include common-ref-enum with {
    enum: "`DiscreteAxisDivisionMode`",
    values: "`BetweenLabels` and `CrossLabels`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/WindRose/"
}