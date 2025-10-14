---
id: dxDataGrid.Options.onAIColumnResponseReceived
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an AI column request is responded to.

##### param(e): ui/data_grid:AIColumnResponseReceivedEvent
Information about the event.

##### field(e.additionalInfo): Object
Additional data returned in the response.

##### field(e.column): GridBaseColumn
The AI column that initiated the request.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Array<Object>
An array of AI responses.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.error): String
Error text returned in the response.

---
<!-- Description goes here -->