---
id: dxVectorMap.Options.tooltip
type: Object
---
---
##### shortDescription
Configures tooltips.

---
A tooltip is a miniature rectangle displaying data of an area or a marker. A tooltip appears when the end-user hovers the cursor over an area or a marker. To show tooltips, do the following.

- Enable tooltips.  
Set the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/tooltip/#enabled') property to **true**.

- Specify text to be displayed in tooltips.
Specify the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/tooltip/#customizeTooltip') property.

You can also change the appearance of tooltips using fields of the **tooltip** configuration object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/"
}