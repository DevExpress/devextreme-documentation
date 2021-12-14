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
An edge's new custom data or `undefined`.

---
This property links custom data from a data source to the diagram edge. The edge contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

A function assigned to this property should do the following:

* Return an edge's new custom data when the **value** parameter is set to `undefined`
* Save a new custom data value to a data storage when the **value** parameter contains an edge's custom data. For instance, assign this value to the **obj** parameter's field to save an edge's custom data in your data source.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}