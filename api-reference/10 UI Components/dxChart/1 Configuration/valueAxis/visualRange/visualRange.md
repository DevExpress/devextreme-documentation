---
id: dxChart.Options.valueAxis.visualRange
type: Object | Array<Number, String, Date>
inherits: VizRange
firedEvents: optionChanged
notUsedInTheme: 
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/wholeRange/').

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[valueType](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType')"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/minVisualRangeLength '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minVisualRangeLength/') property.

The specified visual range is adjusted automatically when the argument axis is zoomed and panned. Set [adjustOnZoom](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#adjustOnZoom') to **false** to disable this behavior.

#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20UI%20Components/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#visualRangeUpdateMode')
- **Axis**.[visualRange()](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Axis/Methods/#visualRange')
- [zoomAndPan](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/')
- [onZoomStart](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomEnd')
- [valueMarginsEnabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueMarginsEnabled)
- [endOnTick](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#endOnTick)