---
id: dxChat.Options.onTypingEnd
type: function(e)
default: undefined
---
---
##### shortDescription
A function that is called 2 seconds after a user stops typing or after a message is entered.

##### param(e): ui/chat:TypingEndEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.user): User
The user who entered the message.

---
#####See Also#####
- [typingUsers](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers)