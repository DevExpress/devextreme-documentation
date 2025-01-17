---
id: dxDiagram.Options.edges.zIndexExpr
type: String | function(data, value) | undefined
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
An edge's new z-index or `undefined`.

---
A function assigned to this property should do the following:

* Return an edge's new z-index when the **value** parameter is set to `undefined`.
* Save a new z-index value to a data storage when the **value** parameter contains an edge's z-index. For instance, assign this value to the **obj** parameter's field to save an edge's z-index in your data source.

The z-index specifies the edge stack order. An edge with greater stack order is in front of an edge with a lower stack order.