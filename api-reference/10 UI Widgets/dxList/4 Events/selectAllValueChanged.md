---
type: eventType
---
---
##### shortDescription
Fires when the select all check box value changes.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.value): boolean
The "Select All" check box's state.

---
Instead, you can use the [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onSelectAllValueChanged') option to handle the event.

[note]This event fires only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option is set to *'all'*.

#####See Also#####
- [List - Handle Selection-Related Events](/concepts/05%20Widgets/List/25%20Selection/10%20Events.md '/Documentation/Guide/Widgets/List/Selection/#Events')
#include common-link-handleevents