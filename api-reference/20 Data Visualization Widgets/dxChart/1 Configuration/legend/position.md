---
default: 'outside'
acceptValues: 'inside' | 'outside'
type: String
---
---
##### shortDescription
Specifies whether the legend is located outside or inside the chart's plot.

---
In addition to this option, use the legend's [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/legend/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment'), [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/legend/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#verticalAlignment') and [orientation](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/legend/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#orientation') options to specify the legend layout.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `RelativePosition` enum. This enum accepts the following values: `Inside` and `Outside`.