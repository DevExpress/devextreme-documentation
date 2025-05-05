---
id: dxChat.Options.onMessageDeleting
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed before a message is removed from the UI.

##### param(e): ui/chat:MessageDeletingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<Boolean>
`true`, a Promise resolved with `true`, or a rejected Promise stops message removal.       
`false` or a Promise resolved with `false` or `undefined` continues message removal.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.message): Message
Message data.

---
<!-- Description goes here -->