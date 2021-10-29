---
id: dxDiagram.Options.edges.textStyleExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's text style.

##### param(data): any
The current edge's data object.

##### return: any
An edge's text style.

##### param(value): any
When the function is called as a setter, returns the edge's new text style; when the function is called as a getter, returns `undefined`.

---
A data source field specified by this property must contain inline style declarations in string format, for instance `"font-weight: bold; text-decoration: underline"`. 

If you provide a function for the **textStyleExpr** property, the function can return style settings as CSS rules presented in JSON format as well, for instance `{ "font-weight": "bold", "text-decoration": "underline" }`. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
