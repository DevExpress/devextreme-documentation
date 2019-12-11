---
type: eventType
---
---
##### shortDescription
Raised after the "Select All" check box's state changes.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.value): boolean
The "Select All" check box's new state.

---
Main article: [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectAllValueChanged')

#####See Also#####
#include common-link-handleevents