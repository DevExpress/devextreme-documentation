---
id: dxPolarChart.Options.valueAxis.visualRange
type: Object | Array<Number, String, Date>
firedEvents: optionChanged
notUsedInTheme: 
inherits: VisualRange
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/wholeRange/').

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[valueType](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/#valueType')"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/minVisualRangeLength '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/minVisualRangeLength/') property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PolarChartZoomingAndScrollingAPI"
}

#####See Also#####
- [visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/visualRangeUpdateMode '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/visualRangeUpdateMode/')
- [onZoomStart](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onZoomEnd')