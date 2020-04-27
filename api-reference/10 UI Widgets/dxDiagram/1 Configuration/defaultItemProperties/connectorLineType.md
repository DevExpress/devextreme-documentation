---
id: dxDiagram.Options.defaultItemProperties.connectorLineType
acceptValues: 'straight' | 'orthogonal'
type: String
default: 'orthogonal'
---
---
##### shortDescription
Specifies an edge's default line type.

---
The **connectorLineType** option specifies a default line type that is applied to a connector if there is not another value provided via the [lineTypeExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#lineTypeExpr) option.

#include common-ref-enum with {
    enum: "`DiagramConnectorLineType`",
    values: "`Straight`, `Orthogonal`"
}