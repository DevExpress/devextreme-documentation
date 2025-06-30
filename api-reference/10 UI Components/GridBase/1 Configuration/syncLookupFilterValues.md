---
id: GridBase.Options.syncLookupFilterValues
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to show only relevant values in the [header filter](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/') and [filter row](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/').

---
The following table shows how the component behaves when you assign different values to this property. The 'State' column is filtered by the 'Alabama' value. If you set the **syncLookupFilterValues** to `false`, the 'City' column's header filter and filter row display all cities instead of showing cities within Alabama only.

<table class="dx-table">
    <tr>
        <th>Filter type</th>
        <th><code>false</code></th>
        <th><code>true</code></th>
    </tr>
    <tr>
        <td>Filter row</td>
        <td><img src="/images/DataGrid/sync-lookup-filter-values/filter-row-false.png" alt="Filter row is not synced with Grid values" /></td>
        <td><img src="/images/DataGrid/sync-lookup-filter-values/filter-row-true.png" alt="Filter row is synced with Grid values" /></td>
    </tr>
    <tr>
        <td>Header filter</td>
        <td><img src="/images/DataGrid/sync-lookup-filter-values/header-filter-false.png" alt="Header filter is not synced with Grid values" /></td>
        <td><img src="/images/DataGrid/sync-lookup-filter-values/header-filter-true.png" alt="Header filter is synced with Grid values" /></td>
    </tr>
</table>

[note]

- When **syncLookupFilterValues** and **remoteOperations**.[filtering]({basewidgetpath}/Configuration/remoteOperations/#filtering) are both enabled, {WidgetName} performs additional server requests with the `group` parameter to fetch filter values for lookup columns. The component performs these `group` requests each time users start filtering lookup columns after applying filters to other {WidgetName} columns.

- If the [filter panel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '{basewidgetpath}/Configuration/filterPanel/') is visible and at least one column includes **headerFilter**.[dataSource](/api-reference/40%20Common%20Types/15%20grids/ColumnHeaderFilter/dataSource.md '{basewidgetpath}/Configuration/columns/headerFilter/#dataSource') or **lookup**.[dataSource](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource'), disable this property. Otherwise, the filter panel may not display data correctly.

- If the lookup column's data source lacks data that corresponds to the column data, the header filter may load incorrectly. To prevent this issue, you can either disable the **syncLookupFilterValues** property or the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option for the lookup column data source.

[/note]