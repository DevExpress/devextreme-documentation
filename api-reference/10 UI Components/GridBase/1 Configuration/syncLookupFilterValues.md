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