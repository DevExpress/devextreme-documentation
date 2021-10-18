---
id: dxDiagram.Options.edges.keyExpr
type: String | function(data, value)
default: 'id'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns edge keys.

##### param(data): any
The current edge's data object.

##### return: any
An edge key.

##### param(value): any
<!-- Description goes here -->

---
This property is required if you bind edges to a data source ([edges.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#dataSource')).