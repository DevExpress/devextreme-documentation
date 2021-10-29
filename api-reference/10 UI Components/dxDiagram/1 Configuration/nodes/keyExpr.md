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
When the function is called as a setter, returns the node's new key value; when the function is called as a getter, returns `undefined`.

---
