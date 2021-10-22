---
id: dxDiagram.Options.edges.lineTypeExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's line type.

##### param(data): any
The current edge's data object.

##### return: any
An edge's line type (`orthogonal` or `straight`).

##### param(value): any
When the function is called as a setter, returns the edge's new line type; when the function is called as a getter, returns `undefined`.

---
The specified field or expression should return `orthogonal` or `straight`.

![Diagram - Line Types](/images/diagram/line-type.png)
