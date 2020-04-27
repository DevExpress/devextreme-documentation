---
id: dxDiagram.Options.defaultItemProperties.connectorLineEnd
acceptValues: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle'
type: String
default: 'arrow'
---
---
##### shortDescription
Specifies an edge's default line end tip.

---
The **connectorLineEnd** option specifies a default line end tip that is applied to a connector if there is not another value provided via the [toLineEndExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toLineEndExpr) option.

#include common-ref-enum with {
    enum: "`DiagramConnectorLineEnd`",
    values: "`None`, `Arrow`, `OutlinedTriangle`, `FilledTriangle`"
}