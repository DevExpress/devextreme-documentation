---
id: dxPivotGrid.Options.onExporting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Deprecated.

##### field(e.component): dxPivotGrid
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fileName): String
Deprecated.

##### field(e.model): any
Model data. Available only if Knockout is used.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSOverview/"
}