---
id: dxChat.Options.onTypingEnd
type: function(e)
default: undefined
---
---
##### shortDescription
A function that is called after a user stops typing.

##### param(e): ui/chat:TypingEndEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.user): User
A user that was typing.

---
<!-- Description goes here -->