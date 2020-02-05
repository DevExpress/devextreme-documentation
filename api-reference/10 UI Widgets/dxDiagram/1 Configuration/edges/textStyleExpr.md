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
The style settings must be specified as CSS rules presented in JSON format, for instance `{ "fill": "red" }`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
