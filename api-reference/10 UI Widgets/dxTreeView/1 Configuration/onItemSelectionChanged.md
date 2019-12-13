---
id: dxTreeView.Options.onItemSelectionChanged
type: function(e)
default: null
EventForAction: dxTreeView.itemSelectionChanged
---
---
##### shortDescription
A function that is executed when a tree view item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

---
This function is executed under one of the following conditions:

- The [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick') option is set to **true**;
- The [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') option is not *"none"*;
- One of the following methods is called: [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll'), [unselectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll'), [selectItem()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement'), [unselectItem()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/"
}

#####See Also#####
- [Select Nodes - Events](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/10%20Events.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes/#Events')