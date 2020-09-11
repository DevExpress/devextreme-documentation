---
id: dxDiagram.Options.nodes.autoLayout.type
acceptValues: 'auto' | 'off' | 'tree' | 'layered'
type: String
---
---
##### shortDescription
Specifies an auto-layout algorithm that is used to automatically arrange shapes.

---
- **auto**. The equivalent of the **off** value when both shape coordinates ([leftExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr')) are specified; otherwise, the **auto** value is equivalent to **layered**.

- **off**. The auto-layout is not applied.

- **tree**. This algorithm is used to draw hierarchical diagrams. It arranges shapes in a tree structure and aligns them evenly based on their hierarchical level.

  ![Diagram - Tree Layout](/images/diagram/layout-tree.png)

- **layered** (Sugiyama-style). This algorithm is used to draw layered graphs. It minimizes the number of connector crossings and spreads shapes evenly.

  ![Diagram - Layered Layout](/images/diagram/layout-layered.png)

[note] When the **type** option is set to **layered** or **tree**, predefined shape coordinates ([leftExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr') and [topExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/topExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr')) and edge points ([pointsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/pointsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#pointsExpr')) are ignored.

#include common-ref-enum with {
    enum: "`DiagramDataLayoutType`",
    values: "`Auto`, `Off`, `Tree`, `Layered`"
}
