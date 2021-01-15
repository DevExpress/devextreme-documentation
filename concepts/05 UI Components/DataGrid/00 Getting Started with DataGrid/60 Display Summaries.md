Summaries can be divided into two groups:

- **Total summaries**       
Calculated against all grid records; configured in the [totalItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/') array.

- **Group summaries**       
Calculated for each data group; configured in the [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array.

Each summary item displays a value that is the result of applying an aggregate function to data. You can use [predefined aggregate functions](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/05%20Predefined%20Aggregate%20Functions.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Predefined_Aggregate_Functions/'), such as *"sum"*, *"avg"*, and *"count"*, or implement a [custom aggregate function](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/'). To apply an aggregate function, set the [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/'#summaryType) property.

The code below configures a group summary that counts grid records in each group:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    summaryType: "count"
                }]
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-summary>
            <dxi-group-item
                summaryType="count">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxSummary>
                    <DxGroupItem
                        summary-type="count"
                    />
                </DxSummary>
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxSummary,
        DxGroupItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxSummary,
            DxGroupItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        Column,
        // ...
        Summary,
        GroupItem
    } from 'devextreme-react/data-grid';

    // ...
    function App() {
        // ...
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Summary>
                        <GroupItem
                            summaryType="count"
                        />
                    </Summary>
                </DataGrid>
            </div>
        );
    }

    export default App;

---