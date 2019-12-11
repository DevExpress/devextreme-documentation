---
type: eventType
---
---
##### shortDescription
Raised when a user adds a custom item.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

---
Main article: [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '{basewidgetpath}/Configuration/#onCustomItemCreating')

#####See Also#####
#include common-link-handleevents