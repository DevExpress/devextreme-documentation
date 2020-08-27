Grid records can be grouped by values of one or multiple columns. To group records, users should drag and drop column headers onto the [groupPanel](). Enable the **groupPanel**.[visible]() option to display this UI element.

You can also group records programmatically. Specify the [groupIndex] for the columns by which records should be grouped. In this tutorial, the groupIndex is specified for the `Country` column:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            columns: [
            // ...
            {
                dataField: "Country",
                // ...
                groupIndex: 0,
            },
            // ...
            ],
            groupPanel: { visible: true },
        });
    });

---

If you run the code, you should see that records are grouped by the `Country` column. This column's header is on the group panel. Drag and drop column headers to and from the group panel to change the grouping.

In the next step, we will configure data validation and allow users to edit data.