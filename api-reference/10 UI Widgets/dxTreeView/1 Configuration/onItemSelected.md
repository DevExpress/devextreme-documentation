---
dep: onItemSelectionChanged.md
EventForAction: ..\4 Events\itemSelected.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemSelected](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelected') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemElement): dxElement
The selected item's container.

##### field(e.node): dxTreeViewNode
The selected item's node.

---
Assign a function to perform a custom action when a tree view item is selected.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewselectionandcustomization/"
}