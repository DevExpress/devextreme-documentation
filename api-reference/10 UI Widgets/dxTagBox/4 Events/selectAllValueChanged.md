---
type: eventType
---
---
##### shortDescription
Raised when the "Select All" check box value is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
Main article: [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onSelectAllValueChanged')

#####See Also#####
#include common-link-handleevents