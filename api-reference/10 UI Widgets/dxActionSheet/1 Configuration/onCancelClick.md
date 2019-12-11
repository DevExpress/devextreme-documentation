---
EventForAction: ..\4 Events\cancelClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [cancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/4%20Events/cancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Events/#cancelClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.cancel): Boolean
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.

---
Assign a function to perform a custom action when clicking the Cancel button. Use the **cancel** field of the object passed as a function parameter. Set this field to **true** to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

To navigate to a specific URL when the **cancelClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.