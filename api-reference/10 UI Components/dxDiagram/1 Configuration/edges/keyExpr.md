---
id: dxDiagram.Options.edges.keyExpr
type: String | function(data, value)
default: 'id'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's key.

##### param(data): any
The current edge's data object.

##### return: any
An edge key.

##### param(value): any
An edge's new key or `undefined`.

---
This property is required if you bind edges to a data source ([edges.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#dataSource')).

A function assigned to this property should do the following:

* Return an edge's new key when the **value** parameter is set to `undefined`.
* Save a new key value to a data storage when the **value** parameter contains an edge's key. For instance, assign this value to the **obj** parameter's field to save an edge's key in your data source.