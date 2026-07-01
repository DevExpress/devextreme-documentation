---
uid: ui/data_grid:AIAssistantRequestCreatingEvent
module: ui/data_grid
export: AIAssistantRequestCreatingEvent
type: Object
inherits: EventInfo,Cancelable,AIAssistantRequestCreatingInfo
references: dxDataGrid.Options.onAIAssistantRequestCreating
generateTypeLink: 
---
---
##### shortDescription
The argument type in the [aIAssistantRequestCreating]({basewidgetpath}/Events/#aIAssistantRequestCreating) event.

---
In addition to the fields described in this section, **AIAssistantRequestCreatingEvent** includes the following fields:

- **additionalInfo**: Additional information included in the AI Assistant request.
- **context**: {WidgetName} context (data and component state information) included in the AI Assistant request.
- **responseSchema**: The JSON schema of the AI Assistant response.