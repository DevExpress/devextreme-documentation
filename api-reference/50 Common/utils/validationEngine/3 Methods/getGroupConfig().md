---
##### shortDescription
Provides access to the object that represents the default validation group.

##### return: object
An object representing the requested group.

---
Use this method to get an object defining the validation group that combines the editors created by the [jQuery Approach](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/') and for which the **validationGroup** option is not specified.

The object returned by the **getGroupConfig(group)** function has the following structure.

- **validators**  
	An array of dxValidator widgets that are included to the validated group.
- **validate()**   
	The method that allows you to validate the widgets included to the current group.
- **validated**  
	The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.