---
default: undefined
acceptValues: 'day' | 'dayOfWeek' | 'month' | 'quarter' | 'year'
type: String | Number
---
---
##### shortDescription
Specifies how the field's values are combined into groups for the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers'). Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

---
If the field's values are dates, specify this option with one of the accepted string values.

If the field's values are numbers, specify this option with a number that designates a step with which groups should be generated.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridGroupInterval` enum. This enum accepts the following values: `Year`, `Quarter`, `Month`, `DayOfWeek`, and `Day`.

#####See Also#####
- [Data Grouping](/concepts/05%20Widgets/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping')
- **fields[]**.[selector](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/selector.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector')