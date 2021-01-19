Users can add, delete, and update grid data. To enable these operations, assign **true** to the corresponding fields of the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/') object. You can set a column's [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing') property to **false** if its data should not be edited.

Grid data can be edited in several modes. Set the **editing**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode') property to specify the mode.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true, 
                allowDeleting: true,
                mode: 'row' // 'batch' | 'cell' | 'form' | 'popup'
            },
            columns: [
                { dataField: 'id', allowEditing: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true"
            [allowDeleting]="true"
            mode="row"> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
        </dxo-editing>
        <dxi-column dataField="id" [allowEditing]="false"></dxi-column>
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
            <DxEditing
                :allow-updating="true"
                :allow-adding="true"
                :allow-deleting="true"
                mode="row" /> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
            <DxColumn data-field="id" :allow-editing="false" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxEditing,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Editing,
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Editing
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true}
                        mode="row" /> {/* 'batch' | 'cell' | 'form' | 'popup' */}
                    <Column dataField="id" allowEditing={false} />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

The following sections detail the **DataGrid**'s appearance and behavior in each editing mode.
