---
id: dxSparkline.Options.onExporting
type: function(e)
---
---
##### shortDescription
A function that is executed before the UI component is exported.

##### param(e): viz/sparkline:ExportingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.fileName): String
The name of the file to which the UI component is about to be exported.

##### field(e.format): String
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

---
<!-- Description goes here -->