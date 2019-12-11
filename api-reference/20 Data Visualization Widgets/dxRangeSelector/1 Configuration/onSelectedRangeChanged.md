---
dep: onValueChanged.md
EventForAction: ..\4 Events\selectedRangeChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [selectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/4%20Events/selectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Events/#selectedRangeChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.startValue): Date|Number
The updated start range value.

##### field(e.endValue): Date|Number
The updated end range value.

---
