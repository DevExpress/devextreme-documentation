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

- If `filtering` is enabled in [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') and this property is set to `true` (default value), the component uses the `group` parameter to fetch values. As a result, lookup columns can lose pagination (the DataSource.[paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') property has no effect). To solve the issue, disable this property.

- If [filter panel]({basewidgetpath}/Configuration/filterPanel/) is visible and at least one column includes **headerFilter**.[dataSource]({basewidgetpath}/Configuration/columns/headerFilter/#dataSource) or **lookup**.[dataSource]({basewidgetpath}/Configuration/columns/lookup/#dataSource), disable this property. Otherwise, the filter panel may not display data correctly.

[/note]