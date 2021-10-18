---
id: dxDiagram.Options.nodes.customDataExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's custom data.

##### param(data): any
The current node's data object.

##### return: any
A node's custom data.

##### param(value): any
<!-- Description goes here -->

---
This property links custom data from a data source to a diagram node. The node contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}
