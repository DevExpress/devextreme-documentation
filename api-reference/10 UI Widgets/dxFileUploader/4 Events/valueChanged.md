---
type: eventType
---
---
##### shortDescription
Fires when a file or several files are added to or removed from selection.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): array
Newly selected files.

##### field(e.previousValue): array
Previously selected files.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Instead, you can use the [onValueChanged](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onValueChanged') option to handle the event.

#####See Also#####
#include common-link-handleevents