---
id: dxDiagram.Options.nodes.autoLayout.type
acceptValues: 'auto' | 'off' | 'tree' | 'layered'
type: String
---
---
##### shortDescription
Specifies the diagram layout type.

---
 The **auto** value corresponds to **off** when both shape coordinates ([leftExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr')) are specified; otherwise, the **auto** value corresponds to **layered**.


[note] When the **type** option is set to **layered** or **tree**, the shape coordinates specified by the [leftExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr') options are ignored.
