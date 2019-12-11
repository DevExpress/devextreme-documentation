---
EventForAction: ..\4 Events\disposing.md
default: null
type: function
---
---
##### shortDescription
A handler for the [disposing](/api-reference/10%20UI%20Widgets/Component/4%20Events/disposing.md '{basewidgetpath}/Events/#disposing') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

---
Assign a function to perform a custom action when the widget is being removed.

[note]The function assigned to this option is executed only if the widget is removed using the [remove()](https://api.jquery.com/remove), [empty()](https://api.jquery.com/empty), or [html()](https://api.jquery.com/html) jQuery methods.