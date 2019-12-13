---
id: GridBase.toolbarPreparing
type: eventType
---
---
##### shortDescription
Raised before the toolbar is created.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [options of the toolbar](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/').

---
Main article: [onToolbarPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onToolbarPreparing.md '{basewidgetpath}/Configuration/#onToolbarPreparing')

#####See Also#####
#include common-link-handleevents