---
EventForAction: ..\4 Events\legendClick.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.target): String|Number
The argument of the point(s) corresponding to the clicked legend item.

##### field(e.points): Array<piePointObject>
The [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object(s).

---
This option accepts a function that executes custom commands or a URL to which the user must be navigated when the **legendClick** event is raised.

#####See Also#####
#include common-link-handleevents