---
type: eventType
---
---
##### shortDescription
Raised before data from the widget is exported.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.fileName): string
The name of the file to which the widget is about to be exported.

##### field(e.cancel): boolean
Allows you to prevent exporting.

##### field(e.format): string
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

---
#####See Also#####
#include common-link-handleevents