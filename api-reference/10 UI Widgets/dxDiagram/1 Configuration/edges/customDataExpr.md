---
id: dxDiagram.Options.edges.customDataExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's custom data.

##### param(data): Object
The current edge's data object.

---
This option links custom data contained in a data source to a diagram edge. The linked data is copied and pasted with the edge. Changes in the data are reflected in a diagram history and can be undone and redone by the UI.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}