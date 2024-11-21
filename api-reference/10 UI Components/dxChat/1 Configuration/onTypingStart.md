---
id: dxChat.Options.onTypingStart
type: function(e)
default: undefined
---
---
##### shortDescription
A function that is called after a user starts typing.

##### param(e): ui/chat:TypingStartEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.user): User
The user who started typing.

---
#####See Also#####
- [typingUsers](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers)