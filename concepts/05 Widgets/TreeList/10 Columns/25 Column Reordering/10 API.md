The [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array determines columns' order. You can reorder columns by moving their objects within the array or by changing the column's [visibleIndex](/api-reference/_hidden/GridBaseColumn/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex') if you prefer to configure columns using the [customizeColumns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#customizeColumns') function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function(columns) {
                column[2].visibleIndex = 1;
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            column[2].visibleIndex = 1;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>
    
---

The **visibleIndex** option can also be changed at runtime to reorder columns regardless of the way you configured them. For this, call the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method. The following code swaps the second and first column:

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", 1, "visibleIndex", 0);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        swapColumns () {
            this.treeList.instance.columnOption(1, "visibleIndex", 0);
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

#####See Also#####
#include common-link-callmethods
- [Data Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Data_Columns/')
