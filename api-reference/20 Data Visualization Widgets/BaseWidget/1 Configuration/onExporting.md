---
id: BaseWidget.Options.onExporting
type: function(e)
default: null
EventForAction: BaseWidget.exporting
---
---
##### shortDescription
A function that is executed before the widget is exported.

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
#####See Also#####
- [onExported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported')
- [onFileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving')