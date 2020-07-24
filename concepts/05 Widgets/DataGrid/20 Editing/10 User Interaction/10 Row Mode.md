In this mode a user edits data row by row. When a user clicks an *"Edit"* button, the corresponding row enters the editing state, and the *"Save"* and *"Cancel"* buttons appear in the [edit column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/'). The widget saves changes only if the *"Save"* button is clicked. If a user starts editing another row, sorts or filters data, it discards the changes.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Row Mode Editing State](/images/DataGrid/editing/row_mode_editing_state.png)

Clicking the *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. [confirmDelete](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/confirmDelete.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#confirmDelete') option to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                // ...
                mode: 'row',
                allowDeleting: true,
                confirmDelete: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing 
            mode="row" 
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Data_Validation')
