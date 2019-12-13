In the cell mode, a user edits data cell by cell. Changes are saved once a cell loses the focus, or discarded if a user presses Esc. An added row is saved only when the focus is shifted from it. Choose this mode if any changes should be saved to the data source immediately.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Cell Mode](/images/treelist/editing/cell_mode.png)

If you [validate data](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation'), a cell is locked in the editing state until a user enters a valid value or clicks the *"Cancel Changes"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Cell Mode Validation](/images/treelist/editing/cell_mode_validation.png)

Clicking a *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the code below to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'cell', 
                texts: {
                    confirmDeleteMessage: null
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing mode="cell" [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
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


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/CellEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation')