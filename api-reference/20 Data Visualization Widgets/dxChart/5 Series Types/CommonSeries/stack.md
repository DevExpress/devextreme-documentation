---
id: dxChartSeriesTypesCommonSeries.stack
type: String
default: 'default'
---
---
##### shortDescription
Specifies which stack the series should belongs to. Applies only to *stacked bar* and *full-stacked bar* series.

##### propertyOf
dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries

---
By default, all series are placed in the same stack. In case you need to distribute them between several side-by-side stacks, specify the **stack** series property. Series with the same **stack** value will be collected in a single stack. The number of stacks is unlimited.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SideBySideFullStackedBar/"
}