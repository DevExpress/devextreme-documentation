---
id: dxTextEditor.Options.onChange
type: function(e)
default: null
EventForAction: dxTextEditor.change
---
---
##### shortDescription
A function that is executed when the widget loses focus after the text field's content was changed using the keyboard.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
