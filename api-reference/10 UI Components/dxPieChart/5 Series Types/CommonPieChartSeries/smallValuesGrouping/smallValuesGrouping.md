---
id: dxPieChartSeriesTypes.CommonPieChartSeries.smallValuesGrouping
type: Object
---
---
##### shortDescription
Specifies chart segment grouping properties.

---
If you need to group specific chart segments into one, use the properties of the **smallValuesGrouping** configuration object.

You can group segments in two different modes. Use a *'topN'* mode to group all segments that have an index that is equal to or greater than the value of the **topCount** property. To group all segments with the value less than the value of the **threshold** property, use a *'smallValueThreshold'* mode.

By default, the resulting segment is called *"others"*. To change this name, specify the **groupName** property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithSmallValuesGrouped/"
}