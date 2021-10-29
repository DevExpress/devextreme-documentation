---
id: dxDiagram.Options.edges.toPointIndexExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an index of a shape connection point where an edge ends.

##### param(data): any
The current edge's data object.

##### return: any
An index of a shape connection point where an edge ends.

##### param(value): any
When the function is called as a setter, returns an index of a shape connection point where the edge ends; when the function is called as a getter, returns `undefined`.

---
The built-in shape's connection points are numbered clockwise from the leftmost point on the top border.

![Diagram - Shape Points](/images/diagram/point-index-expr.png)

A custom shape's connection points are numbered according to their position in the [connectionPoints](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/connectionPoints '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/connectionPoints/') collection.