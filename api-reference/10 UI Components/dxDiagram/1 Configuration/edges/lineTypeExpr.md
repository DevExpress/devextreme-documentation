---
id: dxDiagram.Options.edges.lineTypeExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's line type.

##### param(data): any
The current edge's data object.

##### return: any
An edge's line type (`orthogonal` or `straight`).

##### param(value): any
For a newly created edge returns the edge's line type; otherwise, returns `undefined`.

---
The specified field or expression should return `orthogonal` or `straight`.

![Diagram - Line Types](/images/diagram/line-type.png)
