---
id: dxDiagram.Options.units
acceptValues: 'in' | 'cm' | 'px'
type: String
default: 'in'
---
---
##### shortDescription
Specifies the measurement unit for size properties.

---
The **units** property specifies the unit for measurements in a diagram, for instance, [defaultHeight](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/defaultHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultHeight') (custom shape properties), [gridSize](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/gridSize '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/gridSize/') (grid properties), or [leftExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr') (node and edge data-bound settings).

User interface elements display measurements in [viewUnits](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#viewUnits).

When you export a diagram, the component saves the diagram's data in its own text format. The resulting JSON object contains measurements in twips, regardless of the **units** or [viewUnits](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#viewUnits) property values. Do not modify this JSON object because modified data can load incorrectly.

#include common-ref-enum with {
    enum: "`DiagramUnits`",
    values: "`In`, `Cm`, `Px`"
}