---
id: dxPivotGridFieldChooser.Options.onContextMenuPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): ui/pivot_grid_field_chooser:ContextMenuPreparingEvent
Information about the event.

##### field(e.area): String
The clicked [area's](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') property description.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
