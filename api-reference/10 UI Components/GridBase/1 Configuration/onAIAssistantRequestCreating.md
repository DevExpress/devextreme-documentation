---
id: GridBase.Options.onAIAssistantRequestCreating
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an AI Assistant request is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the request.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.context): Record
{WidgetName} context (data and component state information) included in the AI Assistant request.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.responseSchema): Record
The JSON schema of the AI Assistant response.

---
<!-- Description goes here -->