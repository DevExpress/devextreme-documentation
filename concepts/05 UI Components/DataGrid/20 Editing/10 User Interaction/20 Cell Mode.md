In the cell mode, a user edits data cell by cell. Changes are saved once a cell loses the focus, or discarded if a user presses Esc. An added row is saved only when the focus is shifted from it. Choose this mode if any changes should be saved to the data source immediately.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Editing Cell Mode](/images/DataGrid/editing/cell_mode.png)

If you [validate data](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Data_Validation'), a cell is locked in the editing state until a user enters a valid value or clicks the *"Cancel Changes"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Editing Cell Mode Validation](/images/DataGrid/editing/cell_mode_validation.png)

Clicking the *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the [confirmDelete](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/confirmDelete.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#confirmDelete') property to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: 'cell', 
                confirmDelete: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing 
            mode="cell" 
            [allowDeleting]="true"
            [confirmDelete]="false">
        </dxo-editing>
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
                mode="row"
                :allow-deleting="true"
                :confirm-delete="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import { DxDataGrid, DxEditing } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid, 
            DxEditing
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { DataGrid, Editing } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Editing
                        mode="row"
                        confirmDelete={false}
                        allowDeleting={true} 
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CellEditingAndEditingAPI/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Data_Validation')
