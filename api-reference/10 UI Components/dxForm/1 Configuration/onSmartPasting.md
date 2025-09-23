---
id: dxForm.Options.onSmartPasting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an AI service populates the Form.

##### param(e): ui/form:SmartPastingEvent
Information about the event that caused the function's execution.

##### field(e.aiResult): Object
Smart Paste results. This data populates the Form fields.

##### field(e.cancel): Boolean | Promise<Boolean>
`true`, a Promise resolved with `true`, or a rejected Promise stops Smart Pasting.       
`false` or a Promise resolved with `false` or `undefined` continues Smart Pasting.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
<!-- Description goes here -->

onSmartPasting(e) {
    if (!e.aiResult.ZIP) {
        e.cancel = true;
        DevExpress.ui.notify("Could not past: the ZIP address was not recognized");
    }
},