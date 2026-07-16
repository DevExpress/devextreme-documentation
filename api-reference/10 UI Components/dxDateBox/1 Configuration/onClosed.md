---
id: dxDateBox.Options.onClosed
type: function(e)
---
---
##### shortDescription
A function that is executed once the drop-down editor is closed.

##### param(e): ui/date_box:ClosedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---

[note] DateBox does not execute **onClosed** when [pickerType](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType') is *"native"*.