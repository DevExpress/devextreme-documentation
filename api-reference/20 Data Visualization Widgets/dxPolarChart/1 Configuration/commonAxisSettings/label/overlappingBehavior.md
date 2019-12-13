---
id: dxPolarChart.Options.commonAxisSettings.label.overlappingBehavior
acceptValues: 'none' | 'hide'
type: String
default: 'hide'
---
---
##### shortDescription
Decides how to arrange axis labels when there is not enough space to keep all of them.

---
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. It accepts the following values.

- **hide**      
Hides certain axis labels leaving more space for the others.
- **none**      
Leaves axis labels overlapped.

#include common-ref-enum with {
    enum: "`PolarChartOverlappingBehavior`",
    values: "`Hide` and `None`"
}

[note] Specifying this option with the *"enlargeTickInterval"* and *"ignore"* values is <span style="color:red">deprecated</span>.