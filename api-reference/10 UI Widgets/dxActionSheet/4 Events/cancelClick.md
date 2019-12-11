---
type: eventType
---
---
##### shortDescription
Raised when the **Cancel** button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.cancel): Boolean
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.

---
Main article: [onCancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/onCancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#onCancelClick')

#####See Also#####
#include common-link-handleevents