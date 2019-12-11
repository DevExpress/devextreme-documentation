---
##### shortDescription
Provides access to the object that represents the default validation group.

##### return: Object
An object representing the requested group.

---
Use this method to get an object defining the validation group that combines the editors created by the [jQuery Approach](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/') and for which the **validationGroup** option is not specified.

The object returned by the **getGroupConfig(group)** function has the following structure.

- **validators**  
	An array of **Validator** widgets that are included to the validated group.
- **validate()**   
	The method that allows you to validate the widgets included to the current group.
- **validated**  
	The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.