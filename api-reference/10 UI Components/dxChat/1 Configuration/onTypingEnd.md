---
id: dxChat.Options.onTypingEnd
type: function(e) | undefined
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
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Overview/"
}

#####See Also#####
- [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers')