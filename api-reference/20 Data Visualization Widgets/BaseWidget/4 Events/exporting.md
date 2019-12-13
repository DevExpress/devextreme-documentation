---
id: BaseWidget.exporting
type: eventType
---
---
##### shortDescription
Raised before the widget is exported.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to prevent exporting.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file to which the widget is about to be exported.

##### field(e.format): String
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration/#onExporting')

#####See Also#####
#include common-link-handleevents