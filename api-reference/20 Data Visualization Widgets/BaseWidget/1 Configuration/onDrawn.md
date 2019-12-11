---
EventForAction: ..\4 Events\drawn.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **drawn** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget instance.

##### field(e.element): Object
The widget's container.

---
Assign a callback function to this option if you need to perform specific actions when the widget has finished drawing itself. When implementing this function, you can access the drawn widget using the function's parameter.