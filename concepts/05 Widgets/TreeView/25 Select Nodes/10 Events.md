When a node changes its selected state, the **TreeView** fires the [itemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged') event. You can subscribe to it when configuring the widget using the [onItemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged') options, or afterwards using the [on()](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(events).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#onevents') method. For more details, see the [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events') article.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            // Subscribing to the event when configuring the widget
            onItemSelectionChanged: function (e) { ... }
        });

        // Subscribing to the event after the widget is configured
        $("#treeViewContainer").dxTreeView("instance").on({
            "itemSelectionChanged": function (e) { ... }
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/"
}

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Filter Nodes](/concepts/05%20Widgets/TreeView/15%20Filter%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Filter_Nodes')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')