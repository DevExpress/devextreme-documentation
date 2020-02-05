---
id: dxDiagram.Options.nodes.textStyleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node's text style.

##### param(data): Object
The current node's data object.

---
The style settings must be specified as CSS rules presented in JSON format, for instance `{ "font-weight": "bold", "text-decoration": "underline" }`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
