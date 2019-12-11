---
type: Object
---
---
##### shortDescription
Specifies the settings of the [scroll bar](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Scrolling/03%20Using%20the%20Scroll%20Bar.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Using_the_Scroll_Bar').

---
The scroll bar allows a user to scroll the chart. In order to use the scroll bar, you need to enable [scrolling](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') and [zooming](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') in your chart.

By default, the scroll bar is hidden. To make it visible, set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible') field of the **scrollBar** object to **true**. Using other fields of this object you can adjust the scroll bar appearance settings, including color, width and opacity.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}