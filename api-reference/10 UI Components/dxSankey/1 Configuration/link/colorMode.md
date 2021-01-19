---
id: dxSankey.Options.link.colorMode
acceptValues: 'none' | 'source' | 'target' | 'gradient'
type: String
default: 'none'
---
---
##### shortDescription
Specifies how to color links.

---
This option accepts the following values:

- *"none"*      
The color specified in the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/#color') option is used.

- *"source"*        
A source node's color is used.

- *"target*"        
A target node's color is used.

- *"gradient"*      
A gradient color between the source node's and target node's color is used.

#include common-ref-enum with {
    enum: "`SankeyColorMode`",
    values: "`None`, `Source`, `Target`, and `Gradient`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}