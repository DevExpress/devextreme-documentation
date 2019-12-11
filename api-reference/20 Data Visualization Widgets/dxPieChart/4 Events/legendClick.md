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
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): String|Number
The argument of the point(s) corresponding to the clicked legend item.

##### field(e.points): Array
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/">point(s)</a> corresponding to the clicked legend item.

---
You can subscribe to this event using the [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onLegendClick') option or the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler') method.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')