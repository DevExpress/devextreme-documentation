---
type: eventType
---
---
##### shortDescription
Fires before exporting grid data.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.fileName): string
The name of the file to which data is about to be exported.

##### field(e.cancel): boolean
Allows you to cancel exporting.

---
Instead, you can use the [onExporting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onExporting') option to handle the event.

#####See Also#####
#include common-link-handleevents