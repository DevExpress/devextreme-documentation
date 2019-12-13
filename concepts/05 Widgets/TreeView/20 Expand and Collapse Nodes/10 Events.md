To execute certain commands when a node is expanded or collapsed, handle the [itemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemExpanded') or [itemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed') event. Assign event handling functions to the [onItemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemExpanded') or [onItemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed') option when you configure the widget if these functions are going to remain unchanged. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            onItemExpanded: function (e) {
                // Handler of the "itemExpanded" event
            },
            onItemCollapsed: function (e) {
                // Handler of the "itemCollapsed" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-view ...
        (onItemExpanded)="onItemExpanded($event)"
        (onItemCollapsed)="onItemCollapsed($event)">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemExpanded (e) {
            // Handler of the "itemExpanded" event
        }
        onItemCollapsed (e) {
            // Handler of the "itemCollapsed" event
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemCollapsedEventHandler1 = function (e) {
        // First handler of the "itemCollapsed" event
    };

    var itemCollapsedEventHandler2 = function (e) {
        // Second handler of the "itemCollapsed" event
    };

    $("#treeViewContainer").dxTreeView("instance")
        .on("itemCollapsed", itemCollapsedEventHandler1)
        .on("itemCollapsed", itemCollapsedEventHandler2);

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Search_Nodes/')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')
