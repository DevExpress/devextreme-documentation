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
This function should return an object with the following fields:

- **color**        
Colors the current tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note] If you are going to use external resources in the markup (for example, images), specify the size of the area they occupy beforehand.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}