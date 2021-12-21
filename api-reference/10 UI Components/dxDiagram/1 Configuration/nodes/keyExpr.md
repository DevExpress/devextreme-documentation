---
id: dxDiagram.Options.nodes.keyExpr
type: String | function(data, value)
default: 'id'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides node keys.

##### param(data): any
The current node's data object.

##### return: any
A node key.

##### param(value): any
A node's new key or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new key when the **value** parameter is set to `undefined`.
* Save a new key value to a data storage when the **value** parameter contains a node's key. For instance, assign this value to the **obj** parameter's field to save a node's key in your data source.