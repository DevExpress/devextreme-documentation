---
type: eventType
---
---
##### shortDescription
Raised when a group element is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.groupData): Object
The current group's data.

##### field(e.groupElement): dxElement
The group's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.groupIndex): Number
The group's index.

---
Main article: [onGroupRendered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onGroupRendered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onGroupRendered')

#####See Also#####
#include common-link-handleevents