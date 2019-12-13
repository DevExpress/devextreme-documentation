---
id: dxPolarChart.Options.valueAxis.visualRange
type: Object | Array<Number, String, Date>
inherits: VizRange
firedEvents: optionChanged
notUsedInTheme: 
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/wholeRange/').

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType')"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/minVisualRangeLength '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/minVisualRangeLength/') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PolarChartZoomingAndScrollingAPI"
}

#####See Also#####
- [visualRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/wholeRange/#visualRangeUpdateMode)
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onZoomEnd')