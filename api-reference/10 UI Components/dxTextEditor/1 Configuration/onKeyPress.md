---
id: dxTextEditor.Options.onKeyPress
type: function(e)
default: null
deprecated: [important]The `keyPress` event is removed from the web standards and will be deprecated in modern browsers soon. Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event) topic for details.
EventForAction: dxTextEditor.keyPress
---
---
##### shortDescription
A function that is executed when a user presses a key on the keyboard.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
