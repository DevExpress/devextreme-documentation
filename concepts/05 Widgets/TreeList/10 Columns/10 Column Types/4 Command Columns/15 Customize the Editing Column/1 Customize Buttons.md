The column's [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/') array allows you to customize the built-in editing buttons. It can contain configuration objects or button names if the buttons should be available but do not need customizations.

In the following code, a CSS class is added to the **Save** button. The **Add**, **Edit**, and **Delete** buttons should also be declared to display them:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    name: "save",
                    cssClass: "my-class"
                }, "add", "edit", "delete"]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button
                name="save"
                cssClass="my-class">
            </dxi-button>
            <dxi-button name="add"></dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
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