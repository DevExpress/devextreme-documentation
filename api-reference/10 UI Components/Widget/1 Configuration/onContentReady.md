---
id: Widget.Options.onContentReady
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the UI component's content is ready.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only when using Knockout.

---

This function is also executed in the following cases:      

- When the component is rendered for the first time
- Each time the content is changed
- When you call the [repaint()](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#repaint) method