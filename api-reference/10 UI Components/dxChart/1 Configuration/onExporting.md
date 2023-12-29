---
id: dxChart.Options.onExporting
type: function(e)
---
---
##### shortDescription
A function that is executed before the UI component is exported.

##### param(e): viz/chart:ExportingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fileName): String
The name of the file to which the UI component is about to be exported.

##### field(e.format): String
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

---
#####See Also#####
- [onExported](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported')
- [onFileSaving](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving')