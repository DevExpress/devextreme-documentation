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
A node's new text or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new text when the **value** parameter is set to `undefined`.
* Save a new text value to a data storage when the **value** parameter contains a node's text. For instance, assign this value to the **obj** parameter's field to save a node's text in your data source.