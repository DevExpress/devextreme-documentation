In order to sort grid records by a particular column at design-time, use the [sortOrder](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/sortOrder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder') option for this column. In the following code, the records shown by the grid will be initially sorted by the *"Position"* column.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            dataField: 'Position',
            sortOrder: 'asc'
        }, {
            // ...
        }]    
    }

If you need to sort by a single column, setting the **sortOrder** option for that column is sufficient. If, however, you need to sort by multiple columns, you will need to specify the order in which these columns are sorted. In this case, specify the [sortIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/sortIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex') option in addition to **sortOrder**. In the following code, the records shown by the grid will be sorted first by the *"Name"* column and then, for records with equal *"Name"* values, by the *"Position"* column.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            dataField: 'Position',
            sortOrder: 'asc',
            sortIndex: 1
        }, {
            // ...
            dataField: 'Name',
            sortOrder: 'asc',
            sortIndex: 0
        }, {
            // ...
        }]    
    }

Additionally, you can make the initially set sorting impossible for an end-user to change. For this purpose, turn the sorting feature off completely by setting the **sorting** | [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sorting/#mode') option to *'none'*.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        sorting: { mode: 'none' } //   Disables the sorting feature
    }