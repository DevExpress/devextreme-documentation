---
id: dxDataGridEditing.allowDeleting
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can delete rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the row can be deleted; otherwise **false**.

---
The following code allows a user to delete only even data rows:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowDeleting: function(e) {
                    if(e.row.rowIndex % 2 == 1) { return true }; 
                    return false;
                },
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowDeleting(e) {
            if(e.row.rowIndex % 2 == 1) { return true }; 
            return false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowDeleting]="allowDeleting">
        </dxo-editing>
    </dx-data-grid>

---

#####See Also#####
- [onRowRemoved](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoved')
- [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoving')
- [deleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex')
- [undeleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex')