---
id: dxDataGrid.exporting
type: eventType
---
---
##### shortDescription
Raised before data is exported.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel exporting.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file to which grid data is about to be exported.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting')

#####See Also#####
#include common-link-handleevents