---
id: dxActionSheet.Options.onCancelClick
type: function(e) | String
default: null
EventForAction: dxActionSheet.cancelClick
---
---
##### shortDescription
A function that is executed when the **Cancel** button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel hiding of the action sheet after the Cancel button is clicked.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Set the **cancel** field of the function's parameter to **true** to cancel the hiding of the action sheet after the **Cancel** button is clicked.