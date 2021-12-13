---
id: dxDiagram.Options.edges.customDataExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's custom data.

##### param(data): any
The current edge's data object.

##### return: any
An edge's custom data.

##### param(value): any
When the Diagram calls this function as a setter, contains an edge's new custom data. When the Diagram calls this function as a getter, contains `undefined`.

---
This property links custom data from a data source to the diagram edge. The edge contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

A function assigned to this property should do the following:
* Return an edge's custom data when the **value** parameter is set to `undefined`
* When the **value** parameter contains an edge's new custom data, assign this data to the **obj** parameter

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}
