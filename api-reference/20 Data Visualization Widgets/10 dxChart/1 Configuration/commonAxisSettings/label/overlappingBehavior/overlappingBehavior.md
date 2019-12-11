---
default: 'enlargeTickInterval'
acceptValues: 'ignore' | 'stagger' | 'rotate' | 'enlargeTickInterval'
type: string | object
---
---
##### shortDescription
Decides how to arrange axis labels when there is not enough space to keep all of them.

---
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. Depending on whether an axis is horizontal or vertical, this option accepts different values.

[note]Unless the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option is set to *true*, the argument axis is horizontal and the value axis is vertical.

The following values can be specified for both horizontal and vertical axes.

- **enlargeTickInterval**      
Enlarges the tick interval and, consequently, the interval between axis labels.
- **ignore**      
Leaves axis labels as they are - overlapped by each other.

The following values can be specified for horizontal axes only.

- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** option.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** option.

[note]When specified, *"rotate"* and *"stagger"* apply even if axis labels do not overlap each other.