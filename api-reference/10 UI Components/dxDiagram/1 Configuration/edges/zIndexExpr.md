---
id: dxDiagram.Options.edges.zIndexExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's z-index.

##### param(data): any
The current edge's data object.

##### return: any
An edge's z-index.

##### param(value): any
<!-- Description goes here -->

---
The z-index specifies the edge stack order. An edge with greater stack order is in front of an edge with a lower stack order.