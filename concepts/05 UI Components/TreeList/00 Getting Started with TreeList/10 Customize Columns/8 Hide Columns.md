The TreeList displays all columns from the **columns** array. To hide a column, set its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible') property to **false**. Hidden columns appear in the [columnChooser](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnChooser '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/'). Users can restore hidden columns from it. To enable the column chooser, set the **columnChooser**.[enabled](/api-reference/40%20Common%20Types/00%20Grids/ColumnChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled') property to **true**. If a column should not be visible in the column chooser, do not declare it in the **columns** array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columns: [
            // ...
            {
                dataField: "Email",
                visible: false
            }],
            columnChooser: { enabled: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <!-- ... -->
        <dxi-column dataField="Email" [visible]="false"></dxi-column>
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <!-- ... -->
                <DxColumn data-field="Email" :visible="false" />
                <DxColumnChooser :enabled="true" />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        DxColumn,
        DxColumnChooser
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxColumnChooser
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
        ColumnChooser
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <Column dataField="Email" visible={false} />
                    <ColumnChooser enabled={true} />
                </TreeList>
            </div>
        );
    }

    export default App;

---
