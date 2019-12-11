---
default: 'enlargeTickInterval'
acceptValues: 'ignore' | 'enlargeTickInterval'
type: String
---
---
##### shortDescription
Specifies the overlap resolving algorithm to be applied to axis labels.

---
When labels overlap each other, you can specify how these labels will be displayed by setting the **overlappingBehavior** option.

The following values are possible.

* **ignore**   
Leave the labels overlapped.
* **enlargeTickInterval**   
Leave the labels as they are, but enlarge the axis tick intervals so that the labels do not overlap.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PolarChartOverlappingBehavior` enum. This enum accepts the following values: `EnlargeTickInterval` and `Ignore`.