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
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

---
You cannot access widget elements in this handler because it is executed before they are ready.