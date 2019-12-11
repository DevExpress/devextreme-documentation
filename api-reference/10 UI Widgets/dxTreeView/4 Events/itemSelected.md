---
dep: ..\1 Configuration\onItemSelectionChanged.md
type: eventType
---
---
##### shortDescription
Fires when a tree view item is selected.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemElement): dxElement
The selected item's container.

##### field(e.node): dxTreeViewNode
The selected item's node.

---
#####See Also#####
#include common-link-callmethods