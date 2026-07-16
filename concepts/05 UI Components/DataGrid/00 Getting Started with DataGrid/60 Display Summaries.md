#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/", name: "DataGrid - Total Summary" }
#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/", name: "DataGrid - Group Summary" }

DataGrid supports two types of data summaries:

- **Total summaries**: Calculated against all grid records. Configured in the [totalItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/') array.
- **Group summaries**: Calculated for each data group. Configured in the [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array.

Each summary item applies an aggregate function specified in [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') to display summarized values. You can use [predefined aggregate functions](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/05%20Predefined%20Aggregate%20Functions.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Predefined_Aggregate_Functions/') (such as *"sum"*, *"avg"*, and *"count"*) or define a [custom aggregate function](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/'). This tutorial displays a *"count"* group summary:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        summary: {
            groupItems: [{
                summaryType: "count"
            }]
        },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Summary(s => s
            .GroupItems(groupItems => {
                groupItems.Add().SummaryType(SummaryType.Count);
            })
        )
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-summary>
            <dxi-data-grid-group-item
                summaryType="count">
            </dxi-data-grid-group-item>
        </dxo-data-grid-summary>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxSummary>
                <DxGroupItem summary-type="count" />
            </DxSummary>
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxSummary, DxGroupItem } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Summary, GroupItem } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid>
                    <Summary>
                        <GroupItem summaryType="count" />
                    </Summary>
                    {/* ... */}
                </DataGrid>
            </div>
        );
    }

---
