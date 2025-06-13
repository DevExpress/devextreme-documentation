---
id: dxChat.Options.onMessageEditCanceled
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after message changes are discarded.

##### param(e): ui/chat:MessageEditCanceledEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.message): Message
Discarded message changes.

---
<!-- Description goes here -->