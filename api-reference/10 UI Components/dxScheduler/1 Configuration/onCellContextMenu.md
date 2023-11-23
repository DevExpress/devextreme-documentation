---
id: dxScheduler.Options.onCellContextMenu
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a user attempts to open the browser's context menu for a cell. Allows you to replace this context menu with a custom context menu.

##### param(e): ui/scheduler:CellContextMenuEvent
Information about the event.

##### field(e.cellData): Object
The data of the cell on which the context menu is invoked.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/"
}