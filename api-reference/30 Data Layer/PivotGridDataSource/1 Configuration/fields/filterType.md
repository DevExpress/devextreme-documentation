---
id: PivotGridDataSource.Options.fields.filterType
type: Enums.FilterType
default: 'include'
---
---
##### shortDescription
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values.

---
This property accepts the following values:

- **include**       
Values in the [header filter](/concepts/05%20UI%20Components/PivotGrid/080%20Filtering/020%20Filtering%20in%20the%20UI.md '/Documentation/Guide/UI_Components/PivotGrid/Filtering/#Filtering_in_the_UI') are unselected initially. Users change the filter by selecting the values.

- **exclude**       
All values in the header filter are selected initially. Users changes the filter by clearing the selection of certain values.

This property changes when the user clicks the **Select All** checkbox in the [header filter](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/headerFilter '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/headerFilter/') (only if header filter displays plain data):

<table class="dx-table">
    <tr>
        <th>Select All</th>
        <th>filterType / filterValues</th>
    </tr>
    <tr>
        <td><img src="/images/DataGrid/dg-selectall-unchecked.png"></td>
        <td><code>filterType: "include"</code><br><code>filterValues: null</code></td>
    </tr>
    <tr>
        <td><img src="/images/DataGrid/dg-selectall-checked.png"></td>
        <td><code>filterType: "exclude"</code><br><code>filterValues: null</code></td>
    </tr>
</table>

[note] If your data is hierarchical and PivotGrid is bound to OLAP, do not set **filterType** to "exclude".

#####See Also#####
- **fields[]**.[filterValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues')
- **fields[]**.[allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering')