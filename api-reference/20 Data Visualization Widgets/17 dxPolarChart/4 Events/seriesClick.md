---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a series.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Series
The clicked series.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series. To learn about series members that you can use, refer to the description of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') object.

[note] The **seriesClick** also fires when a user clicks a series point or a legend item, but only if it is not canceled in the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#pointClick') and [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#legendClick') event handlers.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')