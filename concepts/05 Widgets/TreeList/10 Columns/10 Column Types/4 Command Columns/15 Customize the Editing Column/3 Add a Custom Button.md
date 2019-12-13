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

... or render the button with custom appearance using a [template](/api-reference/_hidden/dxTreeListColumnButton/template.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/buttons/#template'):

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
                        // Render a custom control here
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
                template="myCommandTemplate">
            </dxi-button>
        </dxi-column>
        <div *dxTemplate="let cellInfo of 'myCommandTemplate'">
            <!-- Declare a custom control here -->
        </div>
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