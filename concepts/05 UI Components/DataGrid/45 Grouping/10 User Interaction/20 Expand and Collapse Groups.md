A user expands or collapses a group row by clicking its expand/collapse button. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Grouping Expanded and Collapsed Rows](/images/DataGrid/GroupsExpandedCollapsed.png)

Set the **grouping**.[expandMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/expandMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#expandMode') property to *"rowClick"* to allow a user to expand or collapse a group row by clicking it as it could be difficult to press this button on small-screen devices.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                expandMode: "rowClick"  // or "buttonClick"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            expandMode="rowClick">  <!-- or "buttonClick" -->
        </dxo-grouping>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... > 
            <DxGrouping expand-mode="rowClick" /> <!-- or "buttonClick" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxGrouping
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxGrouping
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Grouping,
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Grouping expandMode="rowClick" /> {/* or "buttonClick" */}
                </DataGrid>
            );
        }
    }
    export default App;

---

You can prevent a user from expanding and collapsing groups by assigning **false** to the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#allowCollapsing') property. After that, you can expand and collapse groups only [programmatically](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Expand_and_Collapse_Groups').

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                autoExpandAll: true, 
                allowCollapsing: false
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            [autoExpandAll]="true"
            [allowCollapsing]="false">
        </dxo-grouping>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... > 
            <DxGrouping
                :auto-expand-all="true"
                :allow-collapsing="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxGrouping
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxGrouping
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Grouping,
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Grouping
                        autoExpandAll={true}
                        allowCollapsing={false}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---
