---
type: eventType
---
---
##### shortDescription
Fires after an item group element is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.groupData): object
The current group's data.

##### field(e.groupElement): dxElement
The group's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.groupIndex): number
The group's index.

---
Instead, you can use the [onGroupRendered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onGroupRendered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onGroupRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents