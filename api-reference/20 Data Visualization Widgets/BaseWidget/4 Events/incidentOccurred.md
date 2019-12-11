---
type: eventType
---
---
##### shortDescription
Fires when an error or warning appears in a widget.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
Information about the occurred incident.

---
When implementing a handling function for this event, you can access information about the occurred incident using the **target** field of the function's argument. This information includes the following.

* **id**	
Contains the ID of the incident. The full list of IDs can be found in the [Errors and Warnings](/api-reference/20%20Data%20Visualization%20Widgets/Errors%20and%20Warnings '/Documentation/ApiReference/Data_Visualization_Widgets/Errors_and_Warnings/') section.
* **type**		
Contains the type of the incident. This field equals *'error'* for errors or *'warning'* for warnings.
* **args**	
Contains the argument of the incident's message. The content of this field varies greatly, depending on the incident. For example, it may contain the name of the data source field that was not specified correctly, or the name of the option that was not set properly.
* **text**		
Contains the text passed to the browser console. This text includes the content of the **args** field, if there is any.
* **widget**	
Contains the name of the widget that produced the error or warning.
* **version**	
Contains the currently used version of the ChartJS library.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')