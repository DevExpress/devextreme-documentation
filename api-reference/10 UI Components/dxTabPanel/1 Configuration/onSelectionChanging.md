---
id: dxTabPanel.Options.onSelectionChanging
type: function(e)
---
---
##### shortDescription
A function that is called before selection changes.

##### param(e): ui/tab_panel:SelectionChangingEvent
Information about the event.

##### field(e.addedItems): Array<any>
The data of the selected items.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel selection.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.removedItems): Array<any>
The data of the items removed from selection.

---
<!-- Description goes here -->