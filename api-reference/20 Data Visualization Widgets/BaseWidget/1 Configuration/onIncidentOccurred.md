---
EventForAction: ..\4 Events\incidentOccurred.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **incidentOccurred** event. Executed when an error or warning appears in the widget.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): any
Information on the occurred incident.

---
When an error or warning appears, the widget notifies you by passing a message to the browser console. This message contains the ID of the incident, a brief description, and a link to the [Errors and Warnings](/api-reference/20%20Data%20Visualization%20Widgets/Errors%20and%20Warnings '/Documentation/ApiReference/Data_Visualization_Widgets/Errors_and_Warnings/') section where further information about this incident can be found. However, you can handle errors and warnings in the way that you require. To do this, implement a callback function performing the required actions and assign it to the **onIncidentOccurred** option. Within this function, you can use information about the incident that occurred. This information can be accessed from the **target** field of the object passed to the callback function as a parameter. This information includes the following.

* **id**    
Contains the ID of the incident. The full list of IDs can be found in the **Errors and Warnings** section.
* **type**        
Contains the type of the incident. This field equals *"error"* for errors or *"warning"* for warnings.
* **args**    
Contains the argument of the incident's message. The content of this field varies greatly, depending on the incident. For example, it may contain the name of the data source field that was not specified correctly, or the name of the option that was not set properly.
* **text**        
Contains the text passed to the browser console. This text includes the content of the **args** field, if there are any.
* **widget**    
Contains the name of the widget that produced the error or warning.
* **version**    
Contains the currently used version of the DevExtreme library.