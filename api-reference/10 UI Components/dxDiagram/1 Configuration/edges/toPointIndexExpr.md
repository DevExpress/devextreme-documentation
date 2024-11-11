---
id: dxDiagram.Options.edges.toPointIndexExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an index of a shape connection point where an edge ends.

##### param(data): any
The current edge's data object.

##### return: any
An index of a shape connection point where an edge ends.

##### param(value): any
An index of a shape connection point where an edge ends or `undefined`.

---
A function assigned to this property should do the following:

* Return an index of a shape connection point where an edge ends when the **value** parameter is set to `undefined`.
* Save a new index value to a data storage when the **value** parameter contains an index of a shape connection point. For instance, assign this value to the **obj** parameter's field to save an index of a shape connection point where an edge ends in your data source.

The built-in shape's connection points are numbered clockwise from the leftmost point on the top border.

![Diagram - Shape Points](/images/diagram/point-index-expr.png)

A custom shape's connection points are numbered according to their position in the [connectionPoints](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/connectionPoints '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/connectionPoints/') collection.