---
id: GridBaseColumn.filterType
acceptValues: 'exclude' | 'include'
type: String
default: 'include'
---
---
##### shortDescription
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/').**visible** and [allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '{basewidgetpath}/Configuration/columns/#allowHeaderFiltering') are **true**.

---
This option accepts the following values.

- **include**       
Values in the header filter are unselected initially, and a user can select values to apply a filter.
- **exclude**       
All values in the header filter are selected initially. A user can deselect values to change the filter.

This option changes when the user clicks the **Select All** checkbox in the [header filter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/'):

<table class="dx-table">
    <tr>
        <th>Select All</th>
        <th>filterType / filterValues</th>
    </tr>
    <tr>
        <td><img src="Content/images/doc/20_2/DataGrid/dg-selectall-unchecked.png"></td>
        <td><code>filterType: "include"</code><br><code>filterValues: null</code></td>
    </tr>
    <tr>
        <td><img src="Content/images/doc/20_2/DataGrid/dg-selectall-checked.png"></td>
        <td><code>filterType: "exclude"</code><br><code>filterValues: null</code></td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`FilterType`",
    values: "`Include` and `Exclude`"
}

#####See Also#####
- [Filtering API](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/6%20API '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API')
- **columns[]**.[filterValues](/api-reference/_hidden/GridBaseColumn/filterValues.md '{basewidgetpath}/Configuration/columns/#filterValues')