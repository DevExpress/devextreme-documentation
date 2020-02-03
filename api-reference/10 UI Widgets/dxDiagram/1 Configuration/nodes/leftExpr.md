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

---
The [units](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units') option specifies the measurement unit.

[note] Shape coordinates specified by the **leftExpr** and [topExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr') options are ignored when the [autoLayout.type](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/autoLayout/#type') option is set to **layered** or **tree**.