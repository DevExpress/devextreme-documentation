---
id: dxDiagram.Options.customShapes.textWidth
type: Number
---
---
##### shortDescription
Specifies the shape text container's width.

---
This property specifies a fraction from 0 to 1 that is the shape text's width in relation to the shape width. If the **textWidth** property is set to 1, the text width is equal to the shape width.

The absolute text width is calculated by multiplying the **textWidth** value by the shape width.

If the **textWidth** property is set to `0` (zero) or `undefined` and the [autoSizeEnabled](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoSizeEnabled.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#autoSizeEnabled') property is set to `true`, the **textWidth** property value is equal to `1`.