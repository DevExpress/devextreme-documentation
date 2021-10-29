---
id: dxDiagram.Options.nodes.widthExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node's width.

##### param(data): any
The current node's data object.

##### return: any
A node's width.

##### param(value): any
When the function is called as a setter, returns the node's new width value; when the function is called as a getter, returns `undefined`.
---
The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the measurement unit.