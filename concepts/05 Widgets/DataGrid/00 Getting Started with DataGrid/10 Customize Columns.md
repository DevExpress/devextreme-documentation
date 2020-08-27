To customize grid columns, declare the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. This array can contain objects (column configurations) or text strings (data field names). Text strings can be used if you do not need to specify any column options except the [dataField](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField).

The **DataGrid** displays all columns from the **columns** array. To hide a column, set its [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible) option to **false**. Hidden columns appear in the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/). Users can restore hidden columns from it. To enable the column chooser. set the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#enabled) option to **true**. If a column should not be visible even in the column chooser, simply do not declare it in the **columns** array.

To reorder grid columns, change their order in the **columns** array. Users can reorder columns if you enable the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering) option.

Grid columns have equal widths by default. You can set a [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) for individual columns or specify that all columns should adjust their widths to their contents ([columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth)). Users can resize columns if you enable the [allowColumnResizing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing) option.

The code below declares nine grid columns. Initial width is specified for the `BirthDate` and `HireDate` columns. The width of other columns depends on their contents. The `PostalCode` column is hidden into the column chooser. Users can resize and reorder the columns.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
                dataField: "FullName"
            }, {
                dataField: "Position"
            }, {
                dataField: "BirthDate", 
                dataType: "date",
                width: 150,
            }, {
                dataField: "HireDate", 
                dataType: "date"
                width: 150,
            }, {
                dataField: "City"
            }, {
                dataField: "Country"
            },
            "Address",
            "HomePhone",
            {
                dataField: "PostalCode",
                visible: false
            }],
            allowColumnResizing: true,
            allowColumnReordering: true,
            columnAutoWidth: true,
            columnChooser: { enabled: true },
        });
    });

---

The next step describes how to sort data in code and in the UI.