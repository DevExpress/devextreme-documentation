---
id: dxChartSeriesTypesCommonSeries.barOverlapGroup
type: String
default: undefined
---
---
##### shortDescription
Allows you to group bar series so that bars with the same argument overlap.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.RangeBarSeries

---
Set this option to identical values for the series you want to collect in a single group.

The following image shows a regular bar chart with two series...

![DevExtreme Chart: Regular bar chart](/images/ChartJS/barOverlapGroup-notapplied.png)

...and here the same series are collected in a **barOverlapGroup**:

![DevExtreme Chart: Bar chart with barOverlapGroup applied](/images/ChartJS/barOverlapGroup-applied.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Timeline/"
}