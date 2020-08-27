The **DataGrid** displays all columns from the **columns** array. To hide a column, set its [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible) option to **false**. Hidden columns appear in the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/). Users can restore hidden columns from it. To enable the column chooser. set the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#enabled) option to **true**. If a column should not be visible even in the column chooser, simply do not declare it in the **columns** array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
            // ...
            {
                dataField: "PostalCode",
                visible: false
            }],
            columnChooser: { enabled: true },
        });
    });

---

The next step describes how to sort data in code and in the UI.