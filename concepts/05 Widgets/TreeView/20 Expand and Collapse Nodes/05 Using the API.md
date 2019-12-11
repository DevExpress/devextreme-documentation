To expand or collapse a node programmatically, call the [expandItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/expandItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#expandItemitemElement') or [collapseItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/collapseItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#collapseItemitemElement') method passing the key of the node as a parameter.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("expandItem", nodeKey);
    // $("#treeViewContainer").dxTreeView("collapseItem", nodeKey);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        expandNode (key) {
            this.treeView.instance.expandItem(key);
        }
        collapseNode (key) {
            this.treeView.instance.collapseItem(key);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---