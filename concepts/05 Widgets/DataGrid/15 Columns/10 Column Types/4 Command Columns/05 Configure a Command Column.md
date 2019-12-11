All columns are configured in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. Assign a command column's name to the [type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#type') option and specify the other column options.

The following example shows how to specify the adaptive column's [width](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "adaptive",
                width: 50
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="adaptive" [width]="50"></dxi-column>
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

If a command column should have custom content, specify the column's [cellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') and [headerCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#headerCellTemplate'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "selection",
                cellTemplate: function ($cellElement, cellInfo) {
                    // Render custom cell content here
                },
                headerCellTemplate: function ($headerElement, headerInfo) {
                    // Render custom header content here
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            type="selection"
            cellTemplate="selectionCellTemplate"
            headerCellTemplate="selectionHeaderCellTemplate">
        </dxi-column>
        <div *dxTemplate="let cellInfo of 'selectionCellTemplate'">
            <!-- Declare custom cell content here -->
        </div>
        <div *dxTemplate="let headerInfo of 'selectionHeaderCellTemplate'">
            <!-- Declare custom header content here -->
        </div>
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