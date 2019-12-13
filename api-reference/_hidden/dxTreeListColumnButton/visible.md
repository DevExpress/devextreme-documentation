---
id: dxTreeListColumnButton.visible
type: Boolean | function(options)
default: true
---
---
##### shortDescription
Specifies the button's visibility.

##### param(options): Object
Information about the row and column that contain the button.

##### field(options.column): dxTreeListColumn
The column's properties.

##### field(options.component): dxTreeList
The widget's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the button should be visible; otherwise, **false**.

---
Use the function when you need to show or hide the button for specific rows. For example, the widget lists online orders and allows users to edit them. A **Cancel** button should allow users to cancel their orders. However, completed orders should not be canceled. The **visible** function in this case may look as follows:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button
                text="Cancel"
                [visible]="isCancelButtonVisible">
            </dxi-button>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isCancelButtonVisible (e) {
            return !e.row.isEditing && !e.row.data.isCompleted;
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