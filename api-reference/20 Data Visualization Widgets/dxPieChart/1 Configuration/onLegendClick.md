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
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance">widget instance</a>.

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): String|Number
The argument of the point(s) corresponding to the clicked legend item.

##### field(e.points): Array
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/">point(s)</a> corresponding to the clicked legend item.

---
This option accepts a function that executes custom commands or a URL to which the user must be navigated when the **legendClick** event is raised.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')