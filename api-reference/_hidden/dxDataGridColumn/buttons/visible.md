---
id: dxDataGridColumnButton.visible
type: Boolean | function(options)
default: true
---
---
##### shortDescription
Specifies the button's visibility.

##### param(options): Object
Information about the row and column that contain the button.

##### field(options.column): dxDataGridColumn
The column's properties.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the button should be visible; otherwise, **false**.

---
Use the function to show or hide the button for specific rows. For example, the widget lists online orders and allows users to edit them. The **Cancel** button should allow users to cancel their orders. However, completed orders should not be canceled. The **visible** function in this case may look as follows:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    text: "Cancel",
                    visible: function (e) {
                        return !e.row.isEditing && !e.row.data.isCompleted;
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="buttons">
            <dxi-button
                text="Cancel"
                [visible]="isCancelButtonVisible">
            </dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isCancelButtonVisible (e) {
            return !e.row.isEditing && !e.row.data.isCompleted;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CommandColumnCustomization/"
}