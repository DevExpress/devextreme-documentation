Users can sort grid records by a single or multiple columns. Use the **sorting**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sorting/#mode) option to set the mode. This tutorial uses the default sorting mode - single. 

You can also set a column's [sortOrder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder) and [sortIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex) options to specify initial sorting settings. **sortIndex** applies only in multiple sorting mode.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
                dataField: "Country",
                sortOrder: "asc",
            },
            // ...
            ],
            // sorting: { mode: "single" },
        });
    });

---

Run the code and ensure that grid records are sorted by the `Country` column. Click a column header to sort the records by another column. Next, we will configure filtering and searching.