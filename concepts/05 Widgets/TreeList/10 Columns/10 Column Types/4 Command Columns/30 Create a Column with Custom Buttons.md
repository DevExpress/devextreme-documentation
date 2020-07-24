The following code shows how to add a command column with custom [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/'). Note that the edit column should be declared explicitly because a custom command column replaces it.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete"]
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
    <dx-tree-list ... >
        <dxi-column type="buttons" [buttons]="['add', 'edit', 'delete']"></dxi-column>
        <dxi-column dataField="firstName"></dxi-column>
        <dxi-column dataField="lastName"></dxi-column>
        <dxi-column type="buttons">
            <dxi-button ... ></dxi-button>
            <!-- Declare and configure custom buttons here -->
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---
