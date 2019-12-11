---
EventForAction: ..\4 Events\legendClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance').

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): String|Number
The argument of the point(s) corresponding to the clicked legend item.

##### field(e.points): Array
The [point(s)](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') corresponding to the clicked legend item.

---
This option accepts a function that executes custom commands or a URL to which the user must be navigated when the **legendClick** event is raised.

#####See Also#####
#include common-link-handleevents