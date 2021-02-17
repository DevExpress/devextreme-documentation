With the DataGrid UI component, a user can sort by single and multiple columns. Use the **sorting**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sorting/#mode') property to specify the current sorting mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            sorting: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-sorting
            mode="single"> <!-- or "multiple" | "none" -->
        </dxo-sorting>
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
        <DxDataGrid>
            <DxSorting mode="single"/> <!-- or "multiple" | "none" -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxSorting } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSorting
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Sorting } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Sorting mode="single"/> {/* or "multiple" | "none" */}
                </DataGrid>
            );
        }
    }
    export default App;

---

In single mode, the user can click a column header to sort by the column. Subsequent clicks on the same header reverse the sort order. When the user sorts by a column, the sorting settings of other columns are canceled. 

In multiple mode, the user clicks a column header while pressing the Shift key to sort by the column. Sorting settings of other columns remain intact.

In both modes, the user can use the column header's context menu to apply sorting.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Sorting](/images/DataGrid/visual_elements/sorting_sorted_columns.png)

To cancel a column's sorting settings, the user clicks the column's header while pressing Ctrl or uses the context menu:

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Sorting](/images/DataGrid/visual_elements/sorting_context_menu.png)

To disable sorting in the whole UI component, set the **sorting**.**mode** property to *"none"*; to disable sorting only in a specific column, use its [allowSorting](/api-reference/_hidden/GridBaseColumn/allowSorting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowSorting') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                allowSorting: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [allowSorting]="false"></dxi-column>
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
        <DxDataGrid>
            <DxColumn :allow-sorting="false"/>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Column allowSorting={false}/>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleSorting/"
}

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
