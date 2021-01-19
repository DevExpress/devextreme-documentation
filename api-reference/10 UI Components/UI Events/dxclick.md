---
id: UI Events.dxclick
module: events/click
type: eventType
---
---
##### shortDescription
Raised when the element is clicked.

##### param(event): event
#include common-ref-eventparam

---
The native **click** event waits 300 ms after the element was clicked. This time interval is required to wait for the second click. If a user clicks the element one more time during this time span, the **dblclick** event is raised instead of the **click**. The **dxclick** event is raised immediately after the element is clicked.

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')