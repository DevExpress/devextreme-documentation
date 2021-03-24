The TreeList includes the following UI elements used to filter and search data:

- [filterRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/)
- [headerFilter](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/)
- [filterPanel](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterPanel/) with [filterBuilder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilder)
- [searchPanel](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/)

In this tutorial, the **filterRow** and **searchPanel** are displayed:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            filterRow: { visible: true },
            searchPanel: { visible: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <!-- ... -->
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxo-search-panel [visible]="true"></dxo-search-panel>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <!-- ... -->
                <DxFilterRow :visible="true" />
                <DxSearchPanel :visible="true" />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        // ...
        DxFilterRow,
        DxSearchPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import 'devextreme/dist/css/dx.light.css';

    import {
        TreeList,
        // ...
        FilterRow,
        SearchPanel
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <FilterRow visible={true} />
                    <SearchPanel visible={true} />
                </TreeList>
            </div>
        );
    }

    export default App;

---

Run the code and enter a value in a filter row cell or the search panel. Data is filtered according to this value.