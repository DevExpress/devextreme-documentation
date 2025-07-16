The DataGrid component allows you configure core features such as sorting, filtering, search, grouping, and selection. Editing is one of these features. Enable it to allow users to add, edit, and delete rows.

This guide explains how to create a task list where users can check off tasks, remove them, and add new ones. To do this, specify the following editing options:

- [allowAdding](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding)  
Set to `true` - allow users to add new rows.

- [allowDeleting](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowDeleting)  
Set to `true` - allow users to remove rows.

- [allowUpdating](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating)  
Set to `true` - allow users to update rows.

- [mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode)  
Change the mode from default *"row"* to *"cell"* for easy task status changes.

- [newRowPosition](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#newRowPosition)  
Set new rows to appear at the *"last"* position for a top-to-bottom task list.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#task-grid").dxDataGrid({
            // ...
            editing: {
                mode: "cell",
                allowUpdating: true,
                allowAdding: true,
                allowDeleting: true,
                newRowPosition: "last"
            },
        });
    });

##### Angular
        
    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-data-grid-editing 
            mode="row" 
            [allowUpdating]="true" 
            [allowDeleting]="true" 
            [allowAdding]="true"
            newRowPosition="last"
        ></dxo-data-grid-editing>
    </dx-data-grid>

Remember to import the `DxoDataGridEditingComponent` component:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridComponent, DxiDataGridColumnComponent, DxoDataGridEditingComponent } from 'devextreme-angular/ui/data-grid';
    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxDataGridComponent, DxiDataGridColumnComponent, DxoDataGridEditingComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { ... }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="dashboard">
            <DxProgressBar id="progress" />
            <DxDataGrid ... >
                <DxEditing 
                    mode="row"
                    :allow-updating="true"
                    :allow-adding="true"
                    :allow-deleting="true"
                    new-row-position="last"
                />
            </DxDataGrid>
        </div>
    </template>
    <script setup lang="ts">
    import DxDataGrid, { DxColumn, DxEditing } from 'devextreme-vue/data-grid';
    // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
    // ...

    function App(): JSX.Element {
        return(
            <div id="dashboard">
                <ProgressBar id="progress" />
                <DataGrid ... >
                    <Editing 
                        mode="row"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true}
                        newRowPosition="last"
                    />
                </DataGrid>
            </div>
        );
    }

    export default App;

---