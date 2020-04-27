---
id: dxDiagram.Options.defaultItemProperties.connectorLineStart
acceptValues: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle'
type: String
default: 'none'
---
---
##### shortDescription
Specifies an edge's default line start tip.

---
The **connectorLineStart** option specifies a default line start tip that is applied to a connector if there is not another value provided via the [fromLineEndExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromLineEndExpr) option.

#include common-ref-enum with {
    enum: "`DiagramConnectorLineEnd`",
    values: "`None`, `Arrow`, `OutlinedTriangle`, `FilledTriangle`"
}