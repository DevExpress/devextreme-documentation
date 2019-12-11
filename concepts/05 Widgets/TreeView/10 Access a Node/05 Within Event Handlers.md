Usually, you need to access a **TreeView** node when an action was made on it, for example, when it was clicked or selected. This action raises an event, and you can access the node subjected to the action within the event handler. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: data,
            onItemClick: function (e) {
                var node = e.node;
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="data"
        (onItemClick)="onItemClick($event)">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        data = [ ... ];
        onItemClick (e) {
            var node = e.node;
            // ...
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

Not every event handler provides access to the node, only those whose name starts with **onItem...**. They are described in the [TreeView Configuration](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/').