---
id: dxDiagram.Options.nodes.leftExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides the x-coordinate of a node's left border.

##### param(data): Object
The current node's data object.

##### return: any
The x-coordinate of a node's left border.

---
A node's x-coordinate specifies the distance between the left border of a diagram work area and the left border of a shape, in [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units').

[note] Predefined shape coordinates are ignored when the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**.