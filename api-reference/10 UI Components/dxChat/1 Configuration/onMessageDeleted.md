---
id: dxChat.Options.onMessageDeleted
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after a message was removed from the UI.

##### param(e): ui/chat:MessageDeletedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.message): Message
Message data.

---
<!-- Description goes here -->