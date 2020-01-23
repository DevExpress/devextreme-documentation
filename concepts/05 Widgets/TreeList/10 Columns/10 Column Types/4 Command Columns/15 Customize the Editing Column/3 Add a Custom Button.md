Add an object to the [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/') array and specify the button's options in it...

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete", {
                    text: "My Command",
                    icon: "/url/to/my/icon.ico",
                    hint: "My Command",
                    onClick: function (e) {
                        // Execute your command here
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button name="add"></dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button
                text="My Command"
                icon="/url/to/my/icon.ico"
                hint="My Command"
                [onClick]="myCommand">
            </dxi-button>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        myCommand (e) {
            // Execute your command here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

... or use a [template](/api-reference/_hidden/dxTreeListColumnButton/template.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/#template') to render the button with custom appearance. In this case, the **onClick** function is not executed, and you should handle the `click` event of the element placed inside the template.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete", {
                    template: function (e) {
                        // Specify custom markup here
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button name="add"></dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button template="myCommand">
                <div *dxTemplate="let data of 'myCommand'">
                    <!-- Declare custom markup here -->
                </div>
            </dxi-button>
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