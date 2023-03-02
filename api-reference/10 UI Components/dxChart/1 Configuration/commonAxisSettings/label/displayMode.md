---
id: dxChart.Options.commonAxisSettings.label.displayMode
type: Enums.ChartLabelDisplayMode
default: 'standard'
---
---
##### shortDescription
Allows you to rotate or stagger axis labels. Applies to the horizontal axis only.

---
[note] Unless the [rotated](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#rotated') property is set to **true**, the argument axis is horizontal and the value axis is vertical.

This property accepts one of the following values.

- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** property.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** property.
- **standard**      
Does not change the default disposition of axis labels.