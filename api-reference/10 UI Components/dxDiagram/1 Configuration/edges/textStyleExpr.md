---
id: dxDiagram.Options.edges.textStyleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's text style.

##### param(data): Object
The current edge's data object.

---
A data source field specified by this option must contain inline style declarations in string format, for instance `"font-weight: bold; text-decoration: underline"`. 

If you provide a function for the **textStyleExpr** option, the function can return style settings as CSS rules presented in JSON format as well, for instance `{ "font-weight": "bold", "text-decoration": "underline" }`. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
