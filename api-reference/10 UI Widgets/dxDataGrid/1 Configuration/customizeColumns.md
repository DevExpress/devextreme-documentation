---
id: dxDataGrid.Options.customizeColumns
type: function(columns)
---
---
##### shortDescription
Customizes columns after they are created.

##### param(columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

---
Use this function to make minor adjustments to automatically generated columns. You can access and modify column configurations using the function's parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGrid").dxDataGrid({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
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
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---
[note] Data operations (sorting, filtering, summary) are unavailable for the columns created via **customizeColumns**. To create a fully functioning column, add it to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array.
