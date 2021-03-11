The DataGrid UI component supports single and multiple row selection. Use the **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode') property to change the current mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="single"> <!-- "multiple" | "none" -->
        </dxo-selection>
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
            <DxSelection mode="single" /> <!-- "multiple" | "none" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSelection
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Selection
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Selection mode="single" /> {/* "multiple" | "none" */}
                </DataGrid>
            );
        }
    }
    export default App;
    
---

In the single mode, only one row can be selected at a time, while in the multiple mode, several rows can be selected with check boxes that appear in the selection column.


![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Sorting](/images/DataGrid/selection.png)

The check box in the column's header selects all rows or only the currently rendered ones, depending on the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#selectAllMode'). Note that clicking this check box selects/deselects only those rows that meet filtering conditions if a filter is applied.

---

##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                selectAllMode: "page" // or "allPages"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            selectAllMode="page">   <!-- or "allPages" -->
        </dxo-selection>
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
            <DxSelection
                mode="single"
                select-all-mode="page" /> <!-- or "allPages" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSelection
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Selection
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Selection
                        mode="single"
                        selectAllMode="page" /> {/* or "allPages" */}
                </DataGrid>
            );
        }
    }
    export default App;

---

You can prevent users from selecting all rows by setting the **selection**.[allowSelectAll](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#allowSelectAll') property to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                allowSelectAll: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="false">
        </dxo-selection>
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
            <DxSelection
                mode="multiple"
                :allow-select-all="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSelection
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Selection
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Selection
                        mode="multiple"
                        allowSelectAll={false}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

The [showCheckBoxesMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#showCheckBoxesMode') property specifies when the UI component renders check boxes in the selection column. For example, the following code tells the UI component to never render them, though a user can still select rows using [keyboard shortcuts](/concepts/05%20UI%20Components/DataGrid/75%20Keyboard%20Support.md '/Documentation/Guide/UI_Components/DataGrid/Keyboard_Support/'):

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                showCheckBoxesMode: "none"    // or "onClick" | "onLongTap" | "always" 
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            showCheckBoxesMode="none">    <!-- or "onClick" | "onLongTap" | "always" -->
        </dxo-selection>
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
            <DxSelection
                mode="multiple"
                :show-check-boxes-mode="none" /> <!-- or "onClick" | "onLongTap" | "always" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSelection
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Selection
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Selection
                        mode="multiple"
                        showCheckBoxesMode="none" /> {/* or "onClick" | "onLongTap" | "always" */}
                </DataGrid>
            );
        }
    }
    export default App;
    
---

<a href="/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/" class="button orange small fix-width-155" target="_blank">Single Selection Demo</a>
<a href="/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/" class="button orange small fix-width-155" target="_blank">Multiple Selection Demo</a>

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
- [Deferred Selection](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection')
