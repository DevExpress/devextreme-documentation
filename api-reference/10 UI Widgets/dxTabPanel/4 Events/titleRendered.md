---
type: eventType
---
---
##### shortDescription
Raised after a tab is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The data of the item whose title is rendered.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Main article: [onTitleRendered](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/onTitleRendered.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleRendered')

#####See Also#####
#include common-link-handleevents