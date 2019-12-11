---
EventForAction: ..\4 Events\cancelClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A function that is executed when the **Cancel** button is clicked or tapped.

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
Set the **cancel** field of the function's parameter to **true** to cancel the hiding of the action sheet after the **Cancel** button is clicked.