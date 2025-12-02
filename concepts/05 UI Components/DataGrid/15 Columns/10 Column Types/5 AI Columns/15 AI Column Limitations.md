Note the following AI column limitations:

- AI columns cannot be integrated within [band columns](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Band_Columns/).
- {WidgetName} does not save AI-generated values to the component data source and does not support AI data editing, filtering, searching, and sorting.
- AI columns ignore the following [columns[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) properties:

<table class="multicolumn-list">
    <tr>
        <td>
            <ul>
                <li><strong>allowEditing</strong></li>
                <li><strong>allowExporting</strong></li>
                <li><strong>allowFiltering</strong></li>
                <li><strong>allowGrouping</strong></li>
                <li><strong>allowHeaderFiltering</strong></li>
                <li><strong>allowSearch</strong></li>
                <li><strong>allowSorting</strong></li>
                <li><strong>autoExpandGroup</strong></li>
                <li><strong>buttons[]</strong></li>
                <li><strong>calculateCellValue</strong></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><strong>calculateFilterExpression</strong></li>
                <li><strong>calculateGroupValue</strong></li>
                <li><strong>calculateSortValue</strong></li>
                <li><strong>columns</strong></li>
                <li><strong>dataField</strong></li>
                <li><strong>dataType</strong></li>
                <li><strong>editCellTemplate</strong></li>
                <li><strong>editorOptions</strong></li>
                <li><strong>falseText</strong></li>
                <li><strong>filterOperations</strong></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><strong>filterType</strong></li>
                <li><strong>filterValue</strong></li>
                <li><strong>filterValues</strong></li>
                <li><strong>format</strong></li>
                <li><strong>formItem</strong></li>
                <li><strong>groupCellTemplate</strong></li>
                <li><strong>groupIndex</strong></li>
                <li><strong>headerFilter</strong></li>
                <li><strong>isBand</strong></li>
                <li><strong>lookup</strong></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><strong>ownerBand</strong></li>
                <li><strong>selectedFilterOperation</strong></li>
                <li><strong>setCellValue</strong></li>
                <li><strong>showEditorAlways</strong></li>
                <li><strong>showWhenGrouped</strong></li>
                <li><strong>sortIndex</strong></li>
                <li><strong>sortingMethod</strong></li>
                <li><strong>sortOrder</strong></li>
                <li><strong>trueText</strong></li>
                <li><strong>validationRules</strong></li>
            </ul>
        </td>
    </tr>
</table>