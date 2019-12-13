---
id: PivotGridDataSource.Options.fields.filterType
acceptValues: 'exclude' | 'include'
type: String
default: 'include'
---
---
##### shortDescription
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values.

---
This option accepts the following values:

- **include**       
Values in the [header filter](/concepts/05%20Widgets/PivotGrid/080%20Filtering/020%20Filtering%20in%20the%20UI.md '/Documentation/Guide/Widgets/PivotGrid/Filtering/#Filtering_in_the_UI') are unselected initially. Users change the filter by selecting the values.

- **exclude**       
All values in the header filter are selected initially. Users changes the filter by clearing the selection of certain values.

#include common-ref-enum with {
    enum: "`FilterType`",
    values: "`Include` and `Exclude`"
}

#####See Also#####
- **fields[]**.[filterValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues')
- **fields[]**.[allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering')