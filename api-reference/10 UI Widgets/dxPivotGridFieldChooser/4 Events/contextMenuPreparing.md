---
id: dxPivotGridFieldChooser.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.field): PivotGridDataSource_Options_fields
The [configuration](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') of the field on which the context menu is invoked.

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/items/') option description.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#onContextMenuPreparing')

#####See Also#####
#include common-link-handleevents