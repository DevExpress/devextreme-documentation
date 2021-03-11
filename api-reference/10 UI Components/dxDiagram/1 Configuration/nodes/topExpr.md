---
id: dxDiagram.Options.nodes.topExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides the y-coordinate of a node's top border.

##### param(data): Object
The current node's data object.

---
A node's y-coordinate specifies the distance between the top border of a diagram work area and the top border of a shape, in [units](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/units.md '/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units'').

[note] Predefined shape coordinates are ignored when the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**.