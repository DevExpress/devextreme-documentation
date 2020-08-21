To customize grid columns, declare the [columns]() array. This array can contain objects or text strings. Objects are column configurations; text strings are data field names. Text strings can be used if, of all column options, you need to specify only the [dataField]().

The **DataGrid** displays all columns from the **columns** array. To hide a column, set its [visible]() option to **false**. This column will appear in the [columnChooser]() - a panel that displays hidden columns. Users can restore a hidden column from the column chooser. To enable this element. set the **columnChooser**.[enabled]() option to **true**. If a column should not be visible even in the column chooser, simply do not declare it in the **columns** array.

Grid columns have the same order in the UI as they have in the **columns** array. Users can reorder the columns if you enable the [allowColumnReordering]() option.

The columns also have equal widths by default. You can set a [width]() for individual columns or specify that all columns should adjust their widths to their contents ([columnAutoWidth]()). Users can resize columns if you enable the [allowColumnResizing]() option.

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
                dataType: "date"
            }, {
                dataField: "HireDate", 
                dataType: "date"
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
            columnChooser: { enabled: true },
        });
    });

---