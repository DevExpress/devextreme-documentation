---
type: eventType
---
---
##### shortDescription
Fires when an error or warning appears in a widget.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

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
#include common-link-handleevents