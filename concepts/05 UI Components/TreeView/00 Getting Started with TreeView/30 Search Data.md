Enable the [searchEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) property to add the search bar. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchMode) property to specify whether items should contain (default), start with, or match the search string. In this tutorial, the search mode is *"startswith"*:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeView({
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
            <DxTreeView ... >
                <!-- ... -->
                <DxFilterRow :visible="true" />
                <DxSearchPanel :visible="true" />
            </DxTreeView>
        </div>
    </template>

    <script>
    import {
        DxTreeView,
        // ...
        DxFilterRow,
        DxSearchPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeView,
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
        TreeView,
        // ...
        FilterRow,
        SearchPanel
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeView ... >
                    {/* ... */}
                    <FilterRow visible={true} />
                    <SearchPanel visible={true} />
                </TreeView>
            </div>
        );
    }

    export default App;

---

Run the code and enter a value in a filter row cell or the search panel. Data is filtered according to this value.