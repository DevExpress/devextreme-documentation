---
default: undefined
type: function(info)
---
---
##### shortDescription
Customizes node tooltips' appearance.

##### param(info): Object
Information about a sankey node being pressed or hovered over.

##### field(info.title): String
The node's title.

##### field(info.weightIn): Number
The total weight of the node's incoming links.

##### field(info.weightOut): Number
The total weight of the node's outgoing links.

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

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they occupy beforehand.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.