---
EventForAction: ..\4 Events\click.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.validationGroup): object
Specifies the object representing the validation group to which the button is related.

---
Assign a function to perform a custom action when the widget is clicked.

When using DevExtreme SPA Framework, you can navigate to a specific URL on click. For this, assign this URL or its anchor part (#) directly to this option.

To validate the editors that are related to the [validation group](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') specified for this button, use the **validationGroup** field of the object passed as the event handler's parameter. The **validationGroup** object has the following structure.

- **group**  
    The name or object of the validation group that is assigned to the button's **validationGroup** option.
- **validators**  
    An array of **Validator** widgets that are included to the validation group.
- **validate()**   
    The method that allows you to validate the widgets included in the validation group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.