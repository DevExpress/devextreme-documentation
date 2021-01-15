---
id: dxChart.Options.resizePanesOnZoom
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether panes can be resized if other chart elements require more space after [zooming or panning](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/').

---
When users zoom the chart, [axis labels](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/label '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/label/') can be longer. However, they are cut because their allocated space remains the same.

Enable the **resizePanesOnZoom** option to show the entire labels. In this case, panes are resized to allow more space for labels, and the UI component's layout is recalculated. This can make the axis shift from its position at runtime and cause an issue if you display several charts aligned side by side or under each other.

#####See Also#####
- [adjustOnZoom](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#adjustOnZoom')
