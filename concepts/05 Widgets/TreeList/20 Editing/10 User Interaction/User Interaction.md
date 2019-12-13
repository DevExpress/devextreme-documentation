The **TreeList** widget allows a user to add, delete and update data. Assign **true** to the corresponding field of the [editing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/') object to enable an operation. You can set a column's [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowEditing') option to **false** if its data should not be edited.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column dataField="id" [allowEditing]="false"></dxi-column>
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

With the **TreeList** you can edit data in several modes. Use the **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode') option to specify it. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'row' // 'batch' | 'cell' | 'form' | 'popup'
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            mode="row"> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
        </dxo-editing>
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

The following sections detail the **TreeList**'s appearance and behavior in each editing mode.
