---
id: dxChat.Options.onMessageUpdated
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after a message was edited in the UI.

##### param(e): ui/chat:MessageUpdatedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.message): Message
Old message data.

##### field(e.text): String
The updated text from the input field.

---
<!-- Description goes here -->