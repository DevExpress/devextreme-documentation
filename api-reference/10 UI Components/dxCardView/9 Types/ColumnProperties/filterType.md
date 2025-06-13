---
id: ColumnProperties.filterType
type: Enums.FilterType
default: 'include'
---
---
##### shortDescription
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/headerFilter.md '{basewidgetpath}/Configuration/headerFilter/').**visible** and [allowHeaderFiltering](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/allowHeaderFiltering.md '{basewidgetpath}/Configuration/columns/#allowHeaderFiltering') are `true`.

---
This property accepts the following values.

- **include**       
Values in the header filter are unselected initially, and a user can select values to apply a filter.
- **exclude**       
All values in the header filter are selected initially. A user can deselect values to change the filter.

This property changes when the user clicks the **Select all** button in the [header filter](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/') (only if header filter displays plain data):

<table class="dx-table">
    <tr>
        <th>Select all</th>
        <th>filterType / filterValues</th>
    </tr>
    <tr>
        <td>Button is not pressed</td>
        <td><code>filterType: "include"</code><br><code>filterValues: null</code></td>
    </tr>
    <tr>
        <td>Button is pressed</td>
        <td><code>filterType: "exclude"</code><br><code>filterValues: null</code></td>
    </tr>
</table>