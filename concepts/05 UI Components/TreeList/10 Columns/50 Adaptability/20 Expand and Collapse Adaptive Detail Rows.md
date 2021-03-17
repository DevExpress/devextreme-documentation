You can call the [expandAdaptiveDetailRow(key)](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#expandAdaptiveDetailRowkey) or [collapseAdaptiveDetailRow()](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#collapseAdaptiveDetailRow) method to expand or collapse an adaptive detail row. To check whether a specific row is expanded, use the isAdaptiveDetailRowExpanded(key) method. Note that only one detail row can be expanded at a time.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, treeListInstance) {
        if (!treeListInstance.isAdaptiveDetailRowExpanded(key)) {
            treeListInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.treeList.instance.isAdaptiveDetailRowExpanded(key)) {
                this.treeList.instance.expandAdaptiveDetailRow(key);
            }
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
- [Column Fixing](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Fixing/)
- [Column Chooser](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Chooser/)