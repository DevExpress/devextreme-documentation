---
id: dxDiagram.Options.defaultItemProperties.connectorLineType
acceptValues: 'straight' | 'orthogonal'
type: String
default: 'orthogonal'
---
---
##### shortDescription
Specifies the default type of a connector.

---
The **connectorLineType** option specifies a type of a connector if the [lineTypeExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/lineTypeExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#lineTypeExpr') option does not provide another value.

#include common-ref-enum with {
    enum: "`DiagramConnectorLineType`",
    values: "`Straight`, `Orthogonal`"
}