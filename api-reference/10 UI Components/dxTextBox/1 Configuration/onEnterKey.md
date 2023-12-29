---
id: dxTextBox.Options.onEnterKey
type: function(e)
---
---
##### shortDescription
A function that is executed when the Enter key has been pressed while the UI component is focused.

##### param(e): ui/text_box:EnterKeyEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

---
[note] This function is executed *after* the [onKeyUp](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/onKeyUp.md '{basewidgetpath}/Configuration/#onKeyUp') and [onKeyDown](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/onKeyDown.md '{basewidgetpath}/Configuration/#onKeyDown') functions.