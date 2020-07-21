---
id: dxFileUploader.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxFileUploader.valueChanged
---
---
##### shortDescription
A function that is executed when one or several files are added to or removed from the selection.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.previousValue): Array<File>
Previously selected files.

##### field(e.value): Array<File>
Newly selected files.

---
