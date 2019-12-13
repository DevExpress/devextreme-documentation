---
id: dxChart.Options.commonAxisSettings.label.displayMode
acceptValues: 'rotate' | 'stagger' | 'standard'
type: String
default: 'standard'
---
---
##### shortDescription
Allows you to rotate or stagger axis labels. Applies to the horizontal axis only.

---
[note] Unless the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option is set to **true**, the argument axis is horizontal and the value axis is vertical.

This option accepts one of the following values.

- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** option.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** option.
- **standard**      
Does not change the default disposition of axis labels.