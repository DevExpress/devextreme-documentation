Set the [allowColumnReordering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering') option to **true** to allow a user to reorder columns. 
If a specific column should not be moved, set its [allowReordering](/api-reference/_hidden/GridBaseColumn/allowReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowReordering') option to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            allowColumnReordering: true,
            columns: [
                { dataField: "CompanyName", allowReordering: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [allowColumnReordering]="true">
        <dxi-column dataField="CompanyName" [allowReordering]="false"></dxi-column>
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
