When using DevExtreme DropDownBox with an embedded DataGrid or TreeList component, you may want to allow users to search and filter records in the dropdown. DataGrid and TreeList include a built-in search and filter UI that you can activate. You can also make the DropDownBox input field editable, so that it acts as a search box for the embedded control. In this case, you need to implement custom code, because DropDownBox does not have built-in search functionality. The implementation depends on whether a lookup field is involved in the search.

## When to Use Each Approach

<table class="dx-table">
    <tr>
        <th>Implementation Aspect</th>
        <th>Search by field values (no lookup column involved)</th>
        <th>Search by display values (lookup column involved)</th>
    </tr>
    <tr>
        <td>Embedded component</td>
        <td>DataGrid / TreeList</td>
        <td>DataGrid / TreeList</td>
    </tr>
    <tr>
        <td>User input</td>
        <td>Text that matches values in the main dataset (same record).</td>
        <td>Text that matches values in the main dataset, a related dataset (lookup display text), or both.</td>
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
        <td>The DataSource searches for values in fields specified in <a href="/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr">searchExpr</a></td>
        <td>You query the lookup data source by display field (for example, <code>Name contains text</code>), map results to keys, then build an <code>OR</code> filter such as <code>[EmployeeID, '=', 1] or [EmployeeID, '=', 5]</code></td>
    </tr>
    <tr>
        <td>Reset search on close</td>
        <td><code>dataSource.searchValue('')</code></td>
        <td><code>dataSource.filter(null)</code></td>
    </tr>
</table>

[note] These implementation strategies support single selection only. To implement multiple selection, use the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') component instead.

For complete working examples, see the following GitHub repositories:

- [DropDownBox with embedded DataGrid](https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget) (search by regular field)
- [DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist) (search by lookup column display value)

#####See Also#####
- [Search by Regular Field (DataGrid)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/05%20Search%20by%20Regular%20Field%20(DataGrid).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Regular_Field_(DataGrid)/')
- [Search by Lookup Column (TreeList)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/10%20Search%20by%20Lookup%20Column%20(TreeList).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Lookup_Column_(TreeList)/')