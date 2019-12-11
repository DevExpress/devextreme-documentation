---
type: eventType
---
---
##### shortDescription
Raised when a list item is selected or the selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.selectedItem): Object
The selected item's data.

---
Main article: [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents