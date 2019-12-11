---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether or not to adjust the value axis when zooming the widget.

---
The **Chart** widget provides a [built-in zooming capability](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode'). Technically, zooming is performed down the argument axis, that is, the widget focuses on a smaller range of arguments. At the same time, the visible range of values also changes. In this case, use the **adjustOnZoom** option to decide whether or not to adjust the value axis to the changed visible range of values.

[note]This option is not supported when the argument axis is [discrete](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

Besides the built-in zooming, you can zoom the **Chart** widget using the [RangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/') widget. For details on this feature, see the [Zooming and Scrolling Using RangeSelector](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/6%20Zooming%20and%20Scrolling/01%20Using%20dxRangeSelector.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Zooming_and_Scrolling/#Using_dxRangeSelector') topic.

#####See Also#####
- [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') - enables zooming in the chart.
- [zoomArgument(startValue, endValue)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue') - zooms the chart in code.