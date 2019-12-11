---
type: event
---
---
##### shortDescription
Fires when the button is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.validationGroup): object
Specifies the validation group object to which the button is related.

---
Instead, you can use the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')

To validate the editors that are related to the [validation group](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') specified for this button, use the **validationGroup** field of the object passed as the event handler's parameter. The **validationGroup** object has the following structure.

- **group**  
	The name or object of the validation group that is assigned to the button's <b>validationGroup</b> option.
- **validators**  
	An array of dxValidator widgets that are included to the validation group.
- **validate()**   
	The method that allows you to validate the widgets included to the validation group.
- **validated**  
	The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.