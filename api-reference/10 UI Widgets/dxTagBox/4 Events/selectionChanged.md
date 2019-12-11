---
type: eventType
---
---
##### shortDescription
Fires when the selection changes.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.addedItems): Array<string,number,Object>
The data of the items that have been selected.

##### field(e.removedItems): Array<string,number,Object>
The data of the items whose selection has been canceled.

---
Instead, you can use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onSelectionChanged') option to handle the event.

#####See Also#####
#include common-link-handleevents