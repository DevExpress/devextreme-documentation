---
id: dxDiagram.Options.defaultItemProperties.connectorLineEnd
acceptValues: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle'
type: String
default: 'arrow'
---
---
##### shortDescription
Specifies the default tip of a connector's end point.

---
The **connectorLineEnd** property specifies a tip that is displayed at a connector's end point if the [toLineEndExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/toLineEndExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toLineEndExpr') property does not provide another value.

#include common-ref-enum with {
    enum: "`DiagramConnectorLineEnd`",
    values: "`None`, `Arrow`, `OutlinedTriangle`, `FilledTriangle`"
}