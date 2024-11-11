---
id: dxDiagram.Options.edges.lineTypeExpr
type: String | function(data, value) | undefined
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
An edge's new line type or `undefined`.

---
A function assigned to this property should do the following:

* Return an edge's new line type when the **value** parameter is set to `undefined`.
* Save a new line type value to a data storage when the **value** parameter contains an edge's line type. For instance, assign this value to the **obj** parameter's field to save an edge's line type in your data source.

A line type can accept the `orthogonal` or `straight` value.

![Diagram - Line Types](/images/diagram/line-type.png)
