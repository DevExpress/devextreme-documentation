Summaries display a synopsis of grid data. All summaries can be divided into two groups:

- **Total summaries**       
Calculated by values from the whole grid or a single column; configured in the [totalItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/) array.

- **Group summaries**       
Calculated by values from each group; configured in the [groupItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) array.

Each summary item displays a value that is a product of applying an aggregate function to data. The **DataGrid** supports [predefined aggregate functions](/Documentation/Guide/Widgets/DataGrid/Summaries/Predefined_Aggregate_Functions/), such as *"sum"*, *"avg"*, and *"count"*, and allows you to implement a [custom aggregate function](/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/). To specify the applied aggregate function, set the [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) option.

The code below configures a total summary that counts all grid records. The [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn) option specifies the column in which this summary is displayed.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
                // ...
                "HomePhone",
                // ...
            ],
            summary: {
                totalItems: [{
                    summaryType: "count",
                    showInColumn: "HomePhone"
                }]
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column dataField="HomePhone"></dxi-column>
        <!-- ... -->
        <dxo-summary>
            <dxi-total-item
                summaryType="count"
                showInColumn="HomePhone">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

---

In the following step, we will add an expandable section that displays information about an employee to each grid row.