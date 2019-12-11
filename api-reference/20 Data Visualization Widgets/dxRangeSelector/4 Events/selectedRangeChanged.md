---
dep: ..\1 Configuration\onValueChanged.md
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the selected range is changed.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.startValue): Date|Number
The updated start range value.

##### field(e.endValue): Date|Number
The updated end range value.

---
