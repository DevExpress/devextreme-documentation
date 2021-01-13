---
id: dxTreeListColumnButton.name
acceptValues: 'add' | 'cancel' | 'delete' | 'edit' | 'save' | 'undelete'
type: String
---
---
##### shortDescription
The name used to identify a built-in button.

---
To configure a built-in button, assign its name to this property. The other properties in the object configure the button. For example, the following code adds a custom CSS class to the **Save** button:

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
                }]
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