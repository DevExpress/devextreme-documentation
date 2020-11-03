---
id: dxTreeListEditing.allowAdding
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can add new rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxTreeList
The widget's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the row can be added; otherwise **false**.

---
In the following code, the **Add** button is added to rows whose status is _not_ *"Completed"*:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowAdding: function(e) {
                    if(e.row.data.Task_Status == "Completed") return false;
                    return true;
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { dxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowAdding: function(e) {
            if(e.row.data.Task_Status == "Completed") return false;
            return true;
        }
    }
    @NgModule({
        imports: [
            // ...
            dxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowAdding]="allowAdding">
        </dxo-editing>
    </dx-tree-list>

---

#####See Also#####
- [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserted')
- [addRow()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#addRow')