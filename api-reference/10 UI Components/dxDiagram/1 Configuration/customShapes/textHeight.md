---
id: dxDiagram.Options.customShapes.textHeight
type: Number
---
---
##### shortDescription
Specifies the shape text container's height.

---
This property specifies a fraction from 0 to 1 that is the height of a shape's text in relation to the shape height. If the **textHeight** property is set to 1, the text height is equal to the shape height.

The absolute text height is calculated by multiplying the **textHeight** value by the shape height.

If the **textHeight** property is set to `0` (zero) or `undefined` and the [autoSizeEnabled](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoSizeEnabled.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#autoSizeEnabled') property is set to `true`, the **textHeight** property value is equal to `1`.