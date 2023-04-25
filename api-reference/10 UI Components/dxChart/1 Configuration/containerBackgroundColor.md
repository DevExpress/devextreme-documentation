---
id: dxChart.Options.containerBackgroundColor
type: String
default: '#FFFFFF'
---
---
##### shortDescription
Specifies background color of the chart container.

---
The container is a `<div>` element that contains Chart. Certain Chart elements, such as series points in the [hovered state](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#hoverMode'), use the same color as a background color of the container. You may need this property if the background of your page has a color different from white. Assign this color to the **containerBackgroundColor** property to ensure that the Chart elements are color-coordinated with your page.

If you need to define a background color for the Chart itself, you can use the [elementAttr](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#elementAttr) property to assign a custom CSS class with the background color specified.


#####See Also#####
- **panes**.[backgroundColor](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonPaneSettings/backgroundColor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/#backgroundColor') - colors the background of the chart plot.