---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when an item on the chart legend is clicked.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance').

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): String|Number
The argument of the point(s) corresponding to the clicked legend item.

##### field(e.points): Array
The [point(s)](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') corresponding to the clicked legend item.

---
You can subscribe to this event using the [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onLegendClick') option or the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler') method.

#####See Also#####
#include common-link-handleevents