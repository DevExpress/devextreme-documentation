The **TreeView** provides the following API to expand and collapse nodes: 

- **All nodes**     
You can use the [expandAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/expandAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#expandAll') and [collapseAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/collapseAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#collapseAll') methods to expand and collapse nodes at once. Note that the **expandAll()** method expands only the loaded nodes if [data is loaded on demand](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/').

    ---
    #####jQuery

        <!--JavaScript-->$("#treeViewContainer").dxTreeView("expandAll");
        // $("#treeViewContainer").dxTreeView("collapseAll");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
            // Prior to Angular 8
            // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
            expandAllNodes () {
                this.treeView.instance.expandAll();
            }
            collapseAllNodes () {
                this.treeView.instance.collapseAll();
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

- **Individual nodes**  
Call the [expandItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/expandItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#expandItemitemElement') or [collapseItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/collapseItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#collapseItemitemElement') method and pass a node key as an argument:

    ---
    ##### jQuery

        <!--JavaScript-->$("#treeViewContainer").dxTreeView("expandItem", nodeKey);
        // $("#treeViewContainer").dxTreeView("collapseItem", nodeKey);

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
            // Prior to Angular 8
            // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
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
