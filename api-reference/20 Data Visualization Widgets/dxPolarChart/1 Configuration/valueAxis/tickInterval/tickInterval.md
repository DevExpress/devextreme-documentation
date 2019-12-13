---
id: dxPolarChart.Options.valueAxis.tickInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies an interval between axis ticks/grid lines.

---
Use this option to divide the scale by ticks in a specified interval from each other. If this option is not set, ticks are automatically arranged so that their labels do not overlap each other.

In case of a continuous or a logarithmic axis, assign a numeric value to this option.

If the axis is of the date-time type, assign one of the predefined string values or an object to this option. The object's fields specify the number of days, hours etc.

When you use a [logarithmic axis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#type'), ticks are generated on a base of powers. For example, assume that the [logarithm base](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#logarithmBase') is 10. Then, if the tick interval is 1, ticks are generated at 0.01, 0.1, 1, 10, 100, 1000, 10000, etc. If the tick interval is 2, ticks are generated at 0.1, 10, 1000, etc.

To set the **tickInterval** option for several axis at once, use the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/') configuration object. To set this option for an individual axis, use the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/') or **valueAxis** configuration object.

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.