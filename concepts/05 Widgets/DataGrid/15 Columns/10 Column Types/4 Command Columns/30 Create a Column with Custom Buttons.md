The following code shows how to add a command column with custom [buttons](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/'). Note that the editing column should be declared explicitly because a custom command column replaces it.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["edit", "delete"]
            }, 
            "firstName",
            "lastName", {
                type: "buttons",
                buttons: [
                    // Declare and configure custom buttons here
                ]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons" [buttons]="['edit', 'delete']"></dxi-column>
        <dxi-column dataField="firstName"></dxi-column>
        <dxi-column dataField="lastName"></dxi-column>
        <dxi-column type="buttons">
            <dxi-button ... ></dxi-button>
            <!-- Declare and configure custom buttons here -->
        </dxi-column>
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
