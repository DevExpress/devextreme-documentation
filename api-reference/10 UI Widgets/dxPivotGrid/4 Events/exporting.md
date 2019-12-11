---
type: eventType
---
---
##### shortDescription
Fires before exporting grid data.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.fileName): string
The name of the file to which grid data is about to be exported.

##### field(e.cancel): boolean
Indicates whether or not to cancel exporting.

---
Instead, you can use the [onExporting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onExporting') option to handle the event.

#####See Also#####
#include common-link-handleevents