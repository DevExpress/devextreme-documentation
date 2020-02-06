---
id: dxDiagram.Options.nodes.styleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node style.

##### param(data): Object
The current node's data object.

---
The style settings must be specified as CSS rules presented in JSON format, for instance `{ "stroke": "#444444" }`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
