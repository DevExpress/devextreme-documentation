---
type: eventType
---
---
##### shortDescription
Raised when a user adds a custom item.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.text): string
The input field's text.

##### field(e.customItem): string|object|Promise
The field to put a custom item in.

##### return: string|object|Promise
A custom item or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) that is resolved after the item is created.

---
Main article: [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '{basewidgetpath}/Configuration/#onCustomItemCreating')

#####See Also#####
#include common-link-handleevents