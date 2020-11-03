---
id: PivotGridDataSourceField.sortBy
acceptValues: 'displayText' | 'value' | 'none'
type: String
default: undefined
---
---
##### shortDescription
Specifies how the field's values in the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') should be sorted.

---
Dimension attributes have a value and a display text. For example, a "Month" attribute's display text can be "January", "February", ..., "December"; its values can be 1, 2, ..., 12. "January" is first when sorting by values, and "April" is first when sorting by display text.

No sorting is applied when **sortBy** is set to *"none"*.

#include common-ref-enum with {
    enum: "`PivotGridSortBy`",
    values: "`DisplayText`, `Value`, and `None`"
}

#####See Also#####
- **fields[]**.[sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder')