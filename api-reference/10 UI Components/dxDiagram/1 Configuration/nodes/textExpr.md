---
id: dxDiagram.Options.nodes.textExpr
type: String | function(data, value)
default: 'text'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides node texts.

##### param(data): any
The current node's data object.

##### return: any
A node text.

##### param(value): any
When the function is called as a setter, returns the node's new text value; when the function is called as a getter, returns `undefined`.

---
