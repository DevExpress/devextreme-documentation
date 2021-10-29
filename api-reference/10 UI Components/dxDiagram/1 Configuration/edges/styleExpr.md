---
id: dxDiagram.Options.edges.styleExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge style.

##### param(data): any
The current edge's data object.

##### return: any
An edge style.

##### param(value): any
When the function is called as a setter, returns the edge's new style; when the function is called as a getter, returns `undefined`.

---
A data source field specified by this property should contain inline style declarations in string format, for instance `"stroke: #999999"`. 

If you provide a function for the **styleExpr** property, the function can return style settings as CSS rules presented in JSON format as well, for instance `{"stroke": "#999999"}`

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
