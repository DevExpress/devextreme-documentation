---
id: dxTreeList.Options.onRowCollapsing
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is collapsed.

##### param(e): ui/tree_list:RowCollapsingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel row collapsing.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The key of the row.

---
To cancel row collapsing, assign **true** to the **cancel** field of the function parameter.