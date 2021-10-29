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
When the function is called as a setter, returns the edge's new key value; when the function is called as a getter, returns `undefined`.

---
This property is required if you bind edges to a data source ([edges.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#dataSource')).