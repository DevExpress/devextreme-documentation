---
id: PivotGridDataSource.Options.fields.sortBy
type: Enums.PivotGridSortBy
default: undefined
---
---
##### shortDescription
Specifies how the field's values in the [headers](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers') should be sorted.

---
Dimension attributes have a value and a display text. For example, a "Month" attribute's display text can be "January", "February", ..., "December"; its values can be 1, 2, ..., 12. "January" is first when sorting by values, and "April" is first when sorting by display text.

No sorting is applied when **sortBy** is set to *"none"*.

#####See Also#####
- **fields[]**.[sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder')