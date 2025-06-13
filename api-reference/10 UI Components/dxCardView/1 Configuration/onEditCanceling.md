---
id: dxCardView.Options.onEditCanceling
type: function(e)
---
---
##### shortDescription
A function that is executed when the edit operation is canceled, but card changes are not yet discarded.

##### param(e): ui/card_view:EditCancelingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Set this field to `true` if the card changes should not be discarded.

##### field(e.changes): Array<DataChange>
Card changes to be discarded.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
An edit operation can be canceled from the UI (with the Cancel button) or programatically (with the [cancelEditData()](/api-reference/10%20UI%20Components/dxCardView/3%20Methods/cancelEditData().md '{basewidgetpath}/Methods/#cancelEditData') method).