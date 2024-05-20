---
id: dxDiagram.Options.viewUnits
type: Enums.Units
default: 'in'
---
---
##### shortDescription
Specifies the measurement unit that is displayed in user interface elements.

---
The **viewUnits** property specifies the measurement unit in _Properties_ panel and in the Diagram work area.

![Diagram viewUnits](/images/diagram/viewUnits.png)

Use the [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the unit for measurements in a diagram, for instance, [defaultHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultHeight') (custom shape properties), [gridSize](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/gridSize '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/gridSize/') (grid properties), or [leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr') (node and edge data-bound settings).

When you export a diagram, the component saves the diagram's data in its own text format. The resulting JSON object contains measurements in twips, regardless of the [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') or **viewUnits** property values. Do not modify this JSON object because modified data can load incorrectly.
