The **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sorting/#mode') property specifies whether users can sort grid records by single or multiple columns. This tutorial uses the default sorting mode - single. 

You can also set a column's [sortOrder](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortOrder) and [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortIndex') properties to specify the initial sorting settings. **sortIndex** applies only in multiple sorting mode.

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

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column
            dataField="Country"
            sortOrder="asc">
        </dxi-column>
        <!-- <dxo-sorting [mode]="single"></dxo-sorting> -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxColumn
                    data-field="Country"
                    sort-order="asc">
                </DxColumn>
                <!-- <DxSorting mode="single" /> -->
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        // ...
        // DxSorting
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            // ...
            // DxSorting
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid,
        Column,
        // ...
        // Sorting
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Column
                        dataField="Country"
                        sortOrder="asc">
                    </Column>
                    {/* <Sorting mode="single" /> */}
                </DataGrid>
            </div>
        );
    }

    export default App;


---

Run the code and ensure that grid records are sorted by the `Country` column. Click a column header to sort the records by another column.