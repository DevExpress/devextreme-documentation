When the width of all columns exceeds the UI component's width, users can scroll the TreeList horizontally. If you set the [columnFixing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnFixing/).[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnFixing/#enabled) property to **true**, users can use a column header's context menu to show certain columns in the view regardless of how far they scroll the TreeList.

You can also enable a column's [fixed](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixed) property in code. This fixes the column to the UI component's left edge. To change the position, set the [fixedPosition](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixedPosition) property.

The following code fixes the `FullName` column to the default position and allows users to fix and unfix columns at runtime:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columnFixing: { enabled: true },
            columns: [{
                dataField: "FullName", 
                fixed: true
            },
            // ...
            ],
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <dxi-column
            dataField="FullName"
            [fixed]="true">
        </dxi-column>
        <!-- ... -->
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <DxColumn
                    data-field="FullName"
                    :fixed="true">
                </DxColumn>
                <!-- ... -->
                <DxColumnFixing :enabled="true" />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        DxColumn,
        DxColumnFixing
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxColumnFixing
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
        TreeList,
        Column,
        ColumnFixing
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <Column
                        dataField="FullName"
                        fixed={true}>
                    </Column>
                    {/* ... */}
                    <ColumnFixing enabled={true} />
                </TreeList>
            </div>
        );
    }

    export default App;

---
