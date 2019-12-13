---
id: dxHtmlEditor.Options.onFocusOut
type: function(e)
default: null
EventForAction: dxHtmlEditor.focusOut
---
---
##### shortDescription
A function that is executed when the widget loses focus.

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
- [onFocusIn](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/onFocusIn.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#onFocusIn')