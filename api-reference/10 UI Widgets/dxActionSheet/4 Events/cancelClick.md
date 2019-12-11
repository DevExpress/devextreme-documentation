---
type: eventType
---
---
##### shortDescription
Fires when the **Cancel** button is clicked.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.cancel): boolean
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.

---
In the handling function, use the **cancel** field of the object passed as a handler parameter. Set this field to **true** to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

Instead, you can use the [onCancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/onCancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#onCancelClick') option to handle the event.

#####See Also#####
#include common-link-handleevents