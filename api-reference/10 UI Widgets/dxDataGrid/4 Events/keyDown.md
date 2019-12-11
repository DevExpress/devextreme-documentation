---
type: event
---
---
##### shortDescription
Fires when a key is pressed down when the widget is focused.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.jQueryEvent): jQuery-event object
Specifies the jQuery event that caused action execution.

##### field(e.handled): boolean
Indicates if the grid has already handled the key down event.

---
Instead, you can use the [onKeyDown](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onKeyDown.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onKeyDown') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')