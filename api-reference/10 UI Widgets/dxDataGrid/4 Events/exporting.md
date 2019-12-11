---
type: eventType
---
---
##### shortDescription
Raised before data is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.fileName): String
The name of the file to which grid data is about to be exported.

##### field(e.cancel): Boolean
Allows you to cancel exporting.

---
Main article: [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting')

#####See Also#####
#include common-link-handleevents