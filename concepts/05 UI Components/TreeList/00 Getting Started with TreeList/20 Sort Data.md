The **sorting**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/sorting/#mode) property specifies whether users can sort records by single or multiple columns. This tutorial uses the default sorting mode - single. 

You can also set a column's [sortOrder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortOrder) and [sortIndex](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex) properties to specify the initial sort settings. **sortIndex** applies only in multiple sorting mode.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columns: [{
                dataField: "State",
                sortOrder: "asc",
            },
            // ...
            ],
            // sorting: { mode: "single" },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <!-- ... -->
        <dxi-column
            dataField="State"
            sortOrder="asc">
        </dxi-column>
        <!-- <dxo-sorting [mode]="single"></dxo-sorting> -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <!-- ... -->
                <DxColumn
                    data-field="State"
                    sort-order="asc">
                </DxColumn>
                <!-- <DxSorting mode="single" /> -->
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        DxColumn,
        // ...
        // DxSorting
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import 'devextreme/dist/css/dx.light.css';

    import {
        TreeList,
        Column,
        // ...
        // Sorting
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <Column
                        dataField="State"
                        sortOrder="asc">
                    </Column>
                    {/* <Sorting mode="single" /> */}
                </TreeList>
            </div>
        );
    }

    export default App;


---
