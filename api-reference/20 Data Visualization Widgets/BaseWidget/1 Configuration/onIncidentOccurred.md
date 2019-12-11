---
id: BaseWidget.Options.onIncidentOccurred
type: function(e)
default: null
EventForAction: BaseWidget.incidentOccurred
---
---
##### shortDescription
A function that is executed when an error or warning occurs.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): any
Information on the occurred incident.

---
The widget notifies you of errors and warnings by passing messages to the browser console. Each message contains the incident's ID, a brief description, and a link to the [Errors and Warnings](/api-reference/20%20Data%20Visualization%20Widgets/Errors%20and%20Warnings '/Documentation/ApiReference/Data_Visualization_Widgets/Errors_and_Warnings/') section where further information about this incident can be found.

The **onIncidentOccurred** function allows you to handle errors and warnings the way you require. The object passed to it contains the **target** field. This field provides information about the occurred incident and contains the following properties:

* **id**    
The incident's ID. The full list of IDs can be found in the **Errors and Warnings** section.
* **type**        
The incident's type: *"error"* or *"warning"*.
* **args**    
The argument of the incident's message. Depends on the incident. For example, it may be the name of the data source field that was specified incorrectly, or the name of the option that was not set properly.
* **text**        
The text passed to the browser's console. Includes the **args** content, if there is any.
* **widget**    
The name of the widget that produced the error or warning.
* **version**    
The used DevExtreme version.