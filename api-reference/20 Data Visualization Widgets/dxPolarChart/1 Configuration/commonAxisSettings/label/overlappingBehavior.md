---
default: 'hide'
acceptValues: 'hide' | 'none'
type: String
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

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PolarChartOverlappingBehavior` enum. This enum accepts the following values: `Hide` and `None`.

[note] Specifying this option with the *"enlargeTickInterval"* and *"ignore"* values is <span style="color:red">deprecated</span>.