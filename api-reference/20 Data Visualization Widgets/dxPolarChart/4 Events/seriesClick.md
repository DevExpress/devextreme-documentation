---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a series.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.target): polarChartSeriesObject
The clicked series; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') section.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series. To learn about series members that you can use, refer to the description of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') object.

[note] The **seriesClick** also fires when a user clicks a series point or a legend item, but only if it is not canceled in the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#pointClick') and [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#legendClick') event handlers.

#####See Also#####
#include common-link-handleevents