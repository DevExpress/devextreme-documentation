---
id: dxDiagram.Options.nodes.zIndexExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's z-index.

##### param(data): any
The current node's data object.

##### return: any
A node's z-index.

##### param(value): any
A node's new z-index or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new z-index when the **value** parameter is set to `undefined`.
* Save a new z-index value to a data storage when the **value** parameter contains a node's z-index. For instance, assign this value to the **obj** parameter's field to save a node's z-index in your data source.

The z-index specifies the node stack order. A node with greater stack order is in front of a node with a lower stack order.