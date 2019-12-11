---
type: eventType
---
---
##### shortDescription
Raised before the multi-tag is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only when using Knockout.

##### field(e.multiTagElement): dxElement
The multi-tag's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.selectedItems): Array<string,number,Object>
The currently selected items.

##### field(e.text): string
Allows you to change the multi-tag's text.

##### field(e.cancel): boolean
Allows you to cancel replacing ordinary tags with the multi-tag.

---
Main article: [onMultiTagPreparing](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onMultiTagPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing')

#####See Also#####
#include common-link-handleevents