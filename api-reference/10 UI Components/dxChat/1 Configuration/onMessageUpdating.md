---
id: dxChat.Options.onMessageUpdating
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed before a message is edited in the UI.

##### param(e): ui/chat:MessageUpdatingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<Boolean>
`true`, a Promise resolved with `true`, or a rejected Promise stops message update.       
`false` or a Promise resolved with `false` or `undefined` continues message update.

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