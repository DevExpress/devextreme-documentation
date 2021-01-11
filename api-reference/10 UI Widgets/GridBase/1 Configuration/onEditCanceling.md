---
id: GridBase.Options.onEditCanceling
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the edit operation is canceled, but row changes are not yet discarded.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Set this field to **true** if the row changes should not be discarded.

##### field(e.changes): Array<any>
Row changes to be discarded.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
An edit operation can be canceled from the UI (with the Cancel button) or programatically (with the [cancelEditData()]({basewidgetpath}/Methods/#cancelEditData) method).
