---
id: dxHtmlEditor.Options.onFocusIn
type: function(e)
default: null
EventForAction: dxHtmlEditor.focusIn
---
---
##### shortDescription
A function that is executed when the widget gets focus.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
#####See Also#####
- [onFocusOut](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/onFocusOut.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#onFocusOut')