---
type: eventType
---
---
##### shortDescription
Raised when a user adds a custom item.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.text): string
The input field's text.

##### field(e.customItem): string|object|Promise<any>
The field where to place a custom item.

##### return: string|object|Promise<any>
A custom item or a Promise that is resolved after the item is created. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
Main article: [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '{basewidgetpath}/Configuration/#onCustomItemCreating')

#####See Also#####
#include common-link-handleevents