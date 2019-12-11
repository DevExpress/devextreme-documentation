---
EventForAction: ..\4 Events\contentReady.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contentReady** event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only when using Knockout.

---
