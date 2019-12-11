---
type: eventType
---
---
##### shortDescription
Raised after all widget nodes are initialized.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeListNode
The root node.

---
Main article: [onNodesInitialized](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onNodesInitialized.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onNodesInitialized')

#####See Also#####
#include common-link-handleevents