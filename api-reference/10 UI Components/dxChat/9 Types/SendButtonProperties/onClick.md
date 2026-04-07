---
id: SendButtonProperties.onClick
type: function(e)
---
---
##### shortDescription
A function that is executed when the send button is clicked.

##### param(e): ui/chat:SendButtonClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

---
The function is called for any [action](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#action) value. In `'send'` mode, it is called only when the button is enabled (the input field contains content).