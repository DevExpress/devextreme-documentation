---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a [label](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Labels') on the [argument axis](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Argument_Axis').

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.argument): Date|Number|string
The argument axis.

---
#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')