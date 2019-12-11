---
id: dxRangeSelector.Options.background
type: Object
---
---
##### shortDescription
Specifies the options for the range selector's background.

---
A background is an area that is painted in a specified color. You can change this color by setting the background's **color** property and by displaying an image specified by the [image](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/background/image '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/image/') configuration object. In addition, you can superimpose a chart on a background by specifying the [chart](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/') configuration object. The chart will be shown with the specified background color. To show the chart without a background, set the background's **visible** property to **false**.

[note] You can use this option only when the range selector displays an [image](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/background/image '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/image/') or [chart](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/'). If not, use the [selectedRangeColor](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/selectedRangeColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#selectedRangeColor') and [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/tick/') to customize the appearance of your widget.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ImageOnBackground/"
}