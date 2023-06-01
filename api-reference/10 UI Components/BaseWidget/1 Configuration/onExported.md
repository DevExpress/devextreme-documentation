---
id: BaseWidget.Options.onExported
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the UI component is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

---
#####See Also#####
- [onExporting](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting')
- [onFileSaving](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving')