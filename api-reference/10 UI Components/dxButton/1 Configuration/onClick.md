---
id: dxButton.Options.onClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the Button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxButton
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.validationGroup): Object
The validation group to which the button is related.

---
To validate the editors that are related to the [validation group](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#validationGroup') specified for this button, use the **validationGroup** field of the object passed as the event handler's parameter. The **validationGroup** object has the following structure.

- **group**  
    The name or object of the validation group that is assigned to the button's **validationGroup** property.
- **validators**  
    An array of Validator UI components that are included to the validation group.
- **validate()**   
    The method that allows you to validate the UI components included in the validation group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.