---
EventForAction: ..\4 Events\initialized.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **initialized** event. Executed only once, after the widget is initialized.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget instance.

##### field(e.element): jQuery
The widget's container.

---
You cannot access elements in the widget because this handler is executed before they are ready. Use the [onContentReady](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '{basewidgetpath}/Configuration/#onContentReady') handler instead.