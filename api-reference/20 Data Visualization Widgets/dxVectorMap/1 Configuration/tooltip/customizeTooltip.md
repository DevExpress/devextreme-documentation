---
id: dxVectorMapTooltip.customizeTooltip
type: function(info)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies text and appearance of a set of tooltips.

##### param(info): MapLayerElement
Information on the area or marker being pressed or hovered over with the mouse pointer.

##### return: Object
The tooltip's text or markup and color.

---
#include dataviz-customize-tooltip-return

[note] The tooltip is displayed only if `text` or `html` is specified.

#include dataviz-ref-functioncontext

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/",
    name: "Colors Customization"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/",
    name: "Tooltip HTML Support"
}
