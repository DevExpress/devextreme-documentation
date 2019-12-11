---
default: undefined
acceptValues: 'displayText' | 'value' | 'none'
type: String
---
---
##### shortDescription
Specifies how the field's values in the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') should be sorted.

---
Dimension attributes have a value and a display text. For example, a "Month" attribute's display text can be "January", "February", ..., "December"; its values can be 1, 2, ..., 12. "January" is first when sorting by values, and "April" is first when sorting by display text. No sorting is applied when setting the **sortBy** option to *"none"*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridSortBy` enum. This enum accepts the following values: `DisplayText`, `Value`, and `None`.

#####See Also#####
- **fields[]**.[sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder')