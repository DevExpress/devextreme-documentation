You can clear sorting settings for all columns by calling the [clearSorting()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearSorting().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearSorting') method, or for a specific column - by setting its [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#sortIndex') option to **undefined** using the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("Name", "sortIndex", undefined);
    treeList.clearSorting();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        clearSortingByNames () {
            this.treeList.instance.columnOption("Name", "sortIndex", undefined);
        }
        clearAllSorting () {
            this.treeList.instance.clearSorting();
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
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/')
