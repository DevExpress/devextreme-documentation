---
id: dxChart.Options.containerBackgroundColor
type: String
default: '#FFFFFF'
---
---
##### shortDescription
Specifies background color of the chart container.

---
A chart container is a `<div>` element that contains a Chart control. Certain Chart elements, such as series points in [hovered state](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#hoverMode'), have the same color as the container's background color. You may need to change this property value if your page's background color differs from white. Assign this color to the **containerBackgroundColor** property to ensure that the color of Chart elements is consistent with your page.

If you need to define a background color for the Chart, you can use the [elementAttr](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/elementAttr.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#elementAttr') property to assign a custom CSS class with a defined background color.


#####See Also#####
- **panes**.[backgroundColor](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonPaneSettings/backgroundColor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/#backgroundColor') - colors the background of the chart plot.