Call the [deselectRows(keys)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deselectRowskeys') method to clear the selection of specific rows. With the non-recursive selection, one key deselects one row; with [recursive](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#recursive') - a row with its nested rows. 

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectRows (keys) {
            this.treeList.instance.deselectRows(keys);
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

The [deselectAll()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deselectAll') method clears selection of all visible rows and can be used when you apply a [filter](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions. To clear the selection of all rows regardless of their visibility, call the [clearSelection()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearSelection') method.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.deselectAll();
    treeList.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectVisibleRows () {
            this.treeList.instance.deselectAll();
        }
        deselectAllRows () {
            this.treeList.instance.clearSelection();
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
