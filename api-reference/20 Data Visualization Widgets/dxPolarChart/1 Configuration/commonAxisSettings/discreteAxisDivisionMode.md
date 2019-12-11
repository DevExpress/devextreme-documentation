---
default: 'betweenLabels'
acceptValues: 'betweenLabels' | 'crossLabels'
type: String
---
---
##### shortDescription
Specifies whether ticks/grid lines of a discrete axis are located between labels or cross the labels.

---
When a discrete axis is divided, its ticks/grid lines are located between labels by default. If this is not appropriate, use the **discreteAxisDivisionMode** property to set the required mode for positioning ticks and grid lines on a discrete axis.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DiscreteAxisDivisionMode` enum. This enum accepts the following values: `BetweenLabels` and `CrossLabels`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartswindrose/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>