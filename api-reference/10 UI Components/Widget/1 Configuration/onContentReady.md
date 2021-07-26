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

The **contentReady** event fires in the following cases:     

- The component is rendered for the first time
- The data is fully loaded
- Each time the content is changed
- The [repaint()](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#repaint) method