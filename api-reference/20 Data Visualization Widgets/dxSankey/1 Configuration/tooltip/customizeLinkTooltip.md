---
id: dxSankey.Options.tooltip.customizeLinkTooltip
type: function(info)
default: undefined
---
---
##### shortDescription
Customizes link tooltips' appearance.

##### param(info): Object
Information about a sankey link being pressed or hovered over.

##### field(info.source): String
The title of the link's source node.

##### field(info.target): String
The title of the link's target node.

##### field(info.weight): Number
The link's weight.

##### return: Object
The current tooltip's text or markup and appearance settings.

---
#include dataviz-customize-tooltip-return

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}