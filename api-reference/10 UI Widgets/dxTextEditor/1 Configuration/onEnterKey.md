---
id: dxTextEditor.Options.onEnterKey
type: function(e)
default: null
EventForAction: dxTextEditor.enterKey
---
---
##### shortDescription
A function that is executed when the Enter key has been pressed while the widget is focused.

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
[note] This function is executed *after* the [onKeyUp](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onKeyUp.md '{basewidgetpath}/Configuration/#onKeyUp'), [onKeyDown](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onKeyDown.md '{basewidgetpath}/Configuration/#onKeyDown'), and [onKeyPress](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onKeyPress.md '{basewidgetpath}/Configuration/#onKeyPress') functions.