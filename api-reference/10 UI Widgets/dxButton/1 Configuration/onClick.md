---
EventForAction: ..\4 Events\click.md
default: null
type: function(e) | String
---
---
##### shortDescription
A function that is executed when the **Button** is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.validationGroup): Object
The validation group to which the button is related.

---
To validate the editors that are related to the [validation group](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') specified for this button, use the **validationGroup** field of the object passed as the event handler's parameter. The **validationGroup** object has the following structure.

- **group**  
    The name or object of the validation group that is assigned to the button's **validationGroup** option.
- **validators**  
    An array of **Validator** widgets that are included to the validation group.
- **validate()**   
    The method that allows you to validate the widgets included in the validation group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.