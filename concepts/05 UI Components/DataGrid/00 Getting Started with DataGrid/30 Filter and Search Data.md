The **DataGrid** includes the following UI elements used to filter and search data:

- [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/')
- [headerFilter](/api-reference/_hidden/GridBaseColumn/headerFilter '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/')
- [filterPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterPanel/') with [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#filterBuilder')
- [searchPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/')

In this tutorial, the **filterRow** and **searchPanel** are displayed:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            filterRow: { visible: true },
            searchPanel: { visible: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxo-search-panel [visible]="true"></dxo-search-panel>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxFilterRow :visible="true" />
                <DxSearchPanel :visible="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxFilterRow,
        DxSearchPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxFilterRow,
            DxSearchPanel
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
        // ...
        FilterRow,
        SearchPanel
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <FilterRow visible={true} />
                    <SearchPanel visible={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;

---

Run the code and enter a value in a filter row cell or the search panel. Grid data is filtered according to this value.