---
uid: viz/chart:dxChartCommonAxisSettingsLabel.overlappingBehavior
---
---
##### shortDescription
Decides how to arrange axis labels when there is not enough space to display all of them.

---
<!--
When axis labels overlap each other, you can specify the **overlappingBehavior** property to rearrange them. Depending on whether an axis is horizontal or vertical, this property accepts different values.

[note]Unless you set the [rotated](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#rotated') property to **true**, the argument axis is horizontal and the value axis is vertical.

You can specify the following values for both horizontal and vertical axes:

- **hide**      
Hides certain axis labels and leaves more space for the others.
- **none**      
Leaves axis labels overlapped.

The following values can be specified for horizontal axes only:

- **rotate**      
Rotates axis labels at the angle specified by the [rotationAngle](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/rotationAngle.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#rotationAngle') property.
- **stagger**      
Arranges axis labels in two rows in a staggered manner. Use the [staggeringSpacing](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/staggeringSpacing.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#staggeringSpacing') property to specify an empty space between rows.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AxisLabelsOverlapping/"
}

#####See Also#####
- [Axis Labels](/concepts/05%20UI%20Components/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/')
-->