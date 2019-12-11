---
type: eventType
---
---
##### shortDescription
Raised before an adaptive detail row is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.formOptions): object
The options of the [Form](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') widget.

---
Main article: [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')

#####See Also#####
#include common-link-handleevents