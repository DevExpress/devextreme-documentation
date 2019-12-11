---
type: eventType
---
---
##### shortDescription
Raised before the toolbar is created.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [options of the toolbar](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/').

---
Main article: [onToolbarPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onToolbarPreparing.md '{basewidgetpath}/Configuration/#onToolbarPreparing')

#####See Also#####
#include common-link-handleevents