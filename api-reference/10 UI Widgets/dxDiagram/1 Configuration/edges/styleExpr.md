---
id: dxDiagram.Options.edges.styleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge style.

##### param(data): Object
The current edge's data object.

---
A data source field specified by this option should contain inline style declarations in string format, for instance `"fill: #d9d9d9; stroke: #999999"`. 

If you provide a function for the **styleExpr** option, the function can return style settings as CSS rules presented in JSON format as well, for instance `{"fill": "#d9d9d9", "stroke": "#999999"}`

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
