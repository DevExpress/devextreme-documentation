---
id: dxDataGrid.Options.onAIAssistantRequestCreating
type: function(e)
---
---
##### shortDescription
A function that is executed before an AI Assistant request is created.

##### param(e): ui/data_grid:AIAssistantRequestCreatingEvent
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the request.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.context): Object
{WidgetName} context (data and component state information) included in the AI Assistant request.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.responseSchema): Object
The JSON schema of the AI Assistant response.

---
<!-- Description goes here -->