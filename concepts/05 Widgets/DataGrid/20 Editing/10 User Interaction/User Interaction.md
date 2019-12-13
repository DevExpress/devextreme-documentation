The **DataGrid** widget allows a user to add, delete and update data. Assign **true** to the corresponding field of the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/') object to enable an operation. You can set a column's [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowEditing') option to **false** if its data should not be edited.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true, 
                allowDeleting: true 
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
            [allowDeleting]="true">
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
    
---

With the **DataGrid** you can edit data in several modes. Use the **editing**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') option to specify it. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: 'row' // 'batch' | 'cell' | 'form' | 'popup'
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            mode="row"> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
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
    
---

The following sections detail the **DataGrid**'s appearance and behavior in each editing mode.
