---
id: dxRangeSelector.Options.background
type: Object
---
---
##### shortDescription
Specifies the properties for the range selector's background.

---
A background is an area that is painted in a specified color. You can change this color by setting the background's **color** property and by displaying an image specified by the [image](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/background/image '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/background/image/') configuration object. In addition, you can superimpose a chart on a background by specifying the [chart](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/') configuration object. The chart will be shown with the specified background color. To show the chart without a background, set the background's **visible** property to **false**.

[note] You can use this property only when the range selector displays an [image](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/background/image '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/background/image/') or [chart](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/'). If not, use the [selectedRangeColor](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/selectedRangeColor.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#selectedRangeColor') and [tick](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/tick '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/tick/') to customize the appearance of your UI component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ImageOnBackground/"
}