Editing buttons' visibility depends on the allowed editing capabilities. For example, the **Delete** button is visible if users can delete rows. You can configure the editing capabilities in the [editing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/') object. 

The **Add**, **Edit**, and **Delete** buttons can be hidden by omitting them when declaring the [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/') array. However, users can still use the keyboard to add, edit, and delete.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true,
                allowDeleting: true
            },
            columns: [{
                type: "buttons",
                buttons: ["edit"] // The Add and Delete buttons are hidden
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
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

You can hide an editing button or disable editing capabilities for specific rows. Use functions to specify the button's [visible](/api-reference/_hidden/dxTreeListColumnButton/visible.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/#visible') option or the **editing**.[allowAdding](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding')/[allowUpdating](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowUpdating')/[allowDeleting](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowDeleting') option. Refer to the options' descriptions for examples.