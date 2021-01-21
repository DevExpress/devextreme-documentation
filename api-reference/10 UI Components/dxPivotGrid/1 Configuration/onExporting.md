---
id: dxPivotGrid.Options.onExporting
type: function(e)
default: null
EventForAction: dxPivotGrid.exporting
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel exporting.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fileName): String
The name of the file to which data is about to be exported.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSOverview/"
}