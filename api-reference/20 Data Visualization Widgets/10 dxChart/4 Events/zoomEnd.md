---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when zooming or scrolling ends.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance"></a> instance.

##### field(e.element): object
The widget's container.

##### field(e.rangeStart): Date|Number
The value that became the start of the argument axis after zooming or scrolling ended.

##### field(e.rangeEnd): Date|Number
The value that became the end of the argument axis after zooming or scrolling ended.

---
#####See Also#####
- [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd') - a handler for this event.
- [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') - enables zooming in the chart.
- [scrollingMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') - enables scrolling in the chart.
- [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart') - an event that fires when zooming or scrolling begins.
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')