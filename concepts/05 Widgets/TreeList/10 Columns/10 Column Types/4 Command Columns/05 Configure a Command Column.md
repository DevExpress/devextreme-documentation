All columns are configured in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array. Assign a command column's name to the [type](/api-reference/_hidden/dxTreeListColumn/type.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#type') option and specify the other column options.

The following example shows how to specify the adaptive column's [width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#width'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "adaptive",
                width: 50
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="adaptive" [width]="50"></dxi-column>
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

If a command column should have custom content, specify the column's [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellTemplate') and [headerCellTemplate](/api-reference/_hidden/dxTreeListColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#headerCellTemplate'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
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