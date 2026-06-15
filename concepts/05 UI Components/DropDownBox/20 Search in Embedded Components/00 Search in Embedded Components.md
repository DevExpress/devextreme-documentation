DropDownBox does not have built-in search. To add search functionality, embed a DataGrid or TreeList and implement filtering manually. The approach depends on whether you search a **regular field** or a **lookup column display value**.

## When to Use Each Approach

<table class="dx-table">
    <tr>
        <th>Implementation Aspect</th>
        <th>Search by regular field (no lookup column involved)</th>
        <th>Search by lookup column display value (lookup involved)</th>
    </tr>
    <tr>
        <td>Embedded component</td>
        <td>DataGrid / TreeList</td>
        <td>DataGrid / TreeList</td>
    </tr>
    <tr>
        <td>What user types</td>
        <td>Text that exists in the main dataset (same record).</td>
        <td>Text that exists in the main dataset, a related dataset (lookup display value), or both.</td>
    </tr>
    <tr>
        <td>Main API used for search</td>
        <td><a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue">DataSource.searchValue(value)</a></td>
        <td><a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr">DataSource.filter(filterExpr)</a></td>
    </tr>
    <tr>
        <td>Extra data source required</td>
        <td>No</td>
        <td>Yes, a lookup data source</td>
    </tr>
    <tr>
        <td>Filtering logic</td>
        <td>The DataSource performs searching internally using <code>searchExpr</code> + <code>searchValue</code></td>
        <td>You query the lookup data source by display field (for example, <code>Name contains text</code>), map results to keys, then build an <code>OR</code> filter like <code>[EmployeeID, '=', 1] or [EmployeeID, '=', 5]</code></td>
    </tr>
    <tr>
        <td>Reset search on close</td>
        <td><code>dataSource.searchValue('')</code></td>
        <td><code>dataSource.filter(null)</code></td>
    </tr>
</table>

[note] These approaches support single selection only. To implement multiple selection, use the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') component instead.

For complete working examples, see the following GitHub repositories:

- [DropDownBox with embedded DataGrid](https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget) (search by regular field)
- [DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist) (search by lookup column display value)

#####See Also#####
- [Search by Regular Field (DataGrid)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/05%20Search%20by%20Regular%20Field%20(DataGrid).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Regular_Field_(DataGrid)/')
- [Search by Lookup Column (TreeList)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/10%20Search%20by%20Lookup%20Column%20(TreeList).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Lookup_Column_(TreeList)/')