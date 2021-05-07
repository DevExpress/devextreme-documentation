---
id: dxScheduler.Options.onCellContextMenu
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when a user attempts to open the browser's context menu for a cell. Allows you to replace this context menu with a custom context menu.

##### param(e): Object
Information about the event.

##### field(e.cellData): Object
The data of the cell on which the context menu is invoked.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if you use Knockout.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/"
}