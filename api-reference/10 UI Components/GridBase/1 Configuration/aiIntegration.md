---
id: GridBase.Options.aiIntegration
type: AIIntegration | undefined
default: undefined
---
---
##### shortDescription
Binds the {WidgetName} to an AI service.

---
The DevExtreme {WidgetName} ships with the following AI features:

- AI Columns
- AI Assistant

To activate AI functionality, configure **aiIntegration** and specify {WidgetName} properties as follows:

- Assign *"ai"* to a column's [type](/api-reference/_hidden/dxDataGridColumn/type.md '{basewidgetpath}/Configuration/columns/#type') property to implement an AI Column.
- Set **aiAssistant**.[enabled]({basewidgetpath}/Configuration/aiAssistant/#enabled) to `true` to activate the AI Assistant.

This object stores shared AI options for the {WidgetName} AI Assistant and all AI columns within the component. To configure AI options specific to a column, define **columns[]**.**ai**.[aiIntegration](/api-reference/40%20Common%20Types/15%20grids/ColumnAIOptions/aiIntegration.md '{basewidgetpath}/Configuration/columns/ai/#aiIntegration'). To configure AI options specific to the AI Assistant, define **aiAssistant**.[aiIntegration]({basewidgetpath}/Configuration/aiAssistant/#aiIntegration).

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AIColumns/",
    name: "DataGrid - AI Columns"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/AIColumns/",
    name: "TreeList - AI Columns"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AIAssistant/",
    name: "DataGrid - AI Assistant"
}
