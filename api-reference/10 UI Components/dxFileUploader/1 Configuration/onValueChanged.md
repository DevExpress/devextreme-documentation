---
id: dxFileUploader.Options.onValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when one or several files are added to or removed from the selection.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.previousValue): Array<File>
Previously selected files.

##### field(e.value): Array<File>
Newly selected files.

---
