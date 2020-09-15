---
id: dxPivotGrid.Options.onExported
type: function(e)
default: null
deprecated: Since v20.2, we recommend [ExcelJS-based export](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/') which does not use this option.
EventForAction: dxPivotGrid.exported
---
---
##### shortDescription
A function that is executed after data is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
