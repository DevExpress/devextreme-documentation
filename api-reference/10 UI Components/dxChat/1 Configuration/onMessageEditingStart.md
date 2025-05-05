---
id: dxChat.Options.onMessageEditingStart
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed before a message switches to the editing state.

##### param(e): ui/chat:MessageEditingStartEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel message editing.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.message): Message
The data of a message to be edited.

---
<!-- Description goes here -->