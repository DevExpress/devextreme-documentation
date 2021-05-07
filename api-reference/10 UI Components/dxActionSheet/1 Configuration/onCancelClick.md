---
id: dxActionSheet.Options.onCancelClick
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when the **Cancel** button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.

##### field(e.component): dxActionSheet
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

---
Set the **cancel** field of the function's parameter to **true** to cancel the hiding of the action sheet after the **Cancel** button is clicked.