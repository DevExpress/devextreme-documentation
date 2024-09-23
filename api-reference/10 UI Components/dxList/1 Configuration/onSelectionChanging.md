---
id: dxList.Options.onSelectionChanging
type: function(e)
---
---
##### shortDescription
A function that is executed before a collection item is selected.

##### param(e): ui/list:SelectionChangingEvent
Information about the event.

##### field(e.addedItems): Array<any>
The data of the items that have been selected.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel the item selection.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.removedItems): Array<any>
The data of the items whose selection has been canceled.

---
<!-- Description goes here -->