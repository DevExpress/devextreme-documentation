---
id: dxChart.Options.scrollBar
type: Object
---
---
##### shortDescription
Specifies the settings of the [scroll bar](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning/03%20Using%20the%20Scroll%20Bar.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_the_Scroll_Bar').

---
The scroll bar allows a user to pan the chart. To use it, you need to enable [zooming and panning](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/') in your chart.

By default, the scroll bar is hidden. To make it visible, set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible') field of the **scrollBar** object to **true**. Using other fields of this object you can adjust the scroll bar appearance settings, including color, width and opacity.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}