---
id: BaseWidget.Options.onExporting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the UI component is exported.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to prevent exporting.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fileName): String
The name of the file to which the UI component is about to be exported.

##### field(e.format): String
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

##### field(e.model): any
The model data. Available only if you use Knockout.

---
#####See Also#####
- [onExported](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported')
- [onFileSaving](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving')