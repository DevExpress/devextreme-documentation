When a node is being expanded or collapsed, the **TreeView** fires the [itemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemExpanded') or [itemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed') event. You can subscribe to them when configuring the widget using the [onItemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemExpanded') or [onItemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed') options, or afterwards using the [on()](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(events).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#onevents') method. For more details, see the [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events') article.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            // Subscribing to the events when configuring the widget
            onItemExpanded: function (e) { ... },
            onItemCollapsed: function (e) { ... }
        });

        // Subscribing to the events after the widget is configured
        $("#treeViewContainer").dxTreeView("instance").on({
            "itemExpanded": function (e) { ... },
            "itemCollapsed": function (e) { ... }
        });
    });

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Filter Nodes](/concepts/05%20Widgets/TreeView/15%20Filter%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Filter_Nodes')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')