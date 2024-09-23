---
id: dxChat.Options.onMessageSend
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a message is sent.

##### param(e): ui/chat:MessageSendEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.message): Message
A message that was sent.

---
<!-- Description goes here -->