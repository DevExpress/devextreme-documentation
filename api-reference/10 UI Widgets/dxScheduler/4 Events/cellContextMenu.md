---
id: dxScheduler.cellContextMenu
type: eventType
---
---
##### shortDescription
Raised when a user attempts to open the browser's context menu for a cell.

##### param(e): Object
Information about the event.

##### field(e.cellData): Object
The data of the cell on which the context menu is invoked.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onCellContextMenu](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onCellContextMenu.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onCellContextMenu')

#####See Also#####
#include common-link-handleevents