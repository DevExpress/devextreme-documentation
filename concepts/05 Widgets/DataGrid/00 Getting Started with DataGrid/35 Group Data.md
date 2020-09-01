Grid records can be grouped by values of one or multiple columns. To group records, users should drag and drop column headers onto the [groupPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/). Enable the **groupPanel**.[visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible) option to display this UI element.

You can also group records programmatically. Specify the [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) for the columns by which records should be grouped. In this tutorial, the groupIndex is specified for the `Country` column:

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

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column
            dataField="Country"
            ...
            [groupIndex]="0">
        </dxi-column>
        <dxo-group-panel [visible]="true"></dxo-group-panel>
    </dx-data-grid>

---

If you run the code, you should see that records are grouped by the `Country` column. This column's header is on the group panel. Drag and drop column headers to and from the group panel to change the grouping.

In the next step, we will configure data validation and allow users to edit data.