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

- When **syncLookupFilterValues** and **remoteOperations**.[filtering](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/filtering.md '{basewidgetpath}/Configuration/remoteOperations/#filtering') are both enabled, {WidgetName} performs additional server requests with the `group` parameter to fetch filter values for lookup columns. The component performs these `group` requests when users open a lookup column filter editor after applying other column filters.

- To enable pagination in the filter row and header filter of lookup columns when **syncLookupFilterValues** is `true`, specify **columns[]**.[calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue') along with **DataSource**.[paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate'). When using a remote data source, enable **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '{basewidgetpath}/Configuration/remoteOperations/#groupPaging') to configure remote pagination.

- If the [filterPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '{basewidgetpath}/Configuration/filterPanel/') is visible and **columns**.**headerFilter**.[dataSource](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '{basewidgetpath}/Configuration/columns/headerFilter/#dataSource') or **columns**.**lookup**.[dataSource](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource') are specified, disable **syncLookupFilterValues** to ensure the **filterPanel** displays data correctly.

- If a lookup data source lacks fields corresponding to column data, the header filter may load incorrectly. To prevent this issue, disable **syncLookupFilterValues** or the **DataSource**.[paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') property of the lookup data source.

[/note]