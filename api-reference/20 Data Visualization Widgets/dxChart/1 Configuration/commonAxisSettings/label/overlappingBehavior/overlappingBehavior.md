---
default: 'enlargeTickInterval'
acceptValues: 'ignore' | 'stagger' | 'rotate' | 'enlargeTickInterval'
type: String | Object
---
---
##### shortDescription
Decides how to arrange axis labels when there is not enough space to keep all of them.

---
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. Depending on whether an axis is horizontal or vertical, this option accepts different values.

[note]Unless the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option is set to *true*, the argument axis is horizontal and the value axis is vertical.

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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `OverlappingBehavior` enum. This enum accepts the following values: `EnlargeTickInterval`, `Ignore`, `Rotate` and `Stagger`.