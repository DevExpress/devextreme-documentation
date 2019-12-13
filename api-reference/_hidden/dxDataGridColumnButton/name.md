---
id: dxDataGridColumnButton.name
acceptValues: 'cancel' | 'delete' | 'edit' | 'save' | 'undelete'
type: String
---
---
##### shortDescription
The name used to identify a built-in button.

---
To configure a built-in button, assign its name to this option. The other options in the object configure the button. For example, the following code adds a custom CSS class to the **Save** button:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button
                name="save"
                cssClass="my-class">
            </dxi-button>
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