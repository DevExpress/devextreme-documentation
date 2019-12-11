---
EventForAction: ..\4 Events\rowCollapsing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowCollapsing** event. Executed before a row is collapsed.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.key): any
The key of the row.

##### field(e.cancel): Boolean
Allows you to cancel row collapsing.

---
To cancel row collapsing, assign **true** to the **cancel** field of the handler parameter.