---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the selected range is changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.startValue): Date|Number
The updated start range value.

##### field(e.endValue): Date|Number
The updated end range value.

---
When implementing a handling function, use the object passed to it as the parameter. Among fields of this object, you can find updated start and end range values.

The **selectedRangeChanged** event can be fired when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior** | [callSelectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/callSelectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callSelectedRangeChanged') option.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')