---
id: dxChartCommonAxisSettingsLabel.overlappingBehavior
acceptValues: 'rotate' | 'stagger' | 'none' | 'hide'
type: String
default: 'hide'
---
---
##### shortDescription
Decides how to arrange axis labels when there is not enough space to keep all of them.

---
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. Depending on whether an axis is horizontal or vertical, this option accepts different values.

[note]Unless the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option is set to **true**, the argument axis is horizontal and the value axis is vertical.

The following values can be specified for both horizontal and vertical axes.

- **hide**      
Hides certain axis labels leaving more space for the others.
- **none**      
Leaves axis labels overlapped.

The following values can be specified for horizontal axes only.

- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** option.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** option.

#include common-ref-enum with {
    enum: "`OverlappingBehavior`",
    values: "`Stagger`, `Rotate`, `Hide`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AxisLabelsOverlapping/"
}

#####See Also#####
- [Axis Labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/')