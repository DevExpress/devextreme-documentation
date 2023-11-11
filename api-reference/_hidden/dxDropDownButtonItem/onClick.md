---
id: dxDropDownButtonItem.onClick
type: function(e)
default: null
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Components/dxDropDownButton/4%20Events/itemClick.md '{basewidgetpath}/Events/#itemClick') event raised for a certain item in the drop-down field.

##### param(e): ui/drop_down_button:ItemClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.itemData): Object
The item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

---
<!-- Description goes here -->