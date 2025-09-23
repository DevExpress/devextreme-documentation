---
id: dxForm.Options.onSmartPasted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an AI service populates the Form.

##### param(e): ui/form:SmartPastedEvent
Information about the event that caused the function's execution.

##### field(e.aiResult): Object
Smart Paste results. This data populates the Form fields.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
<!-- Description goes here -->

onSmartPasted(e) {
    if (e.aiResult !== Object.prototype) {
        DevExpress.ui.notify("Smart Paste finished successfully");
    }
},