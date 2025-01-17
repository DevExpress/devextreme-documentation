---
id: dxChat.Options.onTypingStart
type: function(e) | undefined
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
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Overview/"
}

#####See Also#####
- [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers')