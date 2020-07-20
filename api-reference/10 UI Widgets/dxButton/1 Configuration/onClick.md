---
id: dxButton.Options.onClick
type: function(e)
default: null
EventForAction: dxButton.click
---
---
##### shortDescription
A function that is executed when the **Button** is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

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